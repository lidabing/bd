import { PenTool, ShoppingCart, Youtube, Code, TrendingUp, Mail, Map, FileText } from 'lucide-react';

export const INITIAL_TABS = [
  { id: 'tab-5', type: 'design', title: '设计理念 - Liquid Intelligence', url: 'design.ai-browser.com/manifesto', icon: PenTool, theme: 'indigo' },
  { id: 'tab-1', type: 'shopping', title: 'Sony WH-1000XM5 - 官方旗舰店', url: 'store.sony.com/products/wh-1000xm5', icon: ShoppingCart, theme: 'rose' },
  { id: 'tab-6', type: 'video', title: 'AI 浏览器的未来 - YouTube', url: 'youtube.com/watch?v=ai-browser-demo', icon: Youtube, theme: 'red' },
  { id: 'tab-3', type: 'code', title: 'payment_logic.ts - GitHub', url: 'github.com/stripe/payment-gateway/blob/main/logic.ts', icon: Code, theme: 'amber' },
  { id: 'tab-2', type: 'finance', title: '英伟达 (NVDA) - 美股行情', url: 'marketwatch.com/investing/stock/nvda', icon: TrendingUp, theme: 'emerald' },
  { id: 'tab-7', type: 'bond', title: '兴业转债 (113052) - 集思录', url: 'jisilu.cn/data/convertible_bond_detail/113052', icon: TrendingUp, theme: 'blue' }
];

export const INITIAL_ACTIVE_TAB_ID = 'tab-5';

export const BOOKMARKS = [
  { title: "Gmail", icon: Mail },
  { title: "YouTube", icon: Youtube },
  { title: "Maps", icon: Map },
  { title: "GitHub - Dashboard", icon: Code },
  { title: "Figma", icon: PenTool },
  { title: "Notion", icon: FileText },
];
