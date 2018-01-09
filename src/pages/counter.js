import React from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

class Counter extends React.Component {
    constructor(){
        super()
        this.state = { count:0 }
    }
    render() {
        return(
        <div>
            <h2>Counter: </h2>
            <p>current count: {this.state.count}</p>
            <Button color="success" onClick={() => this.setState({ count: this.state.count + 1})}>+</Button>
            <Button color="danger" onClick={() => this.setState({ count: this.state.count - 1})}>-</Button>
        </div>
        )
    }
}

export default Counter

