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
