import React from 'react';
import './App.scss';
import Device from './component/device';

function App() {
  const portfolioStyle = {
    position: "absolute",
    top: 0,
    left: 0,  
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }

  return (
    <Container>
      <Device>
        <div style={portfolioStyle}>
          <h1>Portfolio</h1>
        </div>
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
