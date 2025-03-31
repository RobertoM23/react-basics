import React from "react";
import SelfDestruction from "./SelfDestruction";
import ExplosionImage from "./ExplosionImage";

function App() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#1e1e1e',
      minHeight: '100vh',
      padding: '20px',
      color: 'white',
    }}>
      <h1>Conto alla rovescia</h1>
      <SelfDestruction />
      <ExplosionImage />
    </div>
  );
}

export default App
