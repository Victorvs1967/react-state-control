import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap-v5';
import { useTodoContext } from '../todoContext';
import * as actions from '../todoReducer/actions';

export const TodoForm = () => {
    const { dispatch } = useTodoContext();
    const [ text, setText ] = useState('');
    
    const updateText = ({ target: { value } }) => setText(value);

    const handleAddTodo = event => {
        event.preventDefault();

        const trimmed = text.trim();

        if (trimmed) {
            const newTodo = { text, completed: false };
            
            dispatch(actions.addTodo(newTodo));
            setText('');
        }
    }

    return (
        <Container className='mt-4'>
            <h4>Form</h4>
            <Form className='d-flex' onSubmit={handleAddTodo}>
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
};