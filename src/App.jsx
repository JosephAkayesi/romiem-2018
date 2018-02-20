import React from 'react';
import Description from './components/Description/Description'
import Social from './components/Social/Social'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Description />
        <div className="App__Social">
          <Social />
        </div>
      </div>
    );
  }
}

export default App;
