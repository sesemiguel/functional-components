import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyApp(){
  return (
    <h1>Hello World</h1>
  )
}

// Self closing component for the single JSX component
ReactDOM.render(<MyApp />,document.getElementById('root')
);