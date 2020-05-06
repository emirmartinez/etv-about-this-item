import React from 'react'


class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props }
  }

  render () {
    return (
      <div>
        <h3>pics</h3>
      </div>
    )
  }
}

export default Featured;