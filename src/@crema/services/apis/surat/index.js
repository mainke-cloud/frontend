import axios from 'axios';
import { useAuthContext } from '@crema/context/AuthContext';

// Function to fetch existing "surat"
export const getSurat = async () => {
  const { token } = useAuthContext();

  if (!token) {
    console.error('No token found');
    return;
  }

  try {
    const response = await axios.get('https://new.coofis.com/api/surat/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error; // Propagate the error to the caller
  }
};

// Function to create a new "surat"
export const BuatSurat = async (data) => {
  const { token } = useAuthContext();

  if (!token) {
    console.error('No token found');
    return;
  }

  try {
    const response = await axios.post(
      'https://new.coofis.com/api/surat',
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error creating surat:', error);
    throw error; // Propagate the error to the caller
  }
};
