import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './use-state/App';
// import App from './use-reducer/App';
// import { TodoProvider } from './use-reducer/modules/todoContext';
// import { TodoContext } from './use-reducer/modules/todoContext';
import store from './redux-toolkit/store';
import App from './redux-toolkit/App';
import { fetchTodos } from './redux-toolkit/modules/slices/todosSlice';

store.dispatch(fetchTodos());
const root$ = document.getElementById('root');

// render(<App />, root$);

// render(
//     <TodoProvider>
//         <App />
//     </TodoProvider>,
//     root$
// )
// render(
//     <TodoContext.Provider>
//         <App />
//     </TodoContext.Provider>,
//     root$
// )
render(
    <Provider store={store}>
        <App />
    </Provider>,
    root$
)
