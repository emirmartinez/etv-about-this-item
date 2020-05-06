import React from 'react';
import Tabs from './tabs.jsx';
import Recommended from './recommended.jsx';
import Featured from './featured.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props }
  }

  render() {
   
    return (
      <div className='mainDiv'>
        <h2 className='subTitle'>About this item</h2>
        <Tabs data={this.props.data} />
        <h2 className='subTitle'>Recommended</h2>
        <Recommended data={this.props.data} />
        <h2 className='subTitle'>Featured Products</h2>
        <Featured data={this.props.data} />
      </div>
    )
  }

}

export default App;