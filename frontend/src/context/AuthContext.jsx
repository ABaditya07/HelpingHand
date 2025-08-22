import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const authDataContext = createContext();

const AuthContext = ({ children }) => {
  const serverUrl = "https://helpinghand-4dse.onrender.com"; // Replace with your backend server URL
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/currentUser`, {
        withCredentials: true,
      });
      setUserData(result.data.user);
      
    } catch (error) {
      setUserData(null);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const value = {
    serverUrl,
    userData,
    setUserData,
    loading,
    setLoading
  };

  return (
    <authDataContext.Provider value={value}>
      {children}
    </authDataContext.Provider>
  );
};

export default AuthContext;
