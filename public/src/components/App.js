import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import AddTodo from '../container/AddTodo';
import ResultList from './ResultList';


class App extends Component {

  render() {
    return (
        <div>
          <AddTodo />
          <ResultList />
        </div>
    );
  }
}

export default App;
