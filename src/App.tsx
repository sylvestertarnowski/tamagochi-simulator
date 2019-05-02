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
  health: number;
  hunger: number;
  power: number;
};

type Props = {
  name?: string;
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
    this.handleActionTemplate("feeding", 5, 10, -20, -5, 7000);
  }

  handlePlay = () => {
    this.handleActionTemplate("playing", 15, -5, 10, -5, 10000);
  }

  handleSleep = () => {
    this.handleActionTemplate("sleeping", 5, 15, 10, -5, 20000);
  }

  handleTrain = () => {
    this.handleActionTemplate("training", -10, 5, 10, 20, 12000);
  }

  // Allows user to define an action, without re-writing bunch of boilerplate
  handleActionTemplate = (act: Action, hap: number, hea: number, hun: number, pow: number, time: number) => {
    this.setState({
      performingAction: true,
      action: act
    }, () => setTimeout(() => this.setState(prevState => {
      const { happiness, health, hunger, power } = prevState;
      return {
        performingAction: false,
        action: "none",
        happiness: happiness + hap,
        health: health + hea,
        hunger: hunger + hun,
        power: power + pow,
      }
    }), time));
  }

  actionMethods = {
    handleFeed: this.handleFeed,
    handlePlay: this.handlePlay,
    handleSleep: this.handleSleep,
    handleTrain: this.handleTrain,
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