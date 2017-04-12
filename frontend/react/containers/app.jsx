import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Nav from './../components/nav';
import Footer from './../components/footer';
import '../styles/style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Nav />
        <div
          className='row'
          style={{ marginTop: '50px' }}
        >
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
