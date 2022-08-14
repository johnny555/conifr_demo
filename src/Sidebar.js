import React, { DragEvent } from 'react';
import './dnd.css';

import { Grid, Button, Menu , Image, Header} from 'semantic-ui-react';



const onDragStart = (event: DragEvent, nodeType: string) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

const Sidebar = () => {
  return (
    <Grid >
      <Grid.Row>
      <Header>Components</Header>
      </Grid.Row>
      <Grid.Row >
        <div className="react-flow__node-input" onDragStart={(event: DragEvent) => onDragStart(event, 'excavator')} draggable>
        <Image src='excavator.png' size='small' />
        </div>
      </Grid.Row>
      <Grid.Row>
        <div className="react-flow__node-default" onDragStart={(event: DragEvent) => onDragStart(event, 'factory')} draggable>
        <Image src='factory.png' size='small' />

        </div>
      </Grid.Row>
      <Grid.Row>
        <div className="react-flow__node-output" onDragStart={(event: DragEvent) => onDragStart(event, 'van')} draggable>
        <Image src='van.png' size='small' />
        </div>
      </Grid.Row>
    </Grid>

    );
};

export default Sidebar;