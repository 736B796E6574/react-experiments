import React from 'react';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithCallback from './components/StatefulGreetingWithCallback';
import StatefulGreetingWithPrevState from './components/StatefulGreetingWithPrevState';

function App() {
  // With JSX:
  return (
    <div className="App">
      
       
      <StatefulGreetingWithPrevState name="Horse"/>

    </div>
  );

 

  // Without JSX:
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   React.createElement("header",
  //     { className: "App-header" },
  //     React.createElement("h1",
  //       null,
  //       "Hello from JSX!"
  //     )
  //   )
  // );
}

export default App;
