// headerReducer.js

const initialState = {
    isEdit: false,
  };
  
  const headerReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'IS_EDITING':
        return {
          ...state,
          isEdit: action.payload,
        };
      case 'CLOSE_EDIT': // Menangani aksi CLOSE_EDIT
        return {
          ...state,
          isEdit: false, // Menutup mode edit dengan mengatur isEdit menjadi false
        };
      default:
        return state;
    }
  };
  
  export default headerReducer;
  