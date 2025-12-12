import { Tag, ThumbsUp, Scale, Code, Bug, Zap, ListVideo, Star, MessageSquare, TrendingUp, AlertTriangle, Activity, Lightbulb, Share, CheckCircle2, FileText, Globe } from 'lucide-react';

export const getRandomDelay = () => Math.floor(Math.random() * (6000 - 2000 + 1) + 2000);

export const getAiSuggestions = (pageContent) => {
  const type = pageContent?.type || 'design';

  const strategies = {
    shopping: [
      { id: 'price_check', label: '全网比价', icon: Tag, color: 'text-rose-600' },
      { id: 'review_summary', label: '评价分析', icon: ThumbsUp, color: 'text-amber-600' },
      { id: 'compare', label: '竞品对比', icon: Scale, color: 'text-blue-600' }
    ],
    code: [
      { id: 'explain', label: '代码解读', icon: Code, color: 'text-amber-600' },
      { id: 'debug', label: '查找 Bug', icon: Bug, color: 'text-red-600' },
      { id: 'refactor', label: '重构优化', icon: Zap, color: 'text-purple-600' }
    ],
    video: [
      { id: 'summary_video', label: '视频摘要', icon: ListVideo, color: 'text-red-600' },
      { id: 'highlights', label: '提取金句', icon: Star, color: 'text-yellow-600' },
      { id: 'ask_video', label: '相关问答', icon: MessageSquare, color: 'text-blue-600' }
    ],
    finance: [
      { id: 'predict', label: '趋势预测', icon: TrendingUp, color: 'text-emerald-600' },
      { id: 'risk', label: '风险评估', icon: AlertTriangle, color: 'text-rose-600' },
      { id: 'fundamentals', label: '基本面', icon: Activity, color: 'text-blue-600' }
    ],
    design: [
      { id: 'summary', label: '设计哲学', icon: Lightbulb, color: 'text-indigo-600' },
      { id: 'share', label: '分享卡片', icon: Share, color: 'text-purple-600' },
      { id: 'quiz', label: '理念测验', icon: CheckCircle2, color: 'text-blue-600' }
    ],
    default: [
      { id: 'summary', label: '智能摘要', icon: FileText, color: 'text-blue-600' },
      { id: 'translate', label: '全文翻译', icon: Globe, color: 'text-green-600' }
    ]
  };

  return (strategies[type] || strategies.default).slice(0, 3);
};
