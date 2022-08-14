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
  useEdgesState, 
  Background, MarkerType
} from 'react-flow-renderer';

import IconNode from './IconNode.js';

import './IconNode.css';

import { Grid } from 'semantic-ui-react';

import Sidebar from './Sidebar.js';

import './dnd.css';



const rfStyle = {
  backgroundColor: '#bec29e',
};

const initialNodes = [
  { id: '1', type: 'iconNode', data: { label: 'excavator' }, position: { x: 250, y: 5 } },
  { id: '2', type: 'iconNode', data: { label: 'factory' }, position: { x: 250, y: 125 } },
  { id: '3', type: 'iconNode', data: { label: 'van' }, position: { x: 250, y: 250 } },
];

const initialEdges = [
   { id: 'e1-1', source: '1', target: '2',  animated: true, markerEnd: { type: MarkerType.ArrowClosed}, stroke: 'black'  },
   { id: 'e1-2', source: '2', target: '3',  animated: true, markerEnd: {
    type: MarkerType.ArrowClosed,
  }}   
]

const onDragOver = (event) => {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
};

let id = 0;
const getId = () => `dndnode_${id++}`;

const nodeTypes = { iconNode: IconNode };

function FlowSheet()  {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  
  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));
  const onInit = (rfi) => setReactFlowInstance(rfi);

  const onDrop = (event) => {
    event.preventDefault();

    if (reactFlowInstance) {
      const data = event.dataTransfer.getData('application/reactflow');
      const position = reactFlowInstance.project({ x: 200, y: 200 });
      var type = 'iconNode';

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: data },
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
              style={rfStyle}
              nodeTypes={nodeTypes}
            >
              <Background variant="dots" gap={12} size={1} />
              <Controls />
            </ReactFlow>
        </ReactFlowProvider>
        </Grid.Column>
        
        <Grid.Column width={3}>
        <div style={{ height: 50 }} />
            <Sidebar />
        


        </Grid.Column>

      </Grid>
    </Grid.Column>
  );
};

export default FlowSheet;
  