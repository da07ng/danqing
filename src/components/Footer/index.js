import React, { Component } from 'react';

import styles from './style.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="footer" className={styles.footer}>
        <div className="container">
          <a href="/" className="">
            WuYan
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
