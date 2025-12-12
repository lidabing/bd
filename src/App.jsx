import React, { useState, useEffect } from 'react';
import { Search, Lock, Star, Puzzle, PanelRight, MoreVertical } from 'lucide-react';
import TabBar from './components/TabBar';
import Toolbar from './components/Toolbar';
import Bookmarks from './components/Bookmarks';
import StatusIsland from './components/StatusIsland';
import SidePanel from './components/sidepanel';
import PageContent from './components/pages';
import { INITIAL_TABS } from './constants/tabs';
import { CHROME_COLORS } from './constants/styles';
import { getRandomDelay, getAiSuggestions } from './utils/helpers';

function App() {
  const [tabs, setTabs] = useState(INITIAL_TABS);
  const [activeTabId, setActiveTabId] = useState('tab-5');
  const [aiState, setAiState] = useState('idle');
  const [isPinned, setIsPinned] = useState(true);
  const [isExpanded, setIsExpanded] = useState(true);
  const [sidePanelOpen, setSidePanelOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [currentActions, setCurrentActions] = useState([]);

  const activeTab = tabs.find(t => t.id === activeTabId);

  useEffect(() => {
    const simulateAiAnalysis = async () => {
      if (!activeTab) return;
      
      setAiState('analyzing');
      await getRandomDelay();
      setAiState('thinking');
      await getRandomDelay();
      
      const suggestions = getAiSuggestions(activeTab.type);
      setCurrentActions(suggestions);
      setAiState('suggestion');
      
      // 钉住时保持展开状态并显示建议
      if (isPinned) {
        setIsExpanded(true);
        setAiState('hover');
      } else {
        setTimeout(() => {
          setAiState('idle');
          setIsExpanded(false);
        }, 8000);
      }
    };

    simulateAiAnalysis();
  }, [activeTabId, activeTab, isPinned]);

  const handleIslandHover = () => {
    if (!isPinned && aiState !== 'analyzing' && aiState !== 'thinking') {
      setIsExpanded(true);
      setAiState('hover');
    }
  };

  const handleIslandLeave = () => {
    if (!isPinned) {
      setIsExpanded(false);
      if (currentActions.length > 0) {
        setAiState('suggestion');
      } else {
        setAiState('idle');
      }
    }
  };

  const handleTogglePin = () => {
    setIsPinned(!isPinned);
    setIsExpanded(true);
  };

  const handleToggleSidebar = () => {
    setSidePanelOpen(!sidePanelOpen);
  };

  const handleAction = (action) => {
    setSidePanelOpen(true);
    setAiState('idle');
    
    let responseText = `正在为您分析"${action.label}"...`;
    
    // 为不同的动作生成相应的响应文本
    // 购物相关
    if (action.id === 'price_check') responseText = "已完成全网比价。京东自营当前价格最优，建议入手。";
    if (action.id === 'review_summary') responseText = "基于 4000+ 条评论分析：好评率 96%。主要优点是降噪和音质，缺点是透气性。";
    if (action.id === 'compare') responseText = "已为您对比 3 款同价位产品，当前商品在降噪性能上领先。";
    if (action.id === 'cart_add') responseText = "商品已加入购物车，当前购物车共 3 件商品。";
    if (action.id === 'bookmark') responseText = "商品已收藏，您可以在收藏夹中查看。";
    if (action.id === 'price_trend') responseText = "近30天价格波动：最低 ¥2,399，最高 ¥2,899，当前价格处于中等偏低水平。";
    
    // 代码相关
    if (action.id === 'explain') responseText = "这段代码是一个支付处理函数，包含基本的参数校验和异步调用。";
    if (action.id === 'debug') responseText = "发现 2 个潜在问题：1. 缺少错误处理 2. 未验证返回值类型";
    if (action.id === 'refactor') responseText = "建议重构：提取验证逻辑为独立函数，使用 async/await 替代 Promise 链。";
    if (action.id === 'test') responseText = "已生成 5 个单元测试用例，覆盖正常流程和边界情况。";
    if (action.id === 'document') responseText = "已生成 JSDoc 格式文档，包含函数说明、参数类型和返回值描述。";
    if (action.id === 'translate_code') responseText = "代码已翻译为 Python 版本，保持相同的业务逻辑。";
    
    // 视频相关
    if (action.id === 'summary_video') responseText = "视频核心观点：\n1. AI 改变交互范式\n2. 原生融合是未来趋势";
    if (action.id === 'highlights') responseText = "已提取 5 个金句，包括设计理念和技术展望。";
    if (action.id === 'ask_video') responseText = "您可以询问：1. AI如何改变浏览器？ 2. 未来交互趋势是什么？";
    if (action.id === 'transcript') responseText = "字幕已生成，包含时间轴和完整文本内容。";
    if (action.id === 'bookmark_video') responseText = "已标记 3 个精彩片段：开场介绍、核心演示、总结展望。";
    if (action.id === 'translate_video') responseText = "视频摘要已翻译为英文版本。";
    
    // 金融相关
    if (action.id === 'predict') responseText = "基于技术指标分析，该股票短期呈上涨趋势 (Bullish)。";
    if (action.id === 'risk') responseText = "风险评级：中等。主要风险来自市场波动和行业竞争。";
    if (action.id === 'fundamentals') responseText = "市盈率 45，市净率 12，ROE 28%，财务状况良好。";
    if (action.id === 'competitors') responseText = "主要竞争对手：AMD、Intel，市值对比和技术优势分析已生成。";
    if (action.id === 'news') responseText = "近期新闻：发布新一代 AI 芯片，获得多家机构看好评级。";
    if (action.id === 'ai_analysis') responseText = "AI 综合评分 85/100，建议：适合长期持有，短期可能有调整。";
    
    // 设计相关
    if (action.id === 'summary') responseText = "页面核心观点：界面应如水般随形，最好的交互不是点击，而是意图的自然流露。";
    if (action.id === 'share') responseText = "分享卡片已生成，包含核心观点和精美排版。";
    if (action.id === 'quiz') responseText = "测验已生成，共3题，测试您对流体智能设计理念的理解程度。";
    if (action.id === 'bookmark_design') responseText = "设计灵感已收藏到「UI/UX」文件夹。";
    if (action.id === 'similar') responseText = "为您推荐 5 个相关设计案例，涵盖动态岛、卡片式交互等理念。";
    if (action.id === 'translate_design') responseText = "内容已翻译为英文、日文、韩文三个版本。";
    
    const newMsg = {
      id: Date.now(),
      type: 'result',
      role: 'ai',
      action,
      content: responseText
    };
    setChatHistory(prev => [...prev, newMsg]);
  };

  const handleNewMessage = (text) => {
    if (!text.trim()) return;
    
    setChatHistory(prev => [
      ...prev,
      { id: Date.now(), role: 'user', content: text },
      { id: Date.now() + 1, role: 'ai', content: '我已收到您的请求，正在处理中...' }
    ]);
  };

  const handleNewTab = () => {
    const newTab = {
      id: Date.now(),
      title: '新标签页',
      icon: Search,
      theme: CHROME_COLORS.default,
      type: 'design'
    };
    setTabs([...tabs, newTab]);
    setActiveTabId(newTab.id);
  };

  const handleCloseTab = (tabId) => {
    if (tabs.length === 1) return;
    const newTabs = tabs.filter(t => t.id !== tabId);
    setTabs(newTabs);
    if (activeTabId === tabId) {
      setActiveTabId(newTabs[newTabs.length - 1].id);
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden font-sans text-[#3c4043] bg-white">
      {/* Fixed Top Navigation */}
      <div className="bg-[#dee1e6] pt-2 px-1.5 flex flex-col z-50 relative shrink-0">
        {/* Tab Bar */}
        <TabBar 
          tabs={tabs}
          activeTabId={activeTabId}
          onTabChange={setActiveTabId}
          onNewTab={handleNewTab}
          onCloseTab={handleCloseTab}
        />

        {/* Toolbar & Omnibox */}
        <div className="bg-white py-1.5 px-3 flex items-center gap-2 shadow-sm relative z-20">
          <Toolbar />
          
          {/* INTELLIGENT OMNIBOX */}
          <div className="flex-1 relative h-8 group/omnibox">
            <div className="absolute inset-0 bg-[#f1f3f4] border border-transparent group-focus-within/omnibox:bg-white group-focus-within/omnibox:border-blue-500/30 group-focus-within/omnibox:shadow-[0_1px_3px_rgba(0,0,0,0.1)] rounded-full transition-all duration-200 flex items-center pl-3 pr-1">
              <div className="mr-2 p-1 hover:bg-[#e0e3e7] rounded-full cursor-pointer">
                <Lock size={12} className="text-[#5f6368]" />
              </div>
              <div className="flex-1 text-[13px] truncate text-[#202124] selection:bg-[#b3d7ff]">
                <span className="text-black">{activeTab.url.split('/')[0]}</span>
                <span className="text-[#5f6368]">/{activeTab.url.split('/').slice(1).join('/')}</span>
              </div>

              <StatusIsland
                state={aiState}
                isPinned={isPinned}
                isExpanded={isExpanded}
                actions={currentActions}
                onToggleSidebar={handleToggleSidebar}
                onTogglePin={handleTogglePin}
                onAction={handleAction}
                onHover={handleIslandHover}
                onLeave={handleIslandLeave}
              />
              
              {/* Standard Right Icons */}
              <div className="flex items-center gap-1 ml-1">
                <button className="p-1.5 rounded-full hover:bg-[#e0e3e7] text-[#5f6368] transition-colors">
                  <Star size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1 text-[#5f6368] ml-1">
            <button className="p-1.5 rounded-full hover:bg-[#f1f3f4] transition-colors">
              <Puzzle size={18} />
            </button>
            <button 
              onClick={() => setSidePanelOpen(!sidePanelOpen)} 
              className={`p-1.5 rounded-full transition-colors ${sidePanelOpen ? 'bg-blue-100 text-blue-600' : 'hover:bg-[#f1f3f4]'}`}
            >
              <PanelRight size={18} />
            </button>
            <div className="mx-1 h-4 w-px bg-gray-300"></div>
            <button className="p-1 rounded-full hover:bg-[#f1f3f4] transition-colors">
              <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-white text-xs font-bold">A</div>
            </button>
            <button className="p-1.5 rounded-full hover:bg-[#f1f3f4] transition-colors">
              <MoreVertical size={16} />
            </button>
          </div>
        </div>

        {/* Bookmarks Bar */}
        <Bookmarks />
      </div>

      {/* Content Area (Content Wrapper) */}
      <div className="flex-1 flex overflow-hidden bg-white">
        {/* Page Viewport - Sidebar pushes content */}
        <div className="flex-1 h-full overflow-y-auto custom-scrollbar transition-all duration-300 ease-in-out">
          <PageContent type={activeTab?.type} />
        </div>
        
        {/* Sidebar Container - Flex positioned, not overlapping */}
        <div className={`h-full transition-all duration-300 ease-in-out overflow-hidden ${sidePanelOpen ? 'w-[400px]' : 'w-0'}`}>
          <SidePanel 
            open={sidePanelOpen} 
            onClose={() => setSidePanelOpen(false)}
            chatHistory={chatHistory}
            onNewMessage={handleNewMessage}
            activeTab={activeTab}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
