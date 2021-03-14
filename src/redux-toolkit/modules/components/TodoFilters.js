import { useDispatch, useSelector } from 'react-redux';
import { Container, Form } from 'react-bootstrap-v5';
import { Filters, setFilter } from '../slices/filterSlice';

export const TodoFilters = () => {
    const dispatch = useDispatch();
    const { status } = useSelector(state => state.filter);
    const changeFilter = filter => dispatch(setFilter(filter));

    return (
        <Container className="mt-2">
            <h4>Filter</h4>
            {Object.keys(Filters).map(key => {
                const value = Filters[key];
                const checked = value === status;

                return (
                    <Form.Check
                        key={value}
                        inline
                        label={value.toUpperCase()}
                        type='radio'
                        name='filter'
                        onChange={() => changeFilter(value)}
                        checked={checked}
                    />
                )
            })}
        </Container>
    )
};
