"use client"
import fetcher from '@/app/utils/fetcher';
import { createContext, useState, useContext, useEffect } from 'react';

const JokesContext = createContext();

export const JokesProvider = ({ children }) => {
  
  async function getJokes() {
    let jokesList = []
    const data = await fetcher("joke", { method: "GET", cache: "no-cache" })
    jokesList = data.jokes.slice().reverse()
    addJokes(jokesList)
  }
  const [jokes, setJokes] = useState([]);


  const addJokes = (JokesData) => {
    setJokes(JokesData);
  };
  const updateJokes = () => {
    getJokes()
  };


  useEffect(() => {
    getJokes()
  }, [])

  return (
    <JokesContext.Provider value={{ jokes, addJokes,updateJokes }}>
      {children}
    </JokesContext.Provider>
  );
};

export const useJokes = () => useContext(JokesContext);
