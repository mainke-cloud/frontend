export const addKepada = (datas) => {
console.log(datas)
return (dispatch) => {
    dispatch({ type: 'ADD_KEPADA', payload: datas });
    
  };
}