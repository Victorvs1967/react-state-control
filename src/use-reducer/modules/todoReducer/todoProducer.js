import produce from 'immer';
import { nanoid } from 'nanoid';
import * as actions from './actionTypes';

export const todoProducer = produce((draft, action) => {
    const { todos: { ids, entities } } = draft;

    switch (action.type) {
        case actions.ADD_TODO: {
            const { payload: newTodo } = action;
            const id = nanoid(5);

            ids.push(id)
            entities[id] = { id, ...newTodo }
            break
        }
        case actions.TOGGLE_TODO: {
            const { payload: id } = action;            

            entities[id].completed = !entities[id].completed
            break
        }
        case actions.UPDATE_TODO: {
            const { payload: id, text } = action;
            
            entities[id].text = text
            break
        }
        case actions.DELETE_TODO: {
            const { payload: id } = action;            

            ids.splice(ids.indexOf(id), 1)
            delete entities[id]
            break
        }
        default:
            return draft
    }
});