export const addKlasifikasi = (data) => {
  return (dispatch) => {
    console.log(data);
    dispatch({ type: 'ADD_KLASIFIKASI', payload: data });
  };
};
