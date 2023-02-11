import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
  }

  componentDidMount() {
    console.log("component rendered");
  }

  componentDidUpdate() {
    console.log("I just updated");
  }

  componentWillUnmount() {
    console.log("Goodbye, cruel world");
  }
  state = { count: 0 };

  add = () => {
    this.setState((current) => ({ count: this.state.count + 1 }));
  };

  minus = () => {
    this.setState((current) => ({ count: this.state.count - 1 }));
  };

  render() {
    console.log("render");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
