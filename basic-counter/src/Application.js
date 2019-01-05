import React, { Component } from "react";

import Counter from "./Counter";
// import CounterContainer from './CounterContainer';
// import WithCount from './WithCount';

export default class Application extends Component {
  state = {
    initialValue: 2
  };

  updateInitialValue = value => {
    this.setState({ initialValue: value });
  };

  render() {
    return (
      <main className="Application">
        <Counter
          initialValue={this.state.initialValue}
          updateInitialValue={this.updateInitialValue}
        />
      </main>
    );
  }
}
