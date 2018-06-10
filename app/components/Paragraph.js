import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'


class Paragraph extends Component {
  render() {
    return <span className='loading'>{this.props.element}</span>
  }
}

Paragraph.defaultProps = {
  element: 'Default Paragraph Placeholder'
}

export default Paragraph;