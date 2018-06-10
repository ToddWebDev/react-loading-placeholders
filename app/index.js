import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Placeholders from './components/Placeholders';
import Demo from './components/Demo';
import './index.css';

ReactDom.render(
  <Demo />,
  document.getElementById('app')
)
