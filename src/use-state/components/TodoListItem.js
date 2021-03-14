import { ListGroup, Form, Button } from 'react-bootstrap-v5';

export const TodoListItem = ({ todo, setState }) => {
    const { id, text, completed } = todo;

    const toggleTodo = () => {
        setState(state => {
            const { todos } = state;

            return {
                ...state,
                todos: {
                    ...todos,
                    entities: {
                        ...todos.entities,
                        [id]: {
                            ...todos.entities[id],
                            completed: !todos.entities[id].completed
                        }
                    }
                }
            }
        })            
    };

    const updateTodo = ({ target: { value } }) => {
        const trimmed = value.trim();

        if (trimmed) {
            setState(state => {
                const { todos } = state;

                return {
                    ...state,
                    todos: {
                        ...todos,
                        entities: {
                            ...todos.entities,
                            [id]: {
                                ...todos.entities[id],
                                text: trimmed
                            }
                        }
                        
                    }
                }
            })
        }
    };

    const deleteTodo = () => {
        setState(state => {
            const { todos } = state;

            const newIds = todos.ids.filter(_id => _id !== id)

            const newTodos = newIds.reduce((obj, id) => {
                if (todos.entities[id]) return { ...obj, [id]: todos.entities[id] }
                else return obj
            }, [])

            return {
                ...state,
                todos: {
                    ...todos,
                    ids: newIds,
                    entities: newTodos
                }
            }
        })
    }

    const inputStyle = {
        outline: 'none',
        border: 'none',
        background: 'none',
        textAlign: 'center',
        textDecoration: completed ? 'line-through' : '',
        opacity: completed ? '0.8' : '1'
    };

    return (
        <ListGroup.Item className="d-flex align-items-baseline">
            <Form.Check
                type='checkbox'
                checked={completed}
                onChange={toggleTodo}
            />
            <Form.Control 
                style={inputStyle}
                defaultValue={text}
                onChange={updateTodo}
                disabled={completed}
            />
            <Button variant="danger" onClick={deleteTodo}>Delete</Button>
        </ListGroup.Item>
    )
};
