
export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  currency: string;
  timezone: string;
  language: 'en' | 'si' | 'ta';
}

export interface AuthResponse {
  accessToken: string;
  user: User;
}

export interface Account {
  id: number;
  name: string;
  type: 'CHECKING' | 'SAVINGS' | 'CREDIT_CARD' | 'INVESTMENT' | 'CASH';
  balance: number;
  currency: string;
  createdAt: string;
}

export interface Category {
  id: number;
  name: string;
  type: 'INCOME' | 'EXPENSE';
  icon: string;
  color: string;
}

export interface Transaction {
  id: number;
  date: string;
  amount: number;
  description: string;
  accountId: number;
  categoryId: number;
  type: 'INCOME' | 'EXPENSE' | 'TRANSFER';
  isRecurring: boolean;
  status: 'PENDING' | 'COMPLETED';
  category?: Category;
  account?: Account;
}

export interface Budget {
  id: number;
  categoryId: number;
  amount: number;
  period: 'MONTHLY';
  month: number;
  year: number;
  spent: number;
  category?: Category;
}

export interface SummaryKPI {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
  incomeGrowth: number;
  expenseGrowth: number;
  balanceGrowth: number;
}
