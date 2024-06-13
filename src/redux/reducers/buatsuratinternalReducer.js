// Initial state
const initialState = {
  data: {
      pembuat: 0,
      penerima: [],
      penyetuju: [],
      no_agenda: "",
      no_surat: "",
      perihal: "",
      status: "",
      kategori: "",
      urgensi: "",
      tanggal_pengiriman: "",
      lampiran: 0,
      file_surat: ""
  },
};

// Reducer function
const buatsuratinternalReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'SET_DATA':
          return {
              ...state,
              data: action.payload
          };
      case 'UPDATE_DATA':
          return {
              ...state,
              data: {
                  ...state.data,
                  ...action.payload
              }
          };
      case 'RESET_DATA':
          return initialState;
      default:
          return state;
  }
};

export default buatsuratinternalReducer;
