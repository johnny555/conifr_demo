import { useCallback } from 'react';
import { Handle, Position } from 'react-flow-renderer';
import {Image} from 'semantic-ui-react';

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
        {icon}
    </div> )

}

export default IconNode;
