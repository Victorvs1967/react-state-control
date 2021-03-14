import { Container } from 'react-bootstrap-v5';
import { TodoForm, TodoList } from './modules/components';
import { useTodoContext } from './modules/todoContext';

const App = () => {
    const { state } = useTodoContext();
    const { length } = state.todos.ids;

    return (
        <Container style={{ maxWidth: '480px' }} className='text-center'>
            <h1 className='mt-2'>useReducer</h1>
            <TodoForm />
            {length ? <TodoList /> : null}
        </Container>
    )
};

export default App;