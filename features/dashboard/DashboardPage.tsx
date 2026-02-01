
import React from 'react';
import { useTranslation } from 'react-i18next';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area, PieChart, Pie, Cell 
} from 'recharts';

const MOCK_BAR_DATA = [
  { name: 'Mon', income: 400, expense: 240 },
  { name: 'Tue', income: 300, expense: 139 },
  { name: 'Wed', income: 200, expense: 980 },
  { name: 'Thu', income: 278, expense: 390 },
  { name: 'Fri', income: 189, expense: 480 },
  { name: 'Sat', income: 239, expense: 380 },
  { name: 'Sun', income: 349, expense: 430 },
];

const MOCK_PIE_DATA = [
  { name: 'Housing', value: 400, color: '#137fec' },
  { name: 'Food', value: 300, color: '#0bda5b' },
  { name: 'Transport', value: 300, color: '#f59e0b' },
  { name: 'Entertainment', value: 200, color: '#ec4899' },
];

const KPICard: React.FC<{ title: string; value: string; trend: number; icon: string; color: string }> = ({ title, value, trend, icon, color }) => (
  <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{title}</p>
      <div className={`p-2 rounded-lg bg-${color}-500/10 text-${color}-500`}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
    </div>
    <div className="flex items-baseline gap-2">
      <p className="text-2xl font-bold tracking-tight">{value}</p>
      <span className={`text-xs font-bold flex items-center ${trend >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
        <span className="material-symbols-outlined text-[14px]">
          {trend >= 0 ? 'trending_up' : 'trending_down'}
        </span>
        {Math.abs(trend)}%
      </span>
    </div>
  </div>
);

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
          <p className="text-slate-500 text-sm">Welcome back to your financial summary.</p>
        </div>
        <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 text-sm font-bold shadow-lg shadow-primary/20 transition-all">
          <span className="material-symbols-outlined">add</span>
          {t('addTransaction')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <KPICard title={t('totalIncome')} value="$5,240.00" trend={12} icon="trending_up" color="green" />
        <KPICard title={t('totalExpense')} value="$3,120.00" trend={-5} icon="trending_down" color="rose" />
        <KPICard title={t('netBalance')} value="$2,120.00" trend={7} icon="account_balance_wallet" color="blue" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-lg mb-6">Income vs Expenses</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={MOCK_BAR_DATA}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.1} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="income" fill="#137fec" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expense" fill="#f43f5e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-bold text-lg mb-6">Category Breakdown</h3>
          <div className="h-[300px] w-full flex items-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={MOCK_PIE_DATA}
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {MOCK_PIE_DATA.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="w-1/3 space-y-4">
              {MOCK_PIE_DATA.map(item => (
                <div key={item.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-500">{item.name}</span>
                  </div>
                  <span className="font-bold">${item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
          <h3 className="font-bold text-lg">{t('recentTransactions')}</h3>
          <button className="text-primary text-sm font-bold hover:underline">{t('viewAll')}</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">{t('date')}</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">{t('description')}</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500">{t('category')}</th>
                <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 text-right">{t('amount')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {[1, 2, 3].map((i) => (
                <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-sm">Oct 24, 2023</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">Starbucks Coffee</span>
                      <span className="text-xs text-slate-400">Card payment</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-[10px] font-bold bg-amber-500/10 text-amber-600 rounded">Food</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-right text-rose-500">-$12.50</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
