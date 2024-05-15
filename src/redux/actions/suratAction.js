import { getSurat } from "../../@crema/services/apis/surat";

// addInfoAction.js
export const addInfo = (formData) => {
  return {
    type: 'ADD_INFO',
    payload: formData
  };
};

export const addLainnya = (props) => {
return{
  type:'ADD_LAINNYA',
  payload: props,
}
}

export const getSuratAll = () => {
  return async (dispatch) => {
    try {
      const suratData = await getSurat(); // Panggil getSurat() dan tunggu respons
      console.log('Surat Data:', suratData); // Tampilkan data di console
      dispatch({
        type: 'GET_SURAT_ALL',
        payload: suratData, // Kirim data ke reducer jika perlu
      });
    } catch (error) {
      // Tangani kesalahan jika ada
      console.error('Error fetching surat data:', error);
      // Anda juga bisa melempar kesalahan ke atas jika perlu
      throw error;
    }
  };
};