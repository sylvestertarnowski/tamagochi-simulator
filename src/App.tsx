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
    hunger: 0,
    health: 100,
  }

  handleFeed = () => {
    this.setState({
      performingAction: true,
      action: "feeding"
    }, () => setTimeout(() => this.setState(prevState => {
      return {
        performingAction: false,
        action: "none",
        hunger: prevState.hunger - 20
      }
    }), 5000));
  }

  render() {
    const { name, happiness, power, performingAction, action } = this.state;
    // const actionButtons = <div>
    //   <Button id="feed" name="Feed" onClick={this.handleFeed} />
    // </div>
    return (
      <Column>
        <Row>
          <Name name={name} />
        </Row>
        <Row>
          <Stats

          />
          <Status
            name={name}
            happiness={happiness}
            power={power}
          />
          <Actions 
            handleFeed={this.handleFeed}
          />
        </Row>
      </Column>
    )
  }
}

export default App;