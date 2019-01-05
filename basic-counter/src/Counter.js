import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: props.initialValue
    };
  }
  increment = () => {
    this.setState(
      state => ({ count: state.count + 1 }),
      () => console.log("setState call", this.state)
    );
    console.log("test", this.state);
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  componentWillReceiveProps(nextProp) {
    this.setState({ count: nextProp.initialValue });
  }

  render() {
    const { count } = this.state;
    return (
      <section className="Counter">
        <h1>Count: {count}</h1>
        <button onClick={this.increment} className="full-width">
          Increment
        </button>
        <button onClick={this.decrement} className="full-width">
          Decrement
        </button>
        <button
          onClick={() => this.props.updateInitialValue(10)}
          className="full-width"
        >
          Reset
        </button>
      </section>
    );
  }
}
