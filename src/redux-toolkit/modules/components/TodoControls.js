import { useDispatch } from 'react-redux';
import { Container, ButtonGroup, Button } from 'react-bootstrap-v5';
import {  completeAllTodos, clearCompletedTodos} from '../slices/todosSlice';

export const TodoControls = () => {
    const dispatch = useDispatch();

    return (
        <Container className="mt-2">
            <h4>Controls</h4>
            <ButtonGroup>
                <Button
                    variant='outline-secondary'
                    onClick={() => dispatch(completeAllTodos())}
                >
                    Complete All
                </Button>
                <Button
                    variant="outline-secondary"
                    onClick={() => dispatch(clearCompletedTodos())}
                >
                Clear completed
                </Button>
            </ButtonGroup>
        </Container>
    )
};