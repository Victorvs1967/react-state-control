import React, { useState } from 'react';
import { TodoForm, TodoList } from './components';
import { Container } from 'react-bootstrap-v5';

const initialState = {
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
            },
        }
    }
}

const App = () => {

    const [ state, setState ] = useState(initialState);

    const { length } = state.todos.ids;

    return (
        <Container style={{maxWidth: '50%'}} className="text-center">
            <h1 className="mt-2">useState</h1>
            <TodoForm setState={setState} />
            {length ? <TodoList state={state} setState={setState} /> : null}
        </Container>
    );
};

export default App;