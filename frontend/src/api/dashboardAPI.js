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
        throw new Error(error.message);
    }
};

// View translated website
export const viewTranslatedWebsite = async (userId, url) => {
    try {
        const response = await fetch(`${BASE_URL}/view-translated-website?userId=${userId}&url=${encodeURIComponent(url)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch translated website');
        }
        return await response.text();
    } catch (error) {
        throw new Error(error.message);
    }
};

// Delete website data
export const deleteWebsiteData = async (id, token) => {
    try {
        await axios.delete(`${BASE_URL}/fetch-website-data/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
    } catch (error) {
        throw new Error(error.message);
    }
};
