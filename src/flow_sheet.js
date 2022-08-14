import { useState, DragEvent, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  ReactFlowInstance,
  Connection,
  Edge,
  Node,
  useNodesState,
  MiniMap,
  useEdgesState
} from 'react-flow-renderer';


import { Grid } from 'semantic-ui-react';


import Sidebar from './Sidebar.js';

import './dnd.css';

const initialNodes = [{ id: '1', type: 'input', data: { label: 'input node' }, position: { x: 250, y: 5 } }];

const onDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

let id = 0;
const getId = () => `dndnode_${id++}`;

function FlowSheet()  {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
  const onInit = (rfi) => setReactFlowInstance(rfi);

  const onDrop = (event) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const type = event.dataTransfer.getData('application/reactflow');
      const position = reactFlowInstance.project({ x: event.clientX, y: event.clientY - 40 });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    }
  };

  return (
    <Grid.Column width={12} >
      <Grid>
        <Grid.Column width={9} >
        <ReactFlowProvider>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange}
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
            >
              <Controls />
            </ReactFlow>
        </ReactFlowProvider>
        </Grid.Column>
        
        <Grid.Column width={3}>
            <Sidebar />
        </Grid.Column>

      </Grid>
    </Grid.Column>
  );
};

export default FlowSheet;
  