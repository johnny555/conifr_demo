import './App.css';
import FlowSheet from './flow_sheet.js';
import { Grid, Button, Menu } from 'semantic-ui-react';
import { useState, DragEvent, useRef, getState, setState } from 'react';


function App() {

  // Note that the FLow needs to be provdiing a Grid with width summing to 12

  const [activeItem, setActiveItem] = useState('flow');  

  const handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  
  return (
    <Grid>
      <Grid.Column width={3} >
        <Menu fluid vertical tabular>
              <Menu.Item
                name='flow'
                active={activeItem === 'flow'}
                onClick={() => {setActiveItem('flow');}}
              />
              <Menu.Item
                name='Flow Report'
                active={activeItem === 'Flow Report'}
                onClick={() => {setActiveItem('Flow Report');}}
              />
           
        <div style={{ height: 500 }} />
        </Menu>
      </Grid.Column>
      

      <FlowSheet />
      
    </Grid>
  );
}

export default App;
