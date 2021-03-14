import { Container, ListGroup } from 'react-bootstrap-v5';
import { TodoListItem } from './TodoListItem';

export const TodoList = ({ state, setState }) => (
    <Container className="mt-2">
        <h4>List</h4>
        <ListGroup>
            {state.todos.ids.map(id => (
                <TodoListItem
                    key={id}
                    todo={state.todos.entities[id]}
                    setState={setState}
                />
            ))}
        </ListGroup>
    </Container>
);
