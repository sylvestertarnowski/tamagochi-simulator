import React from 'react';
import pikachu from '../../assets/pikachu.png';
import { render } from 'react-dom';
import { NumberTypeAnnotation } from '@babel/types';

type Props = {
    name: string;
    happiness: number;
    power: number;
    hunger: number;
}

type State = any;

type Sprite =  {
    context: () => any;
    width: number;
    height: number;
    image: any;
}

// let canvas = document.getElementById("pikaAnimation");
// canvas.width = 100;


class GeneralStatus extends React.Component<Props, State> {
    readonly state = {

    }

    constructor(props: Props) {
        super(props);
    }

    // componentDidMount() {
    //     this.updateCanvas();
    // }

    // updateCanvas = () => {
    //     const ctx = this.refs.canvas.getContext();
    //     ctx.fillRect(0, 0, 100, 100);
    // }

    // sprite = (options: Sprite) => {
    //     let that: Sprite = {
    //         context: options.context,
    //         width: options.width,
    //         height: options.height,
    //         image: options.image
    //     };
    //     return that;
    // }

    // coin = this.sprite({
    //     context: this.refs.canvas.getContext("2d"),
    //     width: 55,
    //     height: 55,
    //     image: pikachu,
    // })

    render() {
        const { name, happiness, power } = this.props;
        return (
            <div>
                <span>
                    {`The Monster name is ${name}, and its happiness level is ${happiness}. Current Power Level: ${power}`}
                    <img src={pikachu} alt="pikachu sprite"/>
                </span>
                <canvas ref="canvas" width={55} height={55} />
            </div>
        )
    }
}

export default GeneralStatus;


