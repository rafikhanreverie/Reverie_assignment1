// api/dashboardAPI.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3001/api/dashboard';

// Fetch website data
export const fetchWebsiteData = async (userId) => {
    try {
        const response = await axios.get(`${BASE_URL}/fetch-website-data`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching website data:', error.response?.data || error.message);
        throw new Error('Failed to fetch website data');
    }
};

// View translated website
export const viewTranslatedWebsite = async (userId, url, language) => {
    try {
        const response = await axios.get(`${BASE_URL}/view-translated-website`, {
            params: { userId, url, language }
        });
        return response.data; // Return the HTML content from the server response
    } catch (error) {
        console.error('Error viewing translated website:', error.response?.data || error.message);
        throw new Error('Failed to fetch translated website');
    }
};


export const deleteWebsiteData = async (id, token) => {
    try {
        await axios.delete(`${BASE_URL}/fetch-website-data/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

export const fetchTextDictionary = async (userId, url, language) => {
    const response = await axios.get(`http://localhost:3001/api/dashboard/text-dictionary?userId=${userId}&url=${encodeURIComponent(url)}&language=${language}`);
    return response.data;
  };
  
  export const updateTextDictionary = async (userId, url, language, dictionary) => {
    try {
      const response = await axios.put('http://localhost:3001/api/dashboard/text-dictionary', {
        userId,
        url,
        language,
        dictionary,
      });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to update dictionary');
    }
  };
  
  
  export const fetchUserTranslations = async (userId) => {
    const response = await axios.get(`/api/dashboard/translations?userId=${userId}`);
    return response.data;
  };
  