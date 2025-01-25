"use client"
import { createContext, useState, useContext } from 'react';
const KEY = 'user'

const AuthContext = createContext();

function getFromLocal() {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(KEY)
    if (data) {
      return JSON.parse(data)
    } else return null
  } else return null
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getFromLocal());


  const login = (userData) => {
    setUser(userData);
    if (typeof window !== 'undefined') {
      localStorage.setItem(KEY, JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== 'undefined') {
      localStorage.removeItem(KEY);
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
