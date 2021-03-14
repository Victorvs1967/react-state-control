import produce from 'immer';
import { nanoid } from 'nanoid';
import * as actions from './actionTypes';

// export const todoReducer = (state, action) => {
export const todoReducer = produce((draft, action) => {
    // const { todos } = state;
    const { todos: { ids, entities } } = draft;

    switch (action.type) {
        case actions.ADD_TODO: {
            const { payload: newTodo } = action;
            const id = nanoid(5);

            // return {
            //     ...state,
            //     todos: {
            //         ids: todos.ids.concat(id),
            //         entities: {
            //             ...todos.entities,
            //             [id]: { id, ...newTodo }
            //         }
            //     }
            // }
            ids.push(id)
            entities[id] = { id, ...newTodo }
            break
        }
        case actions.TOGGLE_TODO: {
            const { payload: id } = action;            

            // return {
            //     ...state,
            //     todos: {
            //         ...todos,
            //         entities: {
            //             ...todos.entities,
            //             [id]: {
            //                 ...todos.entities[id],
            //                 completed: !todos.entities[id].completed
            //             }
            //         }
            //     }
            // }
            entities[id].completed = !entities[id].completed
            break
        }
        case action.UPDATE_TODO: {
            const { payload: id, text } = action;
            
            // return {
            //     ...state,
            //     todos: {
            //         ...todos,
            //         entities: {
            //             ...todos.entities,
            //             [id]: {
            //                 ...todos.entities[id],
            //                 text
            //             }
            //         }
            //     }
            // }
            entities[id].text = text
            break
        }
        case action.DELETE_TODO: {
            const { payload: id } = action;
            // const newIds = todos.ids.filter(_id => _id !== id);
            // const newTodos = newIds.reduce((obj, id) => {
            //     if (todos.entities[id]) return { ...obj, [id]: todos.entities[id] }
            //     else return obj
            // }, {})

        //     return {
        //         ...state,
        //         todos: {
        //             ...todos,
        //             ids: newIds,
        //             entities: newTodos
        //         }
        //     }
        ids.splice(ids.indexOf[id], 1)
        delete entities[id]
        break
        }
        default:
            // return state
            return draft
    }
});