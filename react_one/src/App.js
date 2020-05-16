import React from 'react';
import './App.scss';
import Device from './component/device';

function App() {
  return (
    <Container>
      <Device>
          Portfolio
      </Device>
    </Container>
  );
}

const Container = props => {
  return (
    <div className="Container">
      {props.children}
    </div>
  );
}

export default App;
