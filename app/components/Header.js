import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'


class Header extends Component {
  render() {
    return <span className='loading header'>{this.props.element}</span>
  }
}

Header.defaultProps = {
  element: 'Default Header Placeholder'
}

export default Header;