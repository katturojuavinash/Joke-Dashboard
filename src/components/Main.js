import React, { Component} from 'react';
import { connect } from 'react-redux';
import Facebook from './Facebook';
import { fetchData } from '../actions';
import Display from './Display';

function mapStateToProps(state) {
  return {
    mainData: state.mainData
  };
}

class Main extends Component {
  render() {
    return (
      <div>
      <Facebook
        title="Welcome to the icanhazdadjoke"
        subtitle="random joke"
        fetchData={() => this.props.dispatch(fetchData())}
        />
        <Display
          displayData={this.props.mainData.data}
          />
      </div>
    );
  }
}

Main.propTypes = {
  dispatch: React.PropTypes.func,
  mainData: React.PropTypes.object
};

export default connect(mapStateToProps)(Main);
