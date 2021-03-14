import { ListGroup, Form, Button } from 'react-bootstrap-v5';
import { useTodoContext } from '../todoContext';
import * as actions from '../todoReducer/actions';

export const TodoListItem = ({ todo }) => {
    const { dispatch } = useTodoContext();
    const { id, text, completed } = todo;

    const handleUpdateTodo = ({ target: { value } }) => {
        const trimmed = value.trim();

        if (trimmed) {
            dispatch(actions.updateTodo)
        }
    };

    const inputStyle = {
        outline: 'none',
        border: 'none',
        background: 'none',
        textAlign: 'text-center',
        textDecoration: completed ? 'line-through' : '',
        opacity: completed ? '0.8' : '1'
    };

    return (
        <ListGroup.Item className="d-flex align-items-baseline">
            <Form.Check
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(actions.toggleTodo(id))}
            />
            <Form.Control
                style={inputStyle}
                defaultValue={text}
                onChange={handleUpdateTodo}
                disabled={completed}
            />
            <Button variant="danger" onClick={() => dispatch(actions.deleteTodo(id))}>Delete</Button>
        </ListGroup.Item>
    )
};