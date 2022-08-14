import './App.css';
import FlowSheet from './flow_sheet.js';
import { Grid, Button, Menu, Header } from 'semantic-ui-react';
import { useState, DragEvent, useRef, getState, setState } from 'react';
import Featured from './Components/featured/Featured';
import Chart from './Components/chart/Chart';
import Table from './Components/table/Table';

function App() {

  // Note that the FLow needs to be provdiing a Grid with width summing to 12

  const [activeItem, setActiveItem] = useState('Flow');  

  const handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  var body = '';
  if (activeItem == 'Flow') 
  {
    body = (<FlowSheet/>);
  }
  else {
    body = (<Grid.Column width={12}>
      <Grid>
        
          <Featured/>
        
          <Chart />
        
        <Table />
      </Grid>
    </Grid.Column>)
  }
  
  return (
    <Grid>
      <Grid.Column width={3} >
        <Menu fluid vertical tabular>
              <Menu.Item
                name='Flow'
                active={activeItem === 'Flow'}
                onClick={() => {setActiveItem('Flow');}}
              />
              <Menu.Item
                name='Flow Report'
                active={activeItem === 'Flow Report'}
                onClick={() => {setActiveItem('Flow Report');}}
              />
           
        <div style={{ height: 500 }} />
        </Menu>
      </Grid.Column>
      
      { body }
      
    </Grid>
  );
}

export default App;
