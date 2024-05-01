export const addKepada = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_KEPADA', payload: datas });
  };
};
export const addTembusan = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_TEMBUSAN', payload: datas });
  };
};
export const addJabatan = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_JABATAN', payload: datas });
  };
};
export const addNama = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_NAMA', payload: datas });
  };
};
export const addDelegasi = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_DELEGASI', payload: datas });
  };
};
export const addSekretaris = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_SEKRETARIS', payload: datas });
  };
};
