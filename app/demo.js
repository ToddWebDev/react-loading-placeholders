import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Placeholders from './app';

class Blogpost extends Component {
    state = {
      
    }
    render() {
        return (
            <div style={{fontSize: 20, lineHeight: 2}}>
                <h1>{this.props.title || <Placeholders/>}</h1>
                {this.props.body || <Placeholders count={10}/>}
            </div>
        );
    }
}
