import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Logo  from './Logo';
import SliderPicture from './SliderPicture';
import AddTodo from '../container/AddTodo';
import ResultList from './ResultList';

class App extends Component {

  render() {
    return (
        <div>
          <Logo/>
          <AddTodo/>
          <ResultList/>
        </div>
    );
  }
}

export default App;
