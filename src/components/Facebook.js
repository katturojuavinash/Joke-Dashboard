import React, { Component } from 'react';
import Buttons from './Buttons';

const Styles = {
  flexContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  header: {
    textAlign: 'center'
  },
};

export default class Facebook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={Styles.flexContainer}>
        <header style={Styles.header}>
          <Buttons fetchData={this.props.fetchData} />
        </header>
      </div>
    );
  }
}
