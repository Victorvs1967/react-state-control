import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './modules/slices/todosSlice';
import filterReducer from './modules/slices/filterSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        filter: filterReducer
    }
});

export default store;