import axios from 'axios';

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
