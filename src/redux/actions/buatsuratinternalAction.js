// Action creator untuk setData menggunakan thunk
export const setData = (data) => {
    console.log(data)
  return (dispatch) => {
    dispatch({ type: 'SET_DATA', payload: data });
  };
};

// Action creator untuk updateData menggunakan thunk
export const updateData = (data) => {
  console.log(data)
  return (dispatch) => {
    dispatch({ type: 'UPDATE_DATA', payload: data });
  };
};

// Action creator untuk resetData menggunakan thunk
export const resetData = () => {
  return (dispatch) => {
    dispatch({ type: 'RESET_DATA' });
  };
};
