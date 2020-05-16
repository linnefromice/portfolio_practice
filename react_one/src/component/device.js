import React from 'react';
import './device.scss';

const Device = props => {
  return (
    <div className="Device">
      {props.children}
    </div>
  )
}

export default Device;