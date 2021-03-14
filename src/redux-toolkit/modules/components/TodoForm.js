import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Container, Form, Button } from 'react-bootstrap-v5';
import { addTodo } from '../slices/todosSlice';

export const TodoForm = () => {
    const dispatch = useDispatch();
    const [ text, setText ] = useState('');

    const updateText = ({ target: { value } }) => setText(value);

    const handleAddTodo = event => {
        event.preventDefault()
        const trimmed = text.trim();

        if (trimmed) {
            const newTodo = { id: nanoid(5), text, completed: false }
            dispatch(addTodo(newTodo))
            setText('')
        }
    }

    return (
        <Container className="mt-4">
            <h4>Form</h4>
            <Form className="d-flex" onSubmit={handleAddTodo}>
                <Form.Control
                    type='text'
                    placeholder='Enter text...'
                    value={text}
                    onChange={updateText}
                />
                <Button variant='primary' type='submit'>Add</Button>
            </Form>
        </Container>
    )
}