import { createSlice } from '@reduxjs/toolkit';

export const Filters = {
    All: 'all',
    Active: 'active',
    Completed: 'completed'
};

const initialState = {
    status: Filters.All
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            state.status = action.payload
        }
    }
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;