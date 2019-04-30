import React from 'react';
import './App.css';

type State = {
  name: string;
  performingAction: boolean;
  action: string;
  happiness: number;
  power: number;
  hunger: number;
};

class App extends React.Component {
  readonly state: State = {
    name: "Unknown",
    performingAction: false,
    action: "none",
    happiness: 50,
    power: 20,
    hunger: 0,
  }

  handleFeed = () => {
    this.setState(prevState => {
      
    })
  }

  render() {
    const { name, happiness, power } = this.state;

    return(
      <div className="App">

        <div>{`The Monster name is ${name}, and its happiness level is ${happiness}. Current Power Level: ${power}`}</div>
        <button
          id="feed"
          onClick={this.handleFeed}
        >
          Feed
        </button>
      </div>
    )
  }
}

export default App;