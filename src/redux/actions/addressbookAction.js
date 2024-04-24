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
