import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'


class Placeholder extends Component {
  render() {
    return <span className='loading'>{this.props.element}<br/></span>
  }
}

Placeholder.defaultProps = {
  element: 'Default Placeholder Text'
}

export default Placeholder;