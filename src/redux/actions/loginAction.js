export const authLogin = (userData) => {
  return (dispatch) => {
    dispatch({ type: 'GET_USER', payload: userData });
  };
};
