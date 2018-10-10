import React, { Component } from "react";

import "./App.css";
//import MyComponent from "./component/MyComponent";
import List from "./component/List";

class App extends Component {
  state = {
    term: "",
    items: []
  };

  onChange = event => {
    this.setState({
      term: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.setState({
      term: "",
      items: [...this.state.items, this.state.term]
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onChange} />
          <button>Submit</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
