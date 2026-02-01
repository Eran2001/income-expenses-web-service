
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const TransactionsPage: React.FC = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t('transactions')}</h2>
          <p className="text-slate-500 text-sm">Detailed history of all your financial activity.</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 p-2.5 rounded-lg transition-all">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold shadow-lg shadow-primary/20 transition-all">
            <span className="material-symbols-outlined">add</span>
            {t('addTransaction')}
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input 
            type="text" 
            placeholder="Search description, category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <select className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm outline-none">
          <option>All Accounts</option>
          <option>Checking</option>
          <option>Savings</option>
        </select>
        <button className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-4 py-2 rounded-lg text-sm font-medium">
          Last 30 Days
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">{t('date')}</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">{t('description')}</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">{t('category')}</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">Account</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 text-right">{t('amount')}</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 w-16"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[...Array(10)].map((_, i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 text-sm text-slate-500">Oct {24-i}, 2023</td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-sm">Vendor {i + 1}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold bg-blue-500/10 text-blue-600 rounded">General</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">Checking</td>
                  <td className="px-6 py-4 text-sm font-bold text-right text-rose-500">-${(i * 15 + 10).toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-1 rounded opacity-0 group-hover:opacity-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                      <span className="material-symbols-outlined text-xl">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing 1-10 of 124 transactions</p>
          <div className="flex gap-2">
            <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50" disabled>
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-primary text-white font-bold px-4 text-sm">1</button>
            <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 font-bold px-4 text-sm">2</button>
            <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
