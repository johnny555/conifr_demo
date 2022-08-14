import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import {Image} from 'semantic-ui-react';

import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};


 
  

const handleStyle = { left: 10 };

function IconNode({ data }) {
  const onChange = useCallback((evt) => {
    console.log(evt.target.value);
  }, []);
  
  var icon = '';
  if (data.label == 'excavator') 
  {
    icon = (<div>
        <Image src='excavator.png' size='mini' />
        <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
        Raw Materials
        </div>);
  }

  if (data.label == 'factory') 
  {
    icon = (<div>
        <Handle type="target" position={Position.Top} id="a" style={handleStyle} />
        <Image src='factory.png' size='mini' />
        <Handle type="source" position={Position.Bottom} id="b" style={handleStyle} />
        Processing
        </div>);
  }
  if (data.label == 'van') 
  {
    icon = (
    <div>
        <Handle type="target" position={Position.Top} id="a" style={handleStyle} />
        <Image src='van.png' size='mini' />
        Logistics
    </div>
    );
  }
  return (
    <div className="icon-node">
        
        <Modal
            trigger={icon}
            header='Data Details'
            content='Data details here'
            actions={['Close', { key: 'done', content: 'Done', positive: true }]}
        >
          
        </Modal>
    </div> )

}

export default IconNode;
