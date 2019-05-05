import React from 'react';

type State = {
    dots: string;
}

type Props = any;

class MsgAnimation extends React.Component<Props, State> {
    readonly state: State = {
        dots: "",
    }

    handleDots = (): void => {
        this.setState(prevState => {
            const { dots } = prevState;
            return { dots: dots + ". ", }
        })
    }

    componentDidMount() {
        setInterval(() => this.handleDots(), 1000);
    }

    render() {
        let { dots } = this.state;
        return (
            <span>{dots}</span>
        )
    }
}

export default MsgAnimation;