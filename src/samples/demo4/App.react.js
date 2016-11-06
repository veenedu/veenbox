import React, {PropTypes} from 'react';
import Layout from  './Layout.react'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      layout:"3"
    }
  }

  render() {
    return (<Layout layout={this.state.layout} />);
  }
}
