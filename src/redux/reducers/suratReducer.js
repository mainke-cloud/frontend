const initialState = {
  perihal: '',
  prioritas: '',
  jenis: '',
  lampiran: '',
};

const suratReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INFO':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default suratReducer;
