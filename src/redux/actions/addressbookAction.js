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

export const addKlasifikasi = (datas) => {
  return (dispatch) => {
    dispatch({ type: 'ADD_KLASIFIKASI', payload: datas });
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
