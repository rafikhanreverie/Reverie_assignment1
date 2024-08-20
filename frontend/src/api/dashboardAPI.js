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
            params: { userId, url, language } // Ensure all parameters are included
        });
        return response.data;
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