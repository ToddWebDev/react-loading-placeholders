import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import './index.css';


export default class Placeholders extends Component {

  render() {
    const elements = [];
    elements.map((i) => <span key={i}>Loader</span>);
    return (
      <span className="react-loading-placeholder">
        {elements}
      </span>
    )
  }
}

ReactDom.render(
  <Placeholders />,
  document.getElementById('app')
)
