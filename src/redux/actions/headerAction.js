// headerAction.js

export const handleEdit = () => {
    return (dispatch) => {
      dispatch({ type: 'IS_EDITING', payload: true }); // Mengirimkan aksi dengan payload true
    };
  };
  export const handleClose = () => { // Menambahkan handleClose untuk menutup mode edit
    return (dispatch) => {
      dispatch({ type: 'CLOSE_EDIT' }); // Mengirimkan aksi untuk menutup mode edit
    };
  };  