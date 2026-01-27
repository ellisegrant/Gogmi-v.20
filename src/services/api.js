const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost/backend/api';

const getToken = () => localStorage.getItem('gogmi_token');

const apiCall = async (endpoint, options = {}) => {
  const token = getToken();
  
  const config = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers
    }
  };

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'API request failed');
    }

    return data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const authAPI = {
  register: (userData) => 
    apiCall('/auth/register.php', {
      method: 'POST',
      body: JSON.stringify(userData)
    }),

  login: (credentials) => 
    apiCall('/auth/login.php', {
      method: 'POST',
      body: JSON.stringify(credentials)
    }),

  getMe: () => 
    apiCall('/auth/me.php'),

  logout: () => {
    localStorage.removeItem('gogmi_token');
    localStorage.removeItem('gogmi_user');
    localStorage.removeItem('gogmi_membership');
  }
};

export const membershipAPI = {
  activate: (paymentData) => 
    apiCall('/membership/activate.php', {
      method: 'POST',
      body: JSON.stringify(paymentData)
    }),

  getStatus: () => 
    apiCall('/membership/status.php'),
};

export const resourcesAPI = {
  checkAccess: (resourceData) => 
    apiCall('/resources/check-access.php', {
      method: 'POST',
      body: JSON.stringify(resourceData)
    })
};