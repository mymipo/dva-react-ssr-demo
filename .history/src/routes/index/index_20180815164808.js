import React from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Layout, Menu, Breadcrumb } from 'antd';

import styles from './index.css';

const { Header, Content, Footer } = Layout;

function IndexPage() {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div>
        <Link to="/user">user</Link>
      </div>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
