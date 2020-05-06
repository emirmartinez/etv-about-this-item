import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';



class Recommended extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      4: true,
      5: false,
      6: false
    }
    this.recClickHandler = this.recClickHandler.bind(this)
  }

  recClickHandler(event) {
    var target = event.currentTarget.dataset.id;
    console.log(target)
    if (target === '4') {
      this.setState({ 4: true, 5: false, 6: false })
    } else if (target === '5') {
      this.setState({ 4: false, 5: true, 6: false })
    } else if (target === '6') {
      this.setState({ 4: false, 5: false, 6: true })
    }
  }

  render () {
    const One = this.state['4'] === true ? 'red' : '';
    const Two = this.state['5'] === true ? 'red' : '';
    const Three = this.state['6'] === true ? 'red' : '';
    return (
        <Tabs className='tabs'>

          <TabList className='tabList'>
            <Tab onClick={this.recClickHandler} data-id="4" className={One}>More to Consider</Tab>
            <Tab onClick={this.recClickHandler} data-id="5" className={Two}>Product Color - Grey</Tab>
            <Tab onClick={this.recClickHandler} data-id="6" className={Three}>Trend Theme - Movies</Tab>
          </TabList>
          <hr></hr>

          <TabPanel>1</TabPanel>
          <TabPanel>2</TabPanel>
          <TabPanel>3</TabPanel>
        </Tabs>
    )
  }
}

export default Recommended;