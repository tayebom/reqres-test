
import React, { useState } from 'react';
import { login } from '../services/api';
import { toast } from 'react-toastify';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); 
    try {
      const response = await login({ email, password });
      localStorage.setItem('token', response.data.token);
      setIsAuthenticated(true);
      toast.success('Login successful!');
    } catch (error) {
      toast.error('Login failed. Please check your Info.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md w-full max-w-sm">

        <h2 className="text-xl mb-4">Login</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border border-gray-300 p-2 mb-4 w-full rounded"
        />
        
        <button 
          type="submit" 
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full 
            ${loading && 'opacity-50 cursor-not-allowed'}
            `} 
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>

      </form>
    </div>
  );
};

export default Login;
