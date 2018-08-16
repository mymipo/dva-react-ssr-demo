import React from 'react';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

function IndexPage() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">index</Menu.Item>
          <Menu.Item key="2">user</Menu.Item>
        </Menu>
      </Header>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
