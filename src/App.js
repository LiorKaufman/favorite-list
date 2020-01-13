import React from 'react';

// components
import Main from '../src/Todo-list/components/main'

// redux
import store from "./redux/store";
import { Provider } from 'react-redux'


function App() {

  return (
      <Provider store={store}>
        <Main/>
      </Provider>
  );
}

export default App;
