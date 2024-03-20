import { SET_TODOLIST_NAME } from '../actions/todoListAction';
const initialState = {
    todoListNames: [
      'View List',
      'Table List',
    ],
    selectedTodoListName: 'View List', // Menambahkan properti baru untuk menyimpan nama sidebar yang dipilih
  };
  
  const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_TODOLIST_NAME':
        // Mencari apakah nama yang diberikan ada di dalam sidebarNames
        if (state.todoListNames.includes(action.payload)) {
          return {
            ...state,
            selectedTodoListName: action.payload, // Mengubah properti selectedSidebarName sesuai dengan nama yang diberikan
          };
        } else {
          // Jika nama yang diberikan tidak ada di sidebarNames, Anda dapat memilih untuk menangani ini dengan cara tertentu, misalnya mengembalikan state tanpa perubahan
          return state;
        }
      default:
        return state;
    }
  };
  
  export default todoListReducer;
  