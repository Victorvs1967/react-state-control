import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap-v5';
import { TodoListItem } from './TodoListItem';
import { selectFilteredTodos } from '../slices/todosSlice';

export const TodoList = () => {
    const filteredTodos = useSelector(selectFilteredTodos);

    return (
        <Container className='mt-2'>
            <h4>List</h4>
            <ListGroup>
                {filteredTodos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
            </ListGroup>
        </Container>
    )
};