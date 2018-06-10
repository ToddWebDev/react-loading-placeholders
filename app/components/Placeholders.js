import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import Placeholder from './Placeholder';

class Placeholders extends Component {

  render() {
    const elements = [];
    for (let i = 0; i < this.props.count; i++) {
      elements.push(
          <Placeholder key={i}></Placeholder>
      );
    }
    return (
      <span className="react-loading-placeholder">
        {elements}
      </span>
    )
  }
}

Placeholders.defaultProps = {
  count: 1
}

export default Placeholders;