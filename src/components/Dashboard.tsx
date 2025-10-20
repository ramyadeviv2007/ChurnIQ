import { useState } from 'react';
import { Brain, Lightbulb, Home, Info, Mail, Settings, Moon, Sun, Users, FileText, PieChart, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../components/Auth.css';


export default function Dashboard({ onLogout }: { onLogout?: () => void }) {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedPage, setSelectedPage] = useState<string | null>(null);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  const goBack = () => setSelectedPage(null);

  const renderPageContent = (key: string) => {
    switch (key) {
      case 'predict':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Predict Customer Churn with Smart AI</h2>
            <p className="mb-4">Run predictions for individual customers or batches to identify churn risk.</p>
            <button className="auth-button" onClick={() => alert('Run prediction (placeholder)')}>Run Prediction</button>
          </div>
        );
      case 'enter':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Enter Customer Details</h2>
            <p className="mb-4">Manually add a customer record to evaluate churn risk.</p>
            <form className="space-y-4 max-w-md">
              <input className="form-input" placeholder="Customer ID" />
              <input className="form-input" placeholder="Monthly Charges" />
              <button className="auth-button" type="button">Save Customer</button>
            </form>
          </div>
        );
      case 'upload':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Upload Customer CSV</h2>
            <p className="mb-4">Upload a CSV file with customer data to run bulk predictions.</p>
            <input type="file" accept=".csv" />
          </div>
        );
      case 'overview':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Customer Churn Overview</h2>
            <p className="mb-4">High-level metrics and a quick snapshot of churn across segments.</p>
          </div>
        );
      case 'insights':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Quick Insights</h2>
            <ul className="list-disc pl-6">
              <li>Customers on month-to-month contracts have higher churn.</li>
              <li>High monthly charges correlate with greater churn risk.</li>
            </ul>
          </div>
        );
      case 'about':
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">About ChurnIQ</h2>
            <p>ChurnIQ helps you predict and prevent customer churn using explainable AI models.</p>
          </div>
        );
      default:
        return null;
    }
  };

  const optionCards = [
    { key: 'predict', title: 'Predict Customer Churn with Smart AI', icon: Brain, gradient: 'from-indigo-500 to-blue-500', description: 'Run predictions for individual customers or batches.' },
    { key: 'enter', title: 'Enter Customer Details', icon: Users, gradient: 'from-green-400 to-emerald-500', description: 'Manually add a customer record.' },
    { key: 'upload', title: 'Upload Customer CSV', icon: FileText, gradient: 'from-purple-500 to-pink-500', description: 'Upload a CSV for bulk predictions.' },
    { key: 'overview', title: 'Customer Churn Overview', icon: PieChart, gradient: 'from-yellow-400 to-orange-400', description: 'High-level metrics and snapshots.' },
    { key: 'insights', title: 'Quick Insights', icon: Zap, gradient: 'from-teal-400 to-cyan-500', description: 'Short actionable insights.' },
    { key: 'about', title: 'About ChurnIQ', icon: Info, gradient: 'from-pink-500 to-rose-500', description: 'Learn more about ChurnIQ.' }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''} bg-gray-50 dark:bg-gray-900`}>
      {/* Navbar */}
      <nav className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              {/* removed sidebar toggle per request */}
              <div className="flex items-center space-x-3">
                  <div className="p-1 rounded-lg" style={{ background: 'linear-gradient(135deg,#6EE7B7 0%, #3B82F6 100%)' }}>
                    <img src="/enquiry-logo.svg" alt="ChurnIQ enquiry logo" style={{ width: 36, height: 36, display: 'block' }} />
                  </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 dark:text-white">
                    ChurnIQ
                  </h1>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              {/* colorful nav option pills */}
              {[
                { label: 'Home', icon: Home, gradient: 'from-indigo-500 to-blue-500' },
                { label: 'Predict', icon: Brain, gradient: 'from-purple-500 to-pink-500' },
                { label: 'Insights', icon: Lightbulb, gradient: 'from-yellow-400 to-orange-400' },
                { label: 'About', icon: Info, gradient: 'from-green-400 to-teal-500' },
                { label: 'Contact', icon: Mail, gradient: 'from-pink-500 to-rose-500' }
              ].map((opt) => {
                const Icon = opt.icon as any;
                return (
                  <a
                    key={opt.label}
                    href="#"
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${opt.gradient} shadow-sm transform transition-transform hover:-translate-y-0.5`}
                    aria-label={opt.label}
                  >
                    <Icon className="h-4 w-4 opacity-95" />
                    <span>{opt.label}</span>
                  </a>
                )
              })}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
              <button className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <Settings className="h-5 w-5" />
              </button>
              <button onClick={() => onLogout && onLogout()} className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                Logout
              </button>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">AI</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section (Landing Banner) */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-animated-bg -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-3xl text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white">ChurnIQ — Smart Customer Retention Prediction</h1>
            <div className="mt-8">
              <AnimatePresence mode="wait">
                {selectedPage ? (
                  <motion.div
                    key="page"
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.99 }}
                    transition={{ duration: 0.36 }}
                    className="card-ghost p-6 rounded-lg"
                  >
                    <button className="mb-4 inline-flex items-center px-3 py-1 rounded bg-slate-200 dark:bg-gray-700" onClick={goBack}>
                      ← Back
                    </button>
                    <div className="prose max-w-none text-slate-800 dark:text-slate-100">
                      {renderPageContent(selectedPage)}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="grid"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                  >
                    {optionCards.map((opt) => {
                      const Icon = opt.icon as any;
                      return (
                        <motion.button
                          key={opt.key}
                          onClick={() => setSelectedPage(opt.key)}
                          whileHover={{ y: -6 }}
                          whileTap={{ scale: 0.98 }}
                          className={`group flex items-center gap-4 p-5 rounded-lg text-left text-white shadow-lg transform transition bg-gradient-to-br ${opt.gradient}`}
                        >
                          <span className="p-3 rounded-md bg-white/10 inline-flex items-center justify-center" style={{ minWidth: 48, minHeight: 48 }}>
                            <Icon className="h-5 w-5 text-white" />
                          </span>
                          <div>
                            <div className="font-semibold text-lg">{opt.title}</div>
                            <div className="text-sm opacity-90">{opt.description}</div>
                          </div>
                        </motion.button>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>Powered by ChurnIQ | Data from Kaggle Telco Customer Churn Dataset | Developed by AI Team</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
