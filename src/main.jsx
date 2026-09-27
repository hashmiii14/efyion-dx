import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import '@fontsource-variable/plus-jakarta-sans';
import '@fontsource-variable/manrope';
import './index.css';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('App ErrorBoundary caught:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif', padding: '24px', textAlign: 'center', background: '#F8FAFC', color: '#0B1152' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px' }}>Efyion Dx</h1>
          <p style={{ color: '#475569', marginBottom: '20px', maxWidth: '400px' }}>Something unexpected occurred. Please refresh the page to reload the application.</p>
          <button onClick={() => window.location.reload()} style={{ padding: '10px 24px', borderRadius: '9999px', background: '#0B1152', color: '#fff', border: 'none', fontWeight: 'bold', cursor: 'pointer' }}>
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);
