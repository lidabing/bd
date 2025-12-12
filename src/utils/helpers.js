import { Tag, ThumbsUp, Scale, Code, Bug, Zap, ListVideo, Star, MessageSquare, TrendingUp, AlertTriangle, Activity, Lightbulb, Share, CheckCircle2, FileText, Globe, ShoppingCart, Bookmark, Clock, Target, Sparkles, Percent } from 'lucide-react';

export const getRandomDelay = () => new Promise(resolve => 
  setTimeout(resolve, Math.floor(Math.random() * (1000 - 500 + 1) + 500))
);

export const getAiSuggestions = (pageType) => {
  const type = pageType || 'design';

  const strategies = {
    shopping: [
      { id: 'price_check', label: '全网比价', icon: Tag, color: 'text-rose-600' },
      { id: 'review_summary', label: '评价分析', icon: ThumbsUp, color: 'text-amber-600' },
      { id: 'compare', label: '竞品对比', icon: Scale, color: 'text-blue-600' },
      { id: 'cart_add', label: '加入购物车', icon: ShoppingCart, color: 'text-green-600' },
      { id: 'bookmark', label: '收藏商品', icon: Bookmark, color: 'text-purple-600' },
      { id: 'price_trend', label: '价格走势', icon: Clock, color: 'text-indigo-600' }
    ],
    code: [
      { id: 'explain', label: '代码解读', icon: Code, color: 'text-amber-600' },
      { id: 'debug', label: '查找 Bug', icon: Bug, color: 'text-red-600' },
      { id: 'refactor', label: '重构优化', icon: Zap, color: 'text-purple-600' },
      { id: 'test', label: '生成测试', icon: CheckCircle2, color: 'text-green-600' },
      { id: 'document', label: '生成文档', icon: FileText, color: 'text-blue-600' },
      { id: 'translate_code', label: '代码翻译', icon: Globe, color: 'text-indigo-600' }
    ],
    video: [
      { id: 'summary_video', label: '视频摘要', icon: ListVideo, color: 'text-red-600' },
      { id: 'highlights', label: '提取金句', icon: Star, color: 'text-yellow-600' },
      { id: 'ask_video', label: '相关问答', icon: MessageSquare, color: 'text-blue-600' },
      { id: 'transcript', label: '生成字幕', icon: FileText, color: 'text-purple-600' },
      { id: 'bookmark_video', label: '精彩片段', icon: Bookmark, color: 'text-green-600' },
      { id: 'translate_video', label: '翻译总结', icon: Globe, color: 'text-indigo-600' }
    ],
    finance: [
      { id: 'predict', label: '趋势预测', icon: TrendingUp, color: 'text-emerald-600' },
      { id: 'risk', label: '风险评估', icon: AlertTriangle, color: 'text-rose-600' },
      { id: 'fundamentals', label: '基本面', icon: Activity, color: 'text-blue-600' },
      { id: 'competitors', label: '竞品对比', icon: Scale, color: 'text-purple-600' },
      { id: 'news', label: '相关新闻', icon: FileText, color: 'text-amber-600' },
      { id: 'ai_analysis', label: 'AI 诊断', icon: Sparkles, color: 'text-indigo-600' }
    ],
    bond: [
      { id: 'premium_analysis', label: '溢价率分析', icon: Percent, color: 'text-blue-600' },
      { id: 'redemption_check', label: '强赎监控', icon: AlertTriangle, color: 'text-rose-600' },
      { id: 'ytm_calc', label: '收益率计算', icon: Activity, color: 'text-emerald-600' },
      { id: 'underlying_stock', label: '正股诊断', icon: TrendingUp, color: 'text-purple-600' },
      { id: 'clause_reminder', label: '条款提醒', icon: FileText, color: 'text-amber-600' },
      { id: 'arbitrage', label: '套利机会', icon: Sparkles, color: 'text-indigo-600' }
    ],
    design: [
      { id: 'summary', label: '设计哲学', icon: Lightbulb, color: 'text-indigo-600' },
      { id: 'share', label: '分享卡片', icon: Share, color: 'text-purple-600' },
      { id: 'quiz', label: '理念测验', icon: CheckCircle2, color: 'text-blue-600' },
      { id: 'bookmark_design', label: '收藏灵感', icon: Bookmark, color: 'text-rose-600' },
      { id: 'similar', label: '相关案例', icon: Target, color: 'text-green-600' },
      { id: 'translate_design', label: '多语言版', icon: Globe, color: 'text-amber-600' }
    ],
    default: [
      { id: 'summary', label: '智能摘要', icon: FileText, color: 'text-blue-600' },
      { id: 'translate', label: '全文翻译', icon: Globe, color: 'text-green-600' },
      { id: 'bookmark_default', label: '收藏页面', icon: Bookmark, color: 'text-purple-600' },
      { id: 'share_default', label: '分享链接', icon: Share, color: 'text-indigo-600' }
    ]
  };

  return strategies[type] || strategies.default;
};
