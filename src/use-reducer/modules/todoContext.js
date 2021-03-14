import { createContext, useReducer, useContext } from 'react';

// import { todoReducer } from './todoReducer/todoReducer';
import { todoProducer } from './todoReducer/todoProducer';

const TodoContext = createContext();

const initState = {
    todos: {
        ids: ['1', '2', '3', '4'],
        entities: {
            1: {
                id: '1',
                text: 'Eat',
                completed: true
            },
            2: {
                id: '2',
                text: 'Code',
                completed: true
            },
            3: {
                id: '3',
                text: 'Sleep',
                completed: false
            },
            4: {
                id: '4',
                text: 'Repeat',
                completed: false
            }
        }
    }
}

export const TodoProvider = ({ children }) => {
    // const [ state, dispatch ] = useReducer(todoReducer, initState);
    const [ state, dispatch ] = useReducer(todoProducer, initState);

    return (
        <TodoContext.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodoContext = () => useContext(TodoContext);