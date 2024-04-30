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
export const addPemeriksa = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_PEMERIKSA', payload: datas });
  };
};
export const addPemohon = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_PEMOHON', payload: datas });
  };
};
export const addPengirim = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_PENGIRIM', payload: datas });
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
