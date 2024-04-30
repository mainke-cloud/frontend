const initialState = {
  perihal: '',
  klasifikasi: '',
  prioritas: '',
  jenis: '',
  lampiran: '',
};

const suratReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INFO':
      return {
        ...state,
        ...action.payload, // Menggabungkan payload dengan state yang ada
      };

    default:
      return state;
  }
};

export default suratReducer;
