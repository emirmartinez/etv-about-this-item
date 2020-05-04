import React from 'react';
import Tabs from './tabs.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props }
  }

  render() {
   
    return (
      <div className='mainDiv'>
        <h2 className='about'>About this item</h2>
        <Tabs data={this.props.data} />
      </div>
    )
  }

}

export default App;