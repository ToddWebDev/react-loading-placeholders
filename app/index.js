import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import Header from './components/Header';
import './index.css';


export default class Placeholders extends Component {

  render() {
    const elements = ['My React Loading Placeholder'];
    elements.map((element) => <span key={element.toString()}>Loader</span>);
    return (
      <div className="react-loading-placeholder">
        <Header />
      </div>
    )
  }
}

ReactDom.render(
  <Placeholders />,
  document.getElementById('app')
)
