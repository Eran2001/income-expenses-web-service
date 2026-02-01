
import React from 'react';
import { useTranslation } from 'react-i18next';

const AccountsPage: React.FC = () => {
  const { t } = useTranslation();
  
  const accounts = [
    { id: 1, name: 'Main Checking', type: 'CHECKING', balance: 2450.00, icon: 'payments', color: 'blue' },
    { id: 2, name: 'Savings Fund', type: 'SAVINGS', balance: 12800.50, icon: 'savings', color: 'emerald' },
    { id: 3, name: 'Travel Credit Card', type: 'CREDIT_CARD', balance: -450.20, icon: 'credit_card', color: 'rose' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{t('accounts')}</h2>
          <p className="text-slate-500 text-sm">Manage your bank accounts and cards.</p>
        </div>
        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined">add</span>
          New Account
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map(acc => (
          <div key={acc.id} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm group">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-xl bg-${acc.color}-500/10 text-${acc.color}-500`}>
                <span className="material-symbols-outlined text-2xl">{acc.icon}</span>
              </div>
              <button className="p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="material-symbols-outlined text-slate-400">more_horiz</span>
              </button>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white">{acc.name}</h3>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider mt-1">{acc.type}</p>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-black">${Math.abs(acc.balance).toLocaleString()}</span>
                {acc.balance < 0 && <span className="text-rose-500 font-bold text-xs">Owed</span>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountsPage;
