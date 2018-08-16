import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import styles from './index.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div>
        link
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
