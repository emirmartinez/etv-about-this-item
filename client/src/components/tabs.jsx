import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props,
      1: true,
      2: false,
      3: false
    }
    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler(e) {
    var target = e.currentTarget.dataset.id;
        console.log(target)
    if (target === '1') {
      this.setState({ 1: true, 2: false, 3: false })
    } else if (target === '2') {
      this.setState({ 1: false, 2: true, 3: false })
    } else if (target === '3') {
      this.setState({ 1: false, 2: false, 3: true })
    }
  }

  render() {
    //Fit & style
    const fitStyle = this.props.data.details['Fit & style'];
    const styleItems = fitStyle.map((item) =>
      <li>{item}</li>);
    const valueOne = this.state['1'] === true ? 'red' : '';
    const valueTwo = this.state['2'] === true ? 'red' : '';
    const valueThree = this.state['3'] === true ? 'red' : '';

    //Description
    const description = this.props.data.details['Description'];

    return (
      <Tabs className='tabs'>

        <TabList className='tabList'>
          <Tab onClick={this.clickHandler} data-id="1" className={valueOne}>Details</Tab>
          <Tab onClick={this.clickHandler} data-id="2" className={valueTwo}>Shipping & Returns</Tab>
          <Tab onClick={this.clickHandler} data-id="3" className={valueThree}>Q&A</Tab>
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
              <div className="specDiv"><b>Sizing:</b> {this.props.data.details['Sizing']}</div>
              <hr></hr>
              <div className="specDiv"><b>Material:</b> {this.props.data.details.Material}</div>
              <hr></hr>
              <div className="specDiv"><b>Length:</b> {this.props.data.details.Length}</div>
              <hr></hr>
              <div className="specDiv"><b>Features:</b> {this.props.data.details.Features}</div>
              <hr></hr>
              <div className="specDiv"><b>Neckline:</b> {this.props.data.details.Neckline}</div>
              <hr></hr>
              <div className="specDiv"><b>Item Style:</b> {this.props.data.details['Item Style']}</div>
              <hr></hr>
              <div className="specDiv"><b>Garment sleeve style:</b> {this.props.data.details['Garment sleeve style']}</div>
              <hr></hr>
              <div className="specDiv"><b>Care and Cleaning:</b> {this.props.data.details['Care and Cleaning']}</div>
              <hr></hr>
              <div className="specDiv"><b>CIN:</b> {this.props.data.details.TCIN}</div>
              <hr></hr>
              <div className="specDiv"><b>UPC:</b> {this.props.data.details.UPC}</div>
              <hr></hr>
              <div className="specDiv"><b>Item Number (DPCI):</b> {this.props.data.details['Item Number (DPCI)']}</div>
              <hr></hr>
            </div>
            <div className='desc'>
              <h3>Description</h3>
              <div>{description}</div>
            </div>
          </div>
          <div>
            <button className='showButton'>Show More</button>
          </div>
        </TabPanel>

        <TabPanel>
          <div className='shipping'>
            <h3>Shipping options</h3>
            <div>{this.props.data.details['Shipping options']}</div>
            <h3>Shipping details</h3>
            <div>{this.props.data.details['Shipping details']}</div>
            <h3>Return details</h3>
            <div>{this.props.data.details['Return details']}</div>
          </div>
          <div>
            <br></br>
          </div>
        </TabPanel>

        <TabPanel>
          <div>
            <button className='questionButton'>Ask a question</button>
          </div>
          <div>
            <br></br>
          </div>
        </TabPanel>

      </Tabs>
    )
  }

}

export default TabsComp;