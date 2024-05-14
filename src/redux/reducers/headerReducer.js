// headerReducer.js

const initialState = {
  isEdit: false,
  value: 0,
  isTemplate: false,
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'IS_EDITING':
      return {
        ...state,
        isEdit: action.payload,
        isTemplate: false,
      };
    case 'CLOSE_EDIT': // Menangani aksi CLOSE_EDIT
      return {
        ...state,
        isEdit: false, // Menutup mode edit dengan mengatur isEdit menjadi false
        isTemplate: false,
      };
    case 'UPDATE_VALUE': // Menangani aksi CLOSE_EDIT
      return {
        ...state,
        isEdit: state.isEdit,
        value: action.payload, // Menutup mode edit dengan mengatur isEdit menjadi false
      };
    case 'IS_TEMPLATE':
      return{
        ...state,
        isTemplate: action.payload,
      };
    default:
      return state;
  }
};

export default headerReducer;
