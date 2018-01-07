import React from 'react';

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
            <button onClick={() => this.setState({ count: this.state.count + 1})}>+</button>
            <button onClick={() => this.setState({ count: this.state.count - 1})}>-</button>
        </div>
        )
    }
}

export default Counter

