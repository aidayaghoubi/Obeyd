/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"; 
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const Login = ({toggleModal , showLoginModal}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const { login } = useAuth();

  // console.log(login ,'login')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      login({ email, password });
      router.push('/jokes');

      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.success) {
        // Redirect or show success
        console.log('Login successful');
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError(err, 'Something went wrong');
    }
  };

  if(!showLoginModal){
    return null
  }
  return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded shadow-lg w-96">
      <h2 className="text-2xl font-bold mb-6 text-center">ورود به حساب کاربری</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            ایمیل
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="ایمیل خود را وارد کنید"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="password">
            رمز عبور
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="رمز عبور خود را وارد کنید"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          ورود
        </button>
      </form>
      <button
        onClick={toggleModal}
        className="mt-4 w-full text-red-500 hover:underline"
      >
        بستن
      </button>
    </div>
  </div>
}
export default Login