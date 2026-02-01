
import React from 'react';
import { Outlet } from 'react-router-dom';

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-4">
      <div className="w-full max-w-[440px]">
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-xl text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-3xl">account_balance_wallet</span>
            </div>
            <h1 className="text-3xl font-black tracking-tighter">FinFlow</h1>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default PublicLayout;
