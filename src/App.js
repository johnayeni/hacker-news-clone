import React from 'react';
import logo from './logo.gif';
import './App.scss';

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav-left">
          <div className="logo">
            <img src={logo} alt="hacker news logo" />
          </div>
          <div className="nav-links">
            <div className="title">
              <h3>Hacker News</h3>
            </div>
            <ul className="links">
              <li>new |</li>
              <li>past |</li>
              <li>comments |</li>
              <li>ask |</li>
              <li>show |</li>
              <li>jobs |</li>
              <li>submit</li>
            </ul>
          </div>
        </div>
        <div className="nav-right">
          <button>login</button>
        </div>
      </nav>
      <div className="news-list">
        <div className="news-list-item">
          <p className="news-list-item__index subtle-text">1</p>
          <button className="news-list-item__upvote-button subtle-text">&#9650;</button>
          <div className="news-list-item__content">
            <div className="news-list-item__content__header">
              <h3>Hello world</h3>
              <span className="subtle-text">(main man)</span>
            </div>
            <div className="news-list-item__content__sub-header subtle-text">
              <p>84 points |</p>
              <p>hide |</p>
              <p>128 comments</p>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <h3>Registration is open for Startup School 2019. Classes start July 22nd.</h3>
        <ul>
          <li>Guidelines |</li>
          <li>FAQ |</li>
          <li>Support |</li>
          <li>API |</li>
          <li>Security |</li>
          <li>Lists |</li>
          <li>Bookmarklet |</li>
          <li>Legal |</li>
          <li>Apply to YC |</li>
          <li>Contact</li>
        </ul>
        <div className="search-bar">
          <label for="search" className="subtle-text">
            Search :
          </label>
          <input type="text" name="search" />
        </div>
      </footer>
    </div>
  );
}

export default App;
