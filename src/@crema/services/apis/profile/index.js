import axios from 'axios';

export const getUser = async (userId) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(
      `https://new.coofis.com/api/profile/?id_user=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data.results;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};
