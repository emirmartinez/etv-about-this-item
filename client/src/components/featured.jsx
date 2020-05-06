import React from 'react'


class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props }
  }

  render() {
    const pictures = this.props.data.details.Pictures
    const picture = pictures.map((item) =>
      <li key={item.toString()}>
        <div>
        <img src={item.pic} width="185" height="185" />
        <p>{item.price}</p>
        <p>{item.name}</p>
        </div>
      </li>)
    return (
      <ul>
        {picture}
      </ul>
    )
  }
}

export default Featured;