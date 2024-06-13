import axios from 'axios';

export const getDelegasi = async (userId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(
      `https://new.coofis.com/api/profile/delegasi/?id_user=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.data.results.length > 0) {
      const detailsPromises = response.data.results.map((deleg) =>
        getDetailDelegasi(deleg.user_id),
      );

      const detailsArray = await Promise.all(detailsPromises);
      const details = detailsArray.flat();
      
      return {
        results: response.data.results,
        details: details,
      };
    }
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return {
      results: [],
      details: [],
    };
  }
};

export const getDetailDelegasi = async (userId) => {
  const token = localStorage.getItem('token');
  try {
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
    return [];
  }
};

export const delDelegasi = async (deleg_id) => {
  const token = localStorage.getItem('token');
  try {
    await axios.delete(
      `https://new.coofis.com/api/profile/delegasi/retrieve/${deleg_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    alert('Delegasi berhasil dihapus');
  } catch (error) {
    console.error('Error deleting Delegasi:', error);
  }
};

export const updateDelegasi = async (deleg_id, data) => {
  const token = localStorage.getItem('token');
  try {
    await axios.patch(
      `https://new.coofis.com/api/profile/delegasi/retrieve/${deleg_id}/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    alert('delegasi berhasil diUpdate');
  } catch (error) {
    console.error('Error updating delegasi:', error);
  }
};
