import React, { Component } from 'react';
import _ from 'lodash'


class App extends Component {
  constructor(){
    super()
    this.el = null
  }

  componentDidMount(){
    console.dir(_.map)
  }

  render() {
    return (
      <div ref={div => this.el = div}/>
    );
  }
}

export default App;
