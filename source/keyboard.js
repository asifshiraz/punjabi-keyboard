import React, { Component } from 'react';

class Hello extends Component {
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
}

React.render(<Hello />, document.getElementById('root'));