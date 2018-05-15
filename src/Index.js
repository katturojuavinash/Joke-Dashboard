import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './configureStore';

class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('facebook')
);
