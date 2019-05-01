import React from 'react';
import './App.css';
import Name from './components/Name';
import Stats from './components/stats/Stats';
import Status from './components/status/Status';
import Actions from './components/actions/Actions';
import Row from './components/layout/Row';
import Column from './components/layout/Column';


type State = {
  name: string;
  performingAction: boolean;
  action: Action;
  happiness: number;
  power: number;
  hunger: number;
  health: number;
};
type Props = {
  name?: string;
  handleFeed?: any;
};

type Action = "feeding" | "playing" | "training" | "sleeping" | "none";

class App extends React.Component<Props, State> {
  readonly state: State = {
    name: "Pikachu",
    performingAction: false,
    action: "none",
    happiness: 50,
    power: 20,
    hunger: 40,
    health: 100,
  }

  handleFeed = () => {
    this.setState({
      performingAction: true,
      action: "feeding"
    }, () => setTimeout(() => this.setState(prevState => {
      const { hunger, health } = prevState;
      return {
        performingAction: false,
        action: "none",
        hunger: hunger - 20,
        health: health + 10,
      }
    }), 5000));
  }

  handlePlay = () => {
    this.setState({
      performingAction: true,
      action: "playing"
    }, () => setTimeout(() => this.setState(prevState => {
      const { hunger, happiness, power, health } = prevState;
      return {
        performingAction: false,
        action: "none",
        happiness: happiness + 10,
        hunger: hunger + 10,
        power: power + 5,
        health: health - 5,
      }
    }), 10000));
  }

  actionMethods = {
    handleFeed: this.handleFeed,
    handlePlay: this.handlePlay
  }

  render() {
    const { name, happiness, power, performingAction, action, health, hunger } = this.state;
    return (
      <Column>
        <Row>
          <Name name={name} />
        </Row>
        <Row>
          <Stats
            happiness={happiness}
            health={health}
            hunger={hunger}
            power={power}
          />
          <Status
            name={name}
            happiness={happiness}
            power={power}
          />
          <Actions 
            actionMethods={this.actionMethods}
            performingAction={performingAction}
            action={action}
          />
        </Row>
      </Column>
    )
  }
}

export default App;