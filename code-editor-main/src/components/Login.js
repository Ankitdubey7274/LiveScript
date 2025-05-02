// src/pages/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = '/home';
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.navbar}>
        <h1 style={styles.logo}>LiveScript</h1>
      </div>

      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
            style={styles.input}
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>

        {error && <p style={styles.error}>{error}</p>}

        <p style={styles.signupText}>
          Don't have an account?{' '}
          <Link to="/signup" style={styles.signupLink}>Sign up here</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: '#121212',
    minHeight: '100vh',
    padding: '20px',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    height: '60px',
    paddingLeft: '20px',
    backgroundColor: '#1f1f1f',
    boxShadow: '0px 2px 8px rgba(0,0,0,0.5)',
    marginBottom: '40px',
  },
  logo: {
    color: '#4caf50',
    fontSize: '24px',
    fontWeight: 'bold',
    margin: 0,
  },
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '30px',
    backgroundColor: '#1f1f1f',
    borderRadius: '10px',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.3)',
    textAlign: 'center',
    color: 'white',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '12px',
    margin: '10px 0',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#333',
    color: 'white',
    fontSize: '16px',
  },
  button: {
    padding: '12px',
    marginTop: '15px',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#4caf50',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
  },
  error: {
    marginTop: '10px',
    color: '#ff4d4d',
  },
  signupText: {
    marginTop: '20px',
    fontSize: '14px',
    color: '#aaa',
  },
  signupLink: {
    color: '#4caf50',
    textDecoration: 'none',
    fontWeight: 'bold',
  }
};

export default Login;
