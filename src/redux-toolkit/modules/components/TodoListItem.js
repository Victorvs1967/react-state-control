import { useDispatch } from 'react-redux';
import { ListGroup, Form, Button } from 'react-bootstrap-v5';
import { toggleTodo, updateTodo, deleteTodo } from '../slices/todosSlice';

export const TodoListItem = ({ todo }) => {
    const dispatch = useDispatch();
    const { id, text, completed } = todo;

    const handleUpdateTodo = ({ target: { value } }) => {
        const trimmed = value.trin();

        if (trimmed) dispatch(updateTodo({ id, trimmed }));
    }

    const inputStyles = {
        outline: 'none',
        border: 'none',
        background: 'none',
        textAlign: 'center',
        textDecoration: completed ? 'line-through' : '',
        opacity: completed ? '0.8' : '1'
    };

    return (
        <ListGroup.Item className='d-flex align-items-baseline'>
            <Form.Check
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleTodo(id))}
            />
            <Form.Control
                style={inputStyles}
                defaultValue={text}
                onChange={handleUpdateTodo}
                disabled={completed}
            />
            <Button variant='danger' onClick={() => dispatch(deleteTodo(id))}>Delete</Button>
        </ListGroup.Item>
    )

};
