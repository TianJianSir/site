import React from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';

import '../../App.css';

function Main() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Link to='/rule'>发布平台</Link>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            前端发布平台
          </a>
        </header>
      </div>
    );
  }
  
  export default Main;