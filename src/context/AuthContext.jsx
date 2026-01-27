import React, { createContext, useContext, useState, useEffect } from 'react';
import { authAPI, membershipAPI } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [membership, setMembership] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem('gogmi_token');
    
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await authAPI.getMe();
      
      if (response.success) {
        setUser(response.data.user);
        setMembership(response.data.membership);
        setIsAuthenticated(true);
        
        localStorage.setItem('gogmi_user', JSON.stringify(response.data.user));
        if (response.data.membership) {
          localStorage.setItem('gogmi_membership', JSON.stringify(response.data.membership));
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await authAPI.login(credentials);
      
      if (response.success) {
        const { token, user, membership } = response.data;
        
        localStorage.setItem('gogmi_token', token);
        localStorage.setItem('gogmi_user', JSON.stringify(user));
        
        if (membership) {
          localStorage.setItem('gogmi_membership', JSON.stringify(membership));
          setMembership(membership);
        }
        
        setUser(user);
        setIsAuthenticated(true);
        
        return { success: true, user };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authAPI.register(userData);
      
      if (response.success) {
        const { token, user } = response.data;
        
        localStorage.setItem('gogmi_token', token);
        localStorage.setItem('gogmi_user', JSON.stringify(user));
        
        setUser(user);
        setIsAuthenticated(true);
        
        return { success: true, user };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    authAPI.logout();
    setUser(null);
    setMembership(null);
    setIsAuthenticated(false);
  };

  const updateMembership = async () => {
    try {
      const response = await membershipAPI.getStatus();
      
      if (response.success && response.data.activeMembership) {
        setMembership(response.data.activeMembership);
        localStorage.setItem('gogmi_membership', JSON.stringify(response.data.activeMembership));
      }
    } catch (error) {
      console.error('Failed to update membership:', error);
    }
  };

  const value = {
    user,
    membership,
    loading,
    isAuthenticated,
    login,
    register,
    logout,
    updateMembership,
    isMember: membership !== null
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};