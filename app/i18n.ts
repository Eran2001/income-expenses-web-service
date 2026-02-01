
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    common: {
      dashboard: "Dashboard",
      transactions: "Transactions",
      accounts: "Accounts",
      budgets: "Budgets",
      reports: "Reports",
      categories: "Categories",
      settings: "Settings",
      import: "Import",
      logout: "Logout",
      addTransaction: "Add Transaction",
      totalIncome: "Total Income",
      totalExpense: "Total Expense",
      netBalance: "Net Balance",
      recentTransactions: "Recent Transactions",
      viewAll: "View All",
      amount: "Amount",
      date: "Date",
      description: "Description",
      category: "Category",
      status: "Status",
      action: "Action",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit"
    }
  },
  si: {
    common: {
      dashboard: "දළ විශ්ලේෂණය",
      transactions: "ගනුදෙනු",
      accounts: "ගිණුම්",
      budgets: "අයවැය",
      reports: "වාර්තා",
      categories: "ප්‍රවර්ග",
      settings: "සැකසුම්",
      import: "ආනයනය",
      logout: "පිටවීම",
      addTransaction: "ගනුදෙනුවක් එක් කරන්න",
      totalIncome: "මුළු ආදායම",
      totalExpense: "මුළු වියදම",
      netBalance: "ශේෂය",
      recentTransactions: "මෑතකාලීන ගනුදෙනු",
      viewAll: "සියල්ල බලන්න",
      amount: "මුදල",
      date: "දිනය",
      description: "විස්තරය",
      category: "ප්‍රවර්ගය",
      status: "තත්ත්වය",
      action: "ක්‍රියාව",
      save: "සුරකින්න",
      cancel: "අවලංගු කරන්න",
      delete: "මකන්න",
      edit: "සංස්කරණය"
    }
  },
  ta: {
    common: {
      dashboard: "கட்டுப்பாட்டகம்",
      transactions: "பரிவர்த்தனைகள்",
      accounts: "கணக்குகள்",
      budgets: "பட்ஜெட்",
      reports: "அறிக்கைகள்",
      categories: "வகைகள்",
      settings: "அமைப்புகள்",
      import: "இறக்குமதி",
      logout: "வெளியேறு",
      addTransaction: "பரிவர்த்தனை சேர்க்க",
      totalIncome: "மொத்த வருமானம்",
      totalExpense: "மொத்த செலவு",
      netBalance: "நிகர இருப்பு",
      recentTransactions: "சமீபத்திய பரிவர்த்தனைகள்",
      viewAll: "அனைத்தையும் பார்",
      amount: "தொகை",
      date: "தேதி",
      description: "விளக்கம்",
      category: "வகை",
      status: "நிலை",
      action: "செயல்",
      save: "சேமி",
      cancel: "ரத்துசெய்",
      delete: "நீக்கு",
      edit: "திருத்து"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    ns: ['common'],
    defaultNS: 'common',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
