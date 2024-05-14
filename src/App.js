// App.js
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodoList from './TodoList';
import todoReducer from './reducers';

const store = createStore(todoReducer);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
