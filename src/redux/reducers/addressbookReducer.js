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
  klasifikasi: [
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
  pemeriksa: [
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
  pemohon: [
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
  pengirim: [
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
    case 'ADD_TEMBUSAN':
      return {
        ...state,
        tembusan: [action.payload],
      };
    case 'ADD_KLASIFIKASI':
      return {
        ...state,
        klasifikasi: [action.payload],
      };
    case 'ADD_PEMERIKSA':
      return {
        ...state,
        pemeriksa: [action.payload],
      };
    case 'ADD_PEMOHON':
      return {
        ...state,
        pemohon: [action.payload],
      };
    default:
      return state;
  }
};

export default addressbookReducer;
