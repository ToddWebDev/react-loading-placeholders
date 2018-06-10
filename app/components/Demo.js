import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types'
import Placeholders from './Placeholders';

class Demo extends Component {
  getStyle(){
    const { size } = this.props;
    const baseStyle = {
      padding: 15,
    };
    return Object.assign(baseStyle, {
      fontSize: size === 'small' ? 16 : 25,
      lineHeight: size === 'small' ? 2 : 3.2,
    });
  }
  
  render() {
    return (
      <div style={this.getStyle()}>
        <h1>{this.props.title || <Placeholders/>}</h1>
        <p>{this.props.children || <Placeholders count={3}/>}</p>
      </div>
    );
  }
}

Demo.defaultProps = {
  size: 'small'
}

Demo.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf('small', 'large')
}

export default Demo;