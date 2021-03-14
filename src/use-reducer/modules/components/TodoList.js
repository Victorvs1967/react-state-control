import { Container, ListGroup } from 'react-bootstrap-v5';
import { TodoListItem } from './TodoListItem';
import { useTodoContext } from '../todoContext';

export const TodoList = () => {
    const { state: { todos } } = useTodoContext();

    return (
        <Container className="mt-2">
            <h4>List</h4>
            <ListGroup>
                {todos.ids.map(id => <TodoListItem key={id} todo={todos.entities[id]}/>)}
            </ListGroup>
        </Container>
    )
}