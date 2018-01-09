import React, { Component } from 'react';

export default class TicketsCounter extends Component{
    render(){
        const {count, increment, decrement} = this.props;
        return (
            <div>
            
                <label>{count}</label>            
                
                <button onClick={increment}>+</button>
                <button onClick={decrement}>-</button>
            </div>
        )
    }
}
