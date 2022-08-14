import React, { DragEvent } from 'react';
import './dnd.css';

import { Grid, Button, Menu } from 'semantic-ui-react';



const onDragStart = (event: DragEvent, nodeType: string) => {
  event.dataTransfer.setData('application/reactflow', nodeType);
  event.dataTransfer.effectAllowed = 'move';
};

const Sidebar = () => {
  return (
    <Grid>
      <Grid.Row >
        <div className="react-flow__node-input" onDragStart={(event: DragEvent) => onDragStart(event, 'input')} draggable>
          Input Node
        </div>
      </Grid.Row>
      <Grid.Row>
        <div className="react-flow__node-default" onDragStart={(event: DragEvent) => onDragStart(event, 'default')} draggable>
          Default Node
        </div>
      </Grid.Row>
      <Grid.Row>
        <div className="react-flow__node-output" onDragStart={(event: DragEvent) => onDragStart(event, 'output')} draggable>
          Output Node
        </div>
      </Grid.Row>
    </Grid>
    );
};

export default Sidebar;