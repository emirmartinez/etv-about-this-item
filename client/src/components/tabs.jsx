import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { props }
  }

  render () {
     //Fit & style
     const fitStyle = this.props.data.details['Fit & style']
     const styleItems = fitStyle.map((item) => 
       <li>{item}</li>);
     //
    return (
      <Tabs className='tabs'>

          <TabList className='tabList'>
            <Tab>Detais</Tab>
            <Tab>Shipping & Returns</Tab>
            <Tab>Q&A</Tab>
          </TabList>

          <TabPanel >
            <div className='fitStyle'>
            <h2>Fit & style</h2>
              <ul className='styleItems'>{styleItems}</ul>
            </div>

            <div className='SpecDesc'>
              <h2>Specification</h2>
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