import React from 'react';
import './App.scss';
import Device from './component/device';

function App() {
  const portfolioStyle = {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    width: "100%",
    height: "100%",
    top: "50%",
    left: "50%"
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
