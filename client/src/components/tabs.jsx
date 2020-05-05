import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props }
  }

  render() {
    //Fit & style
    const fitStyle = this.props.data.details['Fit & style']
    const styleItems = fitStyle.map((item) =>
      <li>{item}</li>);
    //Specs

    //Description
    const description = this.props.data.details['Description']
    console.log(description)
    return (
      <Tabs className='tabs'>

        <TabList className='tabList'>
          <Tab>Details</Tab>
          <Tab>Shipping & Returns</Tab>
          <Tab>Q&A</Tab>
        </TabList>
        <hr></hr>

        <TabPanel >
          <div className='fitStyle'>
            <h3>Fit & style</h3>
            <ul className='styleItems'>{styleItems}</ul>
          </div>

          <div className='SpecAndDesc'>
            <div className='spec'>
              <h3>Specification</h3>
              <div><b>Sizing:</b> {this.props.data.details['Sizing']}</div>
              <hr></hr>
              <div><b>Material:</b> {this.props.data.details.Material}</div>
              <hr></hr>
              <div><b>Length:</b> {this.props.data.details.Length}</div>
              <hr></hr>
              <div><b>Features:</b> {this.props.data.details.Features}</div>
              <hr></hr>
              <div><b>Neckline:</b> {this.props.data.details.Neckline}</div>
              <hr></hr>
              <div><b>Item Style:</b> {this.props.data.details['Item Style']}</div>
              <hr></hr>
              <div><b>Garment sleeve style:</b> {this.props.data.details['Garment sleeve style']}</div>
              <hr></hr>
              <div><b>Care and Cleaning:</b> {this.props.data.details['Care and Cleaning']}</div>
              <hr></hr>
              <div><b>CIN:</b> {this.props.data.details.TCIN}</div>
              <hr></hr>
              <div><b>UPC:</b> {this.props.data.details.UPC}</div>
              <hr></hr>
              <div><b>Item Number (DPCI):</b> {this.props.data.details['Item Number (DPCI)']}</div>
              <hr></hr>
            </div>
            <div className='desc'>
              <h3>Description</h3>
              <div>{description}</div>
            </div>
            <button className='showButton'>Show More</button>
          </div>
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>

        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>

      </Tabs>
    )
  }

}

export default TabsComp;