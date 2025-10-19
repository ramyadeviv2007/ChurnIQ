import { useState } from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Dashboard from './components/Dashboard'
import './App.css'

type AuthMode = 'login' | 'signup' | 'dashboard'

function App() {
  const [authMode, setAuthMode] = useState<AuthMode>('login')
  const [user, setUser] = useState<{ email: string; name: string } | null>(() => {
    try {
      const raw = localStorage.getItem('churniq_user')
      if (raw) return JSON.parse(raw)
    } catch (e) {
      // ignore
    }
    return null
  })

  const handleLogin = (email: string, password: string, remember?: boolean) => {
    // Simulate login logic
    console.log('Login attempt:', { email, password })
    // In a real app, you would validate credentials here
    const newUser = { email, name: email.split('@')[0] }
    setUser(newUser)
    if (remember) {
      try { localStorage.setItem('churniq_user', JSON.stringify(newUser)) } catch (e) { }
    }
    setAuthMode('dashboard')
  }

  const handleSignUp = (email: string, password: string, fullName: string) => {
    // Simulate signup logic
    console.log('Signup attempt:', { email, password, fullName })
    // In a real app, you would create the account here
    setUser({ email, name: fullName })
    try { localStorage.setItem('churniq_user', JSON.stringify({ email, name: fullName })) } catch (e) { }
    setAuthMode('dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    try { localStorage.removeItem('churniq_user') } catch (e) { }
    setAuthMode('login')
  }

  if (authMode === 'dashboard' && user) {
    return <Dashboard onLogout={handleLogout} />
  }

  return (
    <>
      {authMode === 'login' ? (
        <Login 
          onSwitchToSignUp={() => setAuthMode('signup')}
          onLogin={handleLogin}
        />
      ) : (
        <SignUp 
          onSwitchToLogin={() => setAuthMode('login')}
          onSignUp={handleSignUp}
        />
      )}
    </>
  )
}

export default App
