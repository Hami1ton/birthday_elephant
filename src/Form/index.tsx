import * as React from 'react';

export type Props = {
    value?: string;
    setMessage?: any;
    isInputed?: any;
}

 class Form extends React.Component<Props, {value: string;}> {

    constructor(props: Props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    private update = (e: any) => {
        this.setState({value: e.target.value});
    }
 
    private submit = () => {
        if (this.isBirthday(this.state.value)) {
          this.props.setMessage('誕生日おめでとう!!!');
        } else {
          this.props.setMessage('こんにちは!');
        }
        this.props.isInputed();
    }    
    
    private isBirthday = (input: string) => {
        var today: string = this.getToday(); 
        if(today === input) {
            return true;
        }
        return false;
    }

    private getToday = () => {
        var today: Date = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        return year + '/' + month + '/' + day;
    }    

    render() {
        return (
        <div>
            <input
            type='text'
            placeholder='YYYY/MM/dd' 
            value={this.state.value} 
            onChange={e => this.update(e)} 
            />
            <button onClick={this.submit}>送信</button>
        </div>
        );
    }
}

export default Form;