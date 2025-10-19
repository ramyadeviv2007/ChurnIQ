import { useState } from 'react';
import { Eye } from 'lucide-react';
import './Auth.css';

interface LoginProps {
  onSwitchToSignUp: () => void;
  onLogin: (email: string, password: string, remember?: boolean) => void;
}

export default function Login({ onSwitchToSignUp, onLogin }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email || !password) return 'Please fill in all fields';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Please enter a valid email address';
    if (password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 500)); // simulate async
      onLogin(email, password, remember);
    } catch (err) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container" role="main">
      <div className="auth-card" aria-labelledby="login-heading">
        <div className="auth-header">
          <h1 id="login-heading" className="auth-title">ChurnIQ</h1>
          <p className="auth-subtitle">Welcome back! Please sign in to your account.</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input"
              placeholder="name@company.com"
              aria-required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <div className="input-action-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
                placeholder="Enter your password"
                aria-required
              />
              <button
                type="button"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                onClick={() => setShowPassword((s) => !s)}
                className="password-toggle"
              >
                <Eye className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="form-group" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
              <span style={{ fontSize: 14, color: '#4a5568' }}>Remember me</span>
            </label>
            <a href="#" style={{ color: '#667eea', fontSize: 14 }}>Forgot?</a>
          </div>

          {error && <div className="error-message" role="alert">{error}</div>}

          <button type="submit" className="auth-button" disabled={loading} aria-busy={loading}>
            {loading ? 'Signing in…' : 'Sign In'}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?{' '}
            <button type="button" onClick={onSwitchToSignUp} className="auth-link">Sign up here</button>
          </p>
        </div>
      </div>
    </div>
  );
}
