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

const getSuratAll = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SURAT_ALL':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default suratReducer;
