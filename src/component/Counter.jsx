import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      numberr: [1, 3, 4, 5, 6, 7, 7],
    };
  }

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    // const { numberr } = this.state;
    return (
      <div>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.handleIncrease}>Go up</button>
        <button onClick={this.decrement}>Decrement</button>
        {this.state.numberr.map((n) => {
          return (
            <ul>
              <li>{n}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Counter;
