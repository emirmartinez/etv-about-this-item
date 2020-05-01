import React from 'react';
import Data from './db/dummyData.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: Data
    }
  }

  render() {
    return (<h1>Hello</h1>)
  }
  
}

export default App;