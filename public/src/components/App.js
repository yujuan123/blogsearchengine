import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import Logo  from './Logo';
import SliderPicture from './SliderPicture';

class App extends Component {

  render() {
    return (
        <div>
          <Logo/>
          <SliderPicture/>
        </div>
    );
  }
}

export default App;
