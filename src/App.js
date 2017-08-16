import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import NamesList from './components/NamesList';

class App extends Component {
  render() {
    return (
      <div>
        <NamesList data={this.props.data} />
      </div>
    );
  }
}

App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default App;
