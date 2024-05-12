const initialState = {
  klasifikasi: {
    id: '',
    name: '',
    desc: '',
  },
};
const classificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KLASIFIKASI':
      return {
        ...state,
        klasifikasi: action.payload,
      };
    default:
      return state;
  }
};

export default classificationReducer;
