import React, { Component} from 'react';

export default class Display extends Component {
  render() {
    return (
      <div>
        {this.props.displayData.joke}
      </div>
    );
  }
}

Display.propTypes = {
  displayData: React.PropTypes.object,
  category: React.PropTypes.string
};
