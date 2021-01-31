import * as React from 'react';
import Elephant from 'Elephant';
import Form from 'Form';

export interface Props {
  message?: string;
  isInputed?: boolean;
}

class ElephantAndForm extends React.Component<Props, {message: string, isInputed: boolean;}> {
  constructor(props: Props) {
    super(props);
    this.state = { 
      message: props.message ? props.message : '',
      isInputed: props.isInputed ? props.isInputed : false
    };
  }

  setMessage = (e: string) => {
    this.setState({message: e});
  }

  isInputed = () => {
    this.setState({isInputed: true});
  }

  render() {
    return (
    <>
        <h1>誕生日を祝う象</h1>
        <Form setMessage={this.setMessage} isInputed={this.isInputed} ></Form>
        <Elephant message={this.state.message} isInputed={this.state.isInputed}></Elephant>
    </>
    );
  }

}

export default ElephantAndForm;