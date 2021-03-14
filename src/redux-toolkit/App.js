import { useSelector } from 'react-redux';
import Loader from 'react-loader-spinner';
import { Container } from 'react-bootstrap-v5';
import { TodoForm, TodoList, TodoFilters, TodoControls, TodoStats } from './modules/components';
import { selectAllTodos } from './modules/slices/todosSlice';

const App = () => {
    const { length } = useSelector(selectAllTodos);
    const loadingStatus = useSelector(state => state.todos.status);
    const loaderStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
    if (loadingStatus === 'loading')
        return (
            <Loader
                type='Oval'
                color='#00bfff'
                height={80}
                width={80}
                style={loaderStyle}
            />
        )
    return (
        <Container style={{ maxWidth: '480px' }} className="text-center">
            <h1 className="mt-2">Redux Toolkit</h1>
            <TodoForm />
            {length ? (
                <>
                    <TodoStats />
                    <TodoFilters />
                    <TodoList />
                    <TodoControls />
                </>
            ) : null}
        </Container>
    )
};

export default App;