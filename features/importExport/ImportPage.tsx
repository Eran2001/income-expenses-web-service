
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

enum ImportStep {
  UPLOAD = 1,
  MAP = 2,
  PREVIEW = 3,
  COMMIT = 4
}

const ImportPage: React.FC = () => {
  const { t } = useTranslation();
  const [step, setStep] = useState<ImportStep>(ImportStep.UPLOAD);
  const [file, setFile] = useState<File | null>(null);

  const steps = [
    { id: 1, label: 'Upload' },
    { id: 2, label: 'Map Fields' },
    { id: 3, label: 'Preview' },
    { id: 4, label: 'Done' },
  ];

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Import Transactions</h2>
        <p className="text-slate-500 text-sm">Upload your bank statement (CSV) to sync your data.</p>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between relative px-2">
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
        {steps.map((s) => (
          <div key={s.id} className="relative z-10 flex flex-col items-center">
            <div className={`
              size-10 rounded-full flex items-center justify-center font-bold text-sm border-4 border-slate-50 dark:border-slate-950 transition-all
              ${step >= s.id ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}
            `}>
              {s.id}
            </div>
            <span className={`text-[10px] font-bold uppercase mt-2 tracking-wider ${step >= s.id ? 'text-primary' : 'text-slate-400'}`}>
              {s.label}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-sm p-8 min-h-[400px] flex flex-col">
        {step === ImportStep.UPLOAD && (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="size-20 bg-primary/10 text-primary rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">cloud_upload</span>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">Select CSV File</h3>
              <p className="text-slate-500 text-sm max-w-xs mx-auto">Upload the export file from your bank or credit card provider.</p>
            </div>
            <label className="cursor-pointer bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 px-6 py-3 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 transition-all">
              <input type="file" className="hidden" accept=".csv" onChange={handleFileChange} />
              <span className="text-sm font-bold text-slate-600 dark:text-slate-400">
                {file ? file.name : 'Click to Browse File'}
              </span>
            </label>
          </div>
        )}

        {step === ImportStep.MAP && (
          <div className="flex-1 space-y-6">
            <h3 className="font-bold">Map Columns</h3>
            <div className="space-y-4">
              {['Date', 'Description', 'Amount', 'Category'].map((field) => (
                <div key={field} className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm">{field}</span>
                    <span className="material-symbols-outlined text-slate-400">arrow_forward</span>
                  </div>
                  <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg px-4 py-2 text-sm">
                    <option>Select Column...</option>
                    <option>Column 1 (Date)</option>
                    <option>Column 2 (Memo)</option>
                    <option>Column 3 (Value)</option>
                  </select>
                </div>
              ))}
            </div>
          </div>
        )}

        {step === ImportStep.PREVIEW && (
          <div className="flex-1">
            <h3 className="font-bold mb-4">Preview (5 records found)</h3>
            <div className="border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800/50">
                  <tr>
                    <th className="px-4 py-2 font-bold uppercase tracking-wider text-slate-500">Date</th>
                    <th className="px-4 py-2 font-bold uppercase tracking-wider text-slate-500">Description</th>
                    <th className="px-4 py-2 font-bold uppercase tracking-wider text-slate-500">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[1,2,3,4,5].map(i => (
                    <tr key={i}>
                      <td className="px-4 py-2">2023-10-2{i}</td>
                      <td className="px-4 py-2">Payment Transaction #{i}</td>
                      <td className="px-4 py-2 font-bold">-$50.00</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {step === ImportStep.COMMIT && (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4">
            <div className="size-20 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-lg">Import Complete</h3>
              <p className="text-slate-500 text-sm">124 transactions have been successfully added to your account.</p>
            </div>
            <button 
              onClick={() => setStep(ImportStep.UPLOAD)}
              className="bg-primary text-white font-bold px-6 py-2 rounded-lg"
            >
              Back to Transactions
            </button>
          </div>
        )}

        <div className="mt-8 flex justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
          <button 
            onClick={prevStep}
            disabled={step === 1 || step === 4}
            className="px-6 py-2 text-sm font-bold text-slate-500 hover:text-slate-800 disabled:opacity-30"
          >
            Previous
          </button>
          {step < 4 && (
            <button 
              onClick={nextStep}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-2 rounded-lg shadow-lg shadow-primary/20 transition-all"
            >
              {step === 3 ? 'Confirm Import' : 'Continue'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImportPage;
