import axios from 'axios';

export const getSekretaris = async (userId) => {
  const token = localStorage.getItem('token');
  try {
    const response = await axios.get(
      `https://new.coofis.com/api/profile/sekretaris/?id_user=${userId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );

    if (response.data.results.length > 0) {
      const detailsPromises = response.data.results.map((sekre) =>
        getDetailSekretaris(sekre.user_id),
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

export const getDetailSekretaris = async (userId) => {
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

export const delSekretaris = async (sekre_id) => {
  const token = localStorage.getItem('token');
  try {
    await axios.delete(
      `https://new.coofis.com/api/profile/sekretaris/retrieve/${sekre_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    alert('Sekretaris berhasil dihapus');
  } catch (error) {
    console.error('Error deleting sekretaris:', error);
  }
};

export const updateSekretaris = async (sekre_id, data) => {
  const token = localStorage.getItem('token');
  try {
    await axios.patch(
      `https://new.coofis.com/api/profile/sekretaris/retrieve/${sekre_id}/`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    alert('Sekretaris berhasil diUpdate');
  } catch (error) {
    console.error('Error updating sekretaris:', error);
  }
};
