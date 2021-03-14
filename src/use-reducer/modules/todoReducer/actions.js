import { ADD_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO } from './actionTypes';

const createAction = (type, payload) => ({ type, payload });
const addTodo = newTodo => createAction(ADD_TODO, newTodo);
const toggleTodo = todoId => createAction(TOGGLE_TODO, todoId);
const updateTodo = payload => createAction(UPDATE_TODO, payload);
const deleteTodo = todoId => createAction(DELETE_TODO, todoId);

export { addTodo, toggleTodo, updateTodo, deleteTodo };