import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
  render() {
    const { data } = this.props;
    const namesList = data.map(datum =>
      <li key={datum.id} className={datum.sex}>
        {datum.name}
      </li>
    );
    return (
      <div className="App">
        <ul>
          {namesList}
        </ul>
      </div>
    );
  }
}
App.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default App;
