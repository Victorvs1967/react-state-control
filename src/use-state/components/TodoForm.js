import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { Container, Form, Button } from 'react-bootstrap-v5';

export const TodoForm = ({ setState }) => {
    const [ text, setText ] = useState('');

    const updateText = ({ target: { value } }) => {
        setText(value);
    };

    const addTodo = event => {
        event.preventDefault();
        const trimmed = text.trim();
        if (trimmed) {
            const id = nanoid(5);
            const newTodo = { id, text, completed: false }

            setState(state => ({
                ...state,
                todos: {
                    ...state.todos,
                    ids: state.todos.ids.concat(id),
                    entities: {
                        ...state.todos.entities,
                        [id]: newTodo
                    }
                }
            }))
            setText('');
        }
    }

    return (
        <Container className="mt-4">
            <h4>Form</h4>
            <Form className="d-flex" onSubmit={addTodo}>
                <Form.Control
                    type="text"
                    placeholder="Enter text..."
                    value={text}
                    onChange={updateText}
                />
                <Button variant="primary" type="submit">Add</Button>
            </Form>
        </Container>
    );
};
