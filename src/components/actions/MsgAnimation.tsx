import React from 'react';

type State = {
    dots: string;
}

type Props = any;

class MsgAnimation extends React.Component<Props, State> {
    readonly state: State = {
        dots: "",
    }

    handleDots = () => {
        this.setState(prevState => {
            const { dots } = prevState;
            return { dots: dots + ". ", }
        })
    }

    handleAnimation = () => {
        setInterval(() => this.handleDots, 1000);
    }

    render() {
        this.handleAnimation();
        return (
            <span>{this.state.dots}</span>
        )
    }
}

export default MsgAnimation;