const initialState = {
  kepada: [
    {
      profil: '',
      id: '',
      nama: '',
      alamat: '',
      nikg: '',
      nikl: '',
      kota: '',
      organisasi: '',
      divisi: '',
      departemen: '',
      kode_departemen: '',
      jabatan: '',
      email: '',
      pgs: '',
      nohp: '',
    },
  ],
  tembusan: [
    {
      profil: '',
      id: '',
      nama: '',
      alamat: '',
      nikg: '',
      nikl: '',
      kota: '',
      organisasi: '',
      divisi: '',
      departemen: '',
      kode_departemen: '',
      jabatan: '',
      email: '',
      pgs: '',
      nohp: '',
    },
  ],
};
const addressbookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KEPADA':
      return {
        ...state,
        kepada: [action.payload],
      };
    default:
      return state;
  }
};

export default addressbookReducer;
