export const addKlasifikasi = (data) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_KLASIFIKASI', payload: data });
  };
};
