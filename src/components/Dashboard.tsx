import { useState } from 'react';
import { Brain, Lightbulb, Home, Info, Mail, Settings, Moon, Sun, Users, FileText, PieChart, Zap } from 'lucide-react';


export default function Dashboard({ onLogout }: { onLogout?: () => void }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

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
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Predict Customer Churn with Smart AI', icon: Brain, gradient: 'from-indigo-500 to-blue-500' },
                { title: 'Enter Customer Details', icon: Users, gradient: 'from-green-400 to-emerald-500' },
                { title: 'Upload Customer CSV', icon: FileText, gradient: 'from-purple-500 to-pink-500' },
                { title: 'Customer Churn Overview', icon: PieChart, gradient: 'from-yellow-400 to-orange-400' },
                { title: 'Quick Insights', icon: Zap, gradient: 'from-teal-400 to-cyan-500' },
                { title: 'About ChurnIQ', icon: Info, gradient: 'from-pink-500 to-rose-500' }
              ].map((opt) => {
                const Icon = opt.icon as any;
                return (
                  <button
                    key={opt.title}
                    className={`group flex items-center gap-4 p-5 rounded-lg text-left text-white shadow-lg transform hover:-translate-y-1 transition bg-gradient-to-br ${opt.gradient}`}
                  >
                    <span className="p-3 rounded-md bg-white/10 inline-flex items-center justify-center" style={{ minWidth: 48, minHeight: 48 }}>
                      <Icon className="h-5 w-5 text-white" />
                    </span>
                    <div>
                      <div className="font-semibold text-lg">{opt.title}</div>
                    </div>
                  </button>
                )
              })}
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
