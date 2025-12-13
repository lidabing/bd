const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'dist');
const htmlPath = path.join(distPath, 'index.html');
const outputPath = path.join(__dirname, 'index-bundled.html');

// 读取HTML文件
let html = fs.readFileSync(htmlPath, 'utf8');

// 查找并内联CSS
const cssMatch = html.match(/href="\/assets\/(index-[^"]+\.css)"/);
if (cssMatch) {
  const cssFile = path.join(distPath, 'assets', cssMatch[1]);
  const css = fs.readFileSync(cssFile, 'utf8');
  html = html.replace(
    /<link[^>]*href="\/assets\/index-[^"]+\.css"[^>]*>/,
    `<style>${css}</style>`
  );
}

// 查找所有JS文件引用
const scriptMatches = [];
const scriptRegex = /<script[^>]*src="\/assets\/([^"]+\.js)"[^>]*><\/script>/g;
let match;
while ((match = scriptRegex.exec(html)) !== null) {
  scriptMatches.push({
    fullMatch: match[0],
    filename: match[1]
  });
}

// 查找modulepreload引用
const preloadMatches = [];
const preloadRegex = /<link[^>]*href="\/assets\/([^"]+\.js)"[^>]*>/g;
while ((match = preloadRegex.exec(html)) !== null) {
  preloadMatches.push({
    fullMatch: match[0],
    filename: match[1]
  });
}

// 移除所有modulepreload link标签
preloadMatches.forEach(pm => {
  html = html.replace(pm.fullMatch, '');
});

// 读取所有JS文件并合并
const jsFiles = new Map();

// 收集所有JS文件
[...scriptMatches, ...preloadMatches].forEach(m => {
  if (!jsFiles.has(m.filename)) {
    const jsPath = path.join(distPath, 'assets', m.filename);
    if (fs.existsSync(jsPath)) {
      jsFiles.set(m.filename, fs.readFileSync(jsPath, 'utf8'));
    }
  }
});

// 按依赖顺序排列: react-vendor -> icons -> index
const orderedFiles = [];
jsFiles.forEach((content, filename) => {
  if (filename.includes('react-vendor')) {
    orderedFiles.unshift({ filename, content });
  } else if (filename.includes('icons')) {
    orderedFiles.splice(1, 0, { filename, content });
  } else {
    orderedFiles.push({ filename, content });
  }
});

// 处理ES6 import语句
let combinedJs = '';
const moduleCode = new Map();

orderedFiles.forEach(({ filename, content }) => {
  // 移除import语句,因为我们要内联所有代码
  let processedContent = content;
  
  // 对于icons文件,移除import语句并直接使用react-vendor的导出
  if (filename.includes('icons')) {
    processedContent = processedContent.replace(/import\s*{\s*r\s+as\s+h\s*}\s*from\s*["']\.\/react-vendor[^"']+["'];?/g, '');
    // icons文件使用h作为react的引用,我们需要确保h指向React
    processedContent = 'const h = window.React;\n' + processedContent;
  }
  
  moduleCode.set(filename, processedContent);
});

// 合并所有代码
// 1. React vendor (暴露React到全局)
const reactVendor = moduleCode.get([...moduleCode.keys()].find(k => k.includes('react-vendor')));
if (reactVendor) {
  combinedJs += '(function() {\n';
  combinedJs += reactVendor;
  // 暴露React和ReactDOM到window
  combinedJs += '\nwindow.React = {};\n';
  combinedJs += 'try { if (typeof module !== "undefined" && module.exports) { window.React = module.exports; } } catch(e) {}\n';
  combinedJs += '})();\n\n';
}

// 2. Icons
const icons = moduleCode.get([...moduleCode.keys()].find(k => k.includes('icons')));
if (icons) {
  combinedJs += '(function() {\n';
  combinedJs += icons;
  combinedJs += '\nif (typeof module !== "undefined" && module.exports) { window.LucideIcons = module.exports; }\n';
  combinedJs += '})();\n\n';
}

// 3. 主应用代码
const mainJs = moduleCode.get([...moduleCode.keys()].find(k => k.includes('index') && !k.includes('react') && !k.includes('icons')));
if (mainJs) {
  combinedJs += '(function() {\n';
  combinedJs += mainJs;
  combinedJs += '\n})();\n';
}

// 替换所有script标签为单个内联script
scriptMatches.forEach(sm => {
  html = html.replace(sm.fullMatch, '');
});

// 在body结束前插入合并的script
html = html.replace('</body>', `  <script type="module">\n${combinedJs}\n  </script>\n</body>`);

// 写入输出文件
fs.writeFileSync(outputPath, html, 'utf8');

console.log(`✅ 单文件HTML已生成: ${outputPath}`);
console.log(`📦 文件大小: ${(fs.statSync(outputPath).size / 1024).toFixed(2)} KB`);
