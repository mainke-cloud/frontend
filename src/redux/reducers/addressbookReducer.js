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
  pengirim: {
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
  jabatann: {
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
  namaa: {
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
    email: '',
    pgs: '',
    nohp: '',
  },
  delegasi: {
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
  sekretaris: {
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
};
const addressbookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KEPADA':
      return {
        ...state,
        kepada: action.payload,
      };
    case 'ADD_TEMBUSAN':
      return {
        ...state,
        tembusan: action.payload,
      };
    case 'ADD_JABATAN':
      return {
        ...state,
        jabatann: action.payload,
      };
    case 'ADD_NAMA':
      return {
        ...state,
        namaa: action.payload,
      };
    case 'ADD_PEMERIKSA':
      return {
        ...state,
        pemeriksa: action.payload,
      };
    case 'ADD_PEMOHON':
      return {
        ...state,
        pemohon: action.payload,
      };
    case 'ADD_SEKRETARIS':
      return {
        ...state,
        sekretaris: action.payload,
      };
    case 'ADD_DELEGASI':
      return {
        ...state,
        delegasi: action.payload,
      };
    default:
      return state;
  }
};

export default addressbookReducer;
