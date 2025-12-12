import React from 'react';
import VideoPage from './VideoPage';
import DesignPage from './DesignPage';
import ShoppingPage from './ShoppingPage';
import FinancePage from './FinancePage';
import CodePage from './CodePage';
import BondPage from './BondPage';

export default function PageContent({ type }) {
  const pages = {
    video: VideoPage,
    design: DesignPage,
    shopping: ShoppingPage,
    finance: FinancePage,
    code: CodePage,
    bond: BondPage
  };
  
  const Component = pages[type] || (() => (
    <div className="flex items-center justify-center h-full text-gray-400 font-light text-xl">
      📄 通用浏览模式
    </div>
  ));
  
  return <Component />;
}
