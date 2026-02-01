
import React from 'react';
import { useTranslation } from 'react-i18next';

const BudgetsPage: React.FC = () => {
  const { t } = useTranslation();

  const budgets = [
    { category: 'Housing', limit: 1500, spent: 1500, color: 'blue' },
    { category: 'Food', limit: 600, spent: 420, color: 'amber' },
    { category: 'Transport', limit: 300, spent: 345, color: 'emerald' },
    { category: 'Entertainment', limit: 200, spent: 50, color: 'purple' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t('budgets')}</h2>
          <p className="text-slate-500 text-sm">Monthly spending limits and tracking.</p>
        </div>
        <div className="flex items-center gap-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-1">
          <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><span className="material-symbols-outlined text-lg">chevron_left</span></button>
          <span className="text-sm font-bold px-2">October 2023</span>
          <button className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded"><span className="material-symbols-outlined text-lg">chevron_right</span></button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {budgets.map(b => {
          const percent = Math.min((b.spent / b.limit) * 100, 100);
          const isOver = b.spent > b.limit;

          return (
            <div key={b.category} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold">{b.category}</h3>
                <div className="text-right">
                  <span className={`text-xs font-bold ${isOver ? 'text-rose-500' : 'text-slate-400'}`}>
                    ${b.spent} of ${b.limit}
                  </span>
                </div>
              </div>
              <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${isOver ? 'bg-rose-500' : 'bg-primary'}`} 
                  style={{ width: `${percent}%` }} 
                />
              </div>
              {isOver && (
                <div className="mt-3 flex items-center gap-1.5 text-[10px] font-bold text-rose-500 uppercase">
                  <span className="material-symbols-outlined text-sm">warning</span>
                  Budget Exceeded by ${(b.spent - b.limit).toFixed(2)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BudgetsPage;
