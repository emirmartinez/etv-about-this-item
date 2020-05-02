import React from 'react';
import Details from './details.jsx'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {props}
  }

  render() {
    return (
      <div>
        <h2>About this Item</h2>
        <ul>
        <Details data={this.state} />
        </ul>
      </div>
    )
  }

}

export default App;