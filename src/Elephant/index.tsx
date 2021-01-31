import * as React from 'react';
import img from './../asset/Elephant.jpg';
import './index.scss';

export type Props = {
  message?: string;
  isInputed?: boolean;
}

 class Elephant extends React.Component<Props, {message: string, isInputed:boolean;}> {

    constructor(props: Props) {
        super(props);
        this.state = {
            message: "",
            isInputed: false
        };
    }

    render() {
        let message;
        if (this.props.isInputed) {
            message = (
            <div className="balloon1-left">
                <p>{this.props.message}</p>
            </div>
            );
        } else {
            message = <div></div>;
        }

        return (
        <>
            <img src={img} alt="イラスト1" width='250' height='250'/>
            {message}
        </>
        );
    }
}

export default Elephant;