
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../app/auth';

const NAV_ITEMS = [
  { path: '/dashboard', label: 'dashboard', icon: 'dashboard' },
  { path: '/transactions', label: 'transactions', icon: 'receipt_long' },
  { path: '/accounts', label: 'accounts', icon: 'account_balance' },
  { path: '/budgets', label: 'budgets', icon: 'savings' },
  { path: '/categories', label: 'categories', icon: 'category' },
  { path: '/reports', label: 'reports', icon: 'bar_chart' },
  { path: '/import', label: 'import', icon: 'upload_file' },
  { path: '/settings', label: 'settings', icon: 'settings' },
];

export const Sidebar: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-transform duration-300 transform
      ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0
    `}>
      <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-slate-800">
        <div className="bg-primary p-1.5 rounded-lg text-white mr-3">
          <span className="material-symbols-outlined text-2xl">account_balance_wallet</span>
        </div>
        <h1 className="text-xl font-bold tracking-tight">FinFlow</h1>
      </div>
      <nav className="p-4 space-y-1 overflow-y-auto h-[calc(100vh-64px)]">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={onClose}
            className={`
              flex items-center px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
              ${location.pathname === item.path 
                ? 'bg-primary/10 text-primary' 
                : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}
            `}
          >
            <span className={`material-symbols-outlined mr-3 ${location.pathname === item.path ? 'filled-icon' : ''}`}>
              {item.icon}
            </span>
            {t(item.label)}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export const Topbar: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const { t, i18n } = useTranslation();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);

  const toggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md sticky top-0 z-40 px-4 lg:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="hidden lg:flex items-center gap-2 text-slate-400 text-sm">
          <span>Pages</span>
          <span>/</span>
          <span className="text-slate-900 dark:text-white font-medium capitalize">
            {window.location.hash.split('/').pop() || 'Dashboard'}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5">
          {['en', 'si', 'ta'].map((l) => (
            <button
              key={l}
              onClick={() => toggleLanguage(l)}
              className={`px-2.5 py-1 text-[10px] font-bold rounded uppercase transition-all ${
                i18n.language === l ? 'bg-white dark:bg-slate-700 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <button 
          onClick={() => {
            const root = window.document.documentElement;
            const newTheme = root.classList.contains('dark') ? 'light' : 'dark';
            root.classList.remove('light', 'dark');
            root.classList.add(newTheme);
            localStorage.setItem('theme', newTheme);
          }}
          className="p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">dark_mode</span>
        </button>

        <div className="relative">
          <button 
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center gap-2 pl-2 border-l border-slate-200 dark:border-slate-800"
          >
            <div className="bg-primary/10 text-primary rounded-full size-9 flex items-center justify-center font-bold text-sm">
              {user?.firstName?.[0]}{user?.lastName?.[0]}
            </div>
          </button>
          
          {showProfile && (
            <>
              <div className="fixed inset-0" onClick={() => setShowProfile(false)} />
              <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-1 animate-in fade-in slide-in-from-top-2">
                <div className="px-3 py-2 border-b border-slate-100 dark:border-slate-700">
                  <p className="text-sm font-bold truncate">{user?.firstName} {user?.lastName}</p>
                  <p className="text-xs text-slate-500 truncate">{user?.email}</p>
                </div>
                <button 
                  onClick={handleLogout}
                  className="w-full text-left px-3 py-2 text-sm text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-lg flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-lg">logout</span>
                  {t('logout')}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
