import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Container, ListGroup } from 'react-bootstrap-v5';
import { selectAllTodos } from '../slices/todosSlice';

export const TodoStats = () => {
    const allTodos = useSelector(selectAllTodos);

    const [ stats, setStats ] = useState({
        total: 0,
        active: 0,
        completed: 0,
        percent: 0
    });

    useEffect(() => {
        if (allTodos.length) {
            const total = allTodos.length;
            const completed = allTodos.filter(todo => todo.completed).length;
            const active = total - completed;
            const percent = total === 0 ? 0 : Math.round((active / total) * 100) + '%';
            
            setStats({
                total,
                active,
                completed,
                percent
            })
        }
    }, [allTodos])

    return (
        <Container className="mt-2">
            <h4>Stats</h4>
            <ListGroup horizontal>
                {Object.entries(stats).map(([[first, ...rest], count], index) => (
                    <ListGroup.Item key={index}>
                        {first.toUpperCase() + rest.join('')}: {count}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}