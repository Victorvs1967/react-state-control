import { createSlice, createEntityAdapter, createSelector, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { Filters } from './filterSlice';

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    status: 'idle'
});
const SERVER_URL = 'http://localhost:5000/todos';
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
    try {
        const response = await axios(SERVER_URL);
        return response.data;
    } catch (error) {
        console.error(error.toJSON());
    }
});
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: todosAdapter.addOne,
        toggleTodo(state, action) {
            const { payload: id } = action;
            const todo = state.entities[id];
            todo.complete = !todo.complete;
        },
        updateTodo(state, action) {
            const { id, text } = action;
            const todo = state.entities[id];
            todo.text = text;
        },
        deleteTodo: todosAdapter.removeOne,
        completeAllTodos(state) {
            Object.values(state.entities).forEach(todo => todo.completed = true)
        },
        clearCompletedTodos(state) {
            const completedIds = Object.values(state.entities)
                .filter(todo => todo.completed)
                .map(todo => todo.id)
            todosAdapter.removeMany(state, completedIds)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(fetchTodos.pending, state => {
                state.status = 'loadung'
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                todosAdapter.setAll(state, action.payload)
                state.status = 'idle'
            })
    }
});

export const { selectAll: selectAllTodos } = todosAdapter.getSelectors(state => state.todos);

export const selectFilteredTodos = createSelector(
    selectAllTodos,
    state => state.filter,
    (todos, filter) => {
        const { status } = filter
        if (status === Filters.All) return todos
        return status === Filters.Active ?
            todos.filter(todo => !todo.completed) :
            todos.filter(todo => todo.completed)
    }
)

export const {
    addTodo,
    toggleTodo,
    updateTodo,
    deleteTodo,
    completeAllTodos,
    clearCompletedTodos
} = todosSlice.actions;

export default todosSlice.reducer;