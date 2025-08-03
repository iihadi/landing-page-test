
'use client';

import { useState, type FC } from 'react';
import Modal from './Modal';
import { notifications } from '@mantine/notifications';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignUp: () => void;
}

const LoginModal: FC<LoginModalProps> = ({ isOpen, onClose, onSwitchToSignUp, }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<{ userName?: string; password?: string; api?: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: { userName?: string; password?: string } = {};
    if (!userName) {
      newErrors.userName = 'Username or Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch('/api/sign-in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: userName, password }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log(`Welcome, ${data.name}`);
        notifications.show({
          title: 'Login Successful',
          message: `Welcome back, ${data.name}!`,
          color: 'green',
          autoClose: 5000,
        });
        onClose();
      } else {
        setErrors({ api: data.message || 'unknown error' });
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setErrors({ api: 'server error' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-1">Login</h2>
        <p className="text-sm text-gray-600 mb-6">
          New customer? <a href="#" onClick={onSwitchToSignUp} className="text-[#00a826] font-semibold hover:underline">Register here</a>
        </p>
      </div>

      <form onSubmit={handleLogin} noValidate>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userName">Username or Email</label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.userName ? 'border-red-500' : ''}`}
            id="userName" type="text" placeholder="Username or Email"
            value={userName} onChange={(e) => setUserName(e.target.value)}
          />
          {errors.userName && <p className="text-red-500 text-xs italic mt-1">{errors.userName}</p>}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
            id="password" type="password" placeholder="Password"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password}</p>}
        </div>
        {errors.api && <p className="text-red-500 text-xs italic mb-4 text-center">{errors.api}</p>}
        <div className="flex flex-col items-center justify-center">
          <button
            className="w-full bg-[#00a826] hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
            type="submit" disabled={isLoading}
          >
            {isLoading ? 'Signing In...' : 'Login'}
          </button>
          <a className="inline-block align-baseline font-bold text-sm text-[#00a826] hover:text-green-700 mt-4" href="#">
            Forgot Username/Password?
          </a>
        </div>
      </form>
    </Modal>
  );
};

export default LoginModal;