
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../app/auth';

const SettingsPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">{t('settings')}</h2>
        <p className="text-slate-500 text-sm">Manage your profile, currency, and preferences.</p>
      </div>

      <div className="space-y-6">
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold">Profile Information</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">First Name</label>
                <input 
                  type="text" 
                  defaultValue={user?.firstName}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase text-slate-400">Last Name</label>
                <input 
                  type="text" 
                  defaultValue={user?.lastName}
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase text-slate-400">Email Address</label>
              <input 
                type="email" 
                defaultValue={user?.email}
                disabled
                className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm text-slate-500 cursor-not-allowed"
              />
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-200 dark:border-slate-800">
            <h3 className="font-bold">Preferences</h3>
          </div>
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">Base Currency</p>
                <p className="text-xs text-slate-500">The primary currency for your dashboard.</p>
              </div>
              <select className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm">
                <option value="USD">USD ($)</option>
                <option value="LKR">LKR (රු)</option>
                <option value="INR">INR (₹)</option>
                <option value="EUR">EUR (€)</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">Language</p>
                <p className="text-xs text-slate-500">Choose your interface language.</p>
              </div>
              <select 
                value={i18n.language}
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value);
                  localStorage.setItem('language', e.target.value);
                }}
                className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm"
              >
                <option value="en">English</option>
                <option value="si">Sinhala (සිංහල)</option>
                <option value="ta">Tamil (தமிழ்)</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-sm">Start of Week</p>
                <p className="text-xs text-slate-500">Day that resets your weekly charts.</p>
              </div>
              <select className="bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm">
                <option>Sunday</option>
                <option>Monday</option>
              </select>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-3">
          <button className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800">Cancel</button>
          <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-2 rounded-lg shadow-lg shadow-primary/20 transition-all">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
