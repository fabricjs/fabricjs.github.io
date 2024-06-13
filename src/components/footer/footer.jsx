import React from 'react';
import './footer.css';
import github from '../../images/github.svg';
import logo from '../../images/fabricjs-logo.png';

export default function Footer() {
  return (
    <footer>
      <div class="main">
        <div class="text">
          Thank you for visiting our website! Check out more:
        </div>
        <div class="links">
          <div class="icons">
            <a href="https://github.com/fabricjs/fabric.js/" class="link">
              <img alt="github icon" src={github} />
            </a>
          </div>
          <div class="icons">
            <a href="https://github.com/fabricjs/fabric.js/" class="link">
              <img alt="github icon" src={github} />
            </a>
          </div>
          <div class="icons">
            <a href="https://github.com/fabricjs/fabric.js/" class="link">
              <img alt="github icon" src={github} />
            </a>
          </div>
        </div>
      </div>
      <div class="more">
        <div class="tab">
          <img alt="FabricJS logo" src={logo} /> <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div class="tab" id="second">
          <h5>Useful Links</h5>
          <p>
            <a href="">Lorem</a>
            <br></br>
            <a href="">Ipsum</a>
            <br></br>
            <a href="">Dolor</a>
            <br></br>
            <a href="">Sit</a>
            <br></br>
            <a href="">Amet</a>
            <br></br>
          </p>
        </div>
        <div class="tab">
          <h5>Contacts</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; Copyright YEAR, FabricJS</p>
      </div>
    </footer>
  );
}
