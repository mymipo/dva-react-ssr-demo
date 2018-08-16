import React from 'react';
import { Link } from 'dva/router';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const App = ({ children }) => {
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
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/user">User</Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}

export default App;
