
import React from 'react';
import { useTranslation } from 'react-i18next';

const CategoriesPage: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    { id: 1, name: 'Housing', type: 'EXPENSE', icon: 'home', color: 'blue' },
    { id: 2, name: 'Food & Dining', type: 'EXPENSE', icon: 'restaurant', color: 'amber' },
    { id: 3, name: 'Salary', type: 'INCOME', icon: 'work', color: 'emerald' },
    { id: 4, name: 'Shopping', type: 'EXPENSE', icon: 'shopping_bag', color: 'purple' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t('categories')}</h2>
          <p className="text-slate-500 text-sm">Organize your spending with custom categories.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add</span>
          New Category
        </button>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider">Category</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider">Type</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase text-slate-500 tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
            {categories.map(cat => (
              <tr key={cat.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/30">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg bg-${cat.color}-500/10 text-${cat.color}-500`}>
                      <span className="material-symbols-outlined text-xl">{cat.icon}</span>
                    </div>
                    <span className="font-bold text-sm">{cat.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${
                    cat.type === 'INCOME' ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                  }`}>
                    {cat.type}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CategoriesPage;
