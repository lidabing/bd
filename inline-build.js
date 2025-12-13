import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.join(__dirname, 'dist');
const htmlPath = path.join(distDir, 'index.html');
const jsPath = path.join(distDir, 'bundle.js');
const cssPath = path.join(distDir, 'bundle.css');
const outputPath = path.join(distDir, 'index.html'); // 直接覆盖原文件
const backupPath = path.join(distDir, 'index-external.html'); // 备份原文件

// 备份原始 HTML
fs.copyFileSync(htmlPath, backupPath);

// 读取文件
let html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.existsSync(jsPath) ? fs.readFileSync(jsPath, 'utf8') : '';
const css = fs.existsSync(cssPath) ? fs.readFileSync(cssPath, 'utf8') : '';

// 精确替换 - 只匹配完整的 HTML 标签行
const lines = html.split('\n');
const newLines = lines.map(line => {
  // 替换 CSS link 标签
  if (line.includes('rel="stylesheet"') && line.includes('bundle.css')) {
    return `    <style>${css}</style>`;
  }
  // 替换 JS script 标签
  if (line.includes('<script') && line.includes('bundle.js')) {
    return `    <script type="module">${js}</script>`;
  }
  // 移除 vite.svg 引用
  if (line.includes('vite.svg')) {
    return '';
  }
  return line;
});

html = newLines.join('\n');

// 写入新文件
fs.writeFileSync(outputPath, html, 'utf8');

console.log('✓ 已生成内联版本: dist/index.html');
console.log('  文件大小: ' + Math.round(html.length / 1024) + ' KB');
console.log('  所有 CSS 和 JS 已内联到单个 HTML 文件中');
console.log('  原始版本已备份到: dist/index-external.html');
