import axios from 'axios';
const token = localStorage.getItem('authToken');

export const registerUser = async (newUser) => {
  try {
    const response = await axios.post('http://localhost:3001/api/users/register', newUser);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error registering user');
  }
};

export const loginUser = async (user) => {
  try {
    const response = await axios.post('http://localhost:3001/api/users/login', user);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Error logging in');
  }
};




export const fetchUserData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/api/users/getUser', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};