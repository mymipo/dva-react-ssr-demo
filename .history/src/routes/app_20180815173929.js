import React from 'react';
import { Link, withRouter } from 'dva/router';
import { Layout, Menu } from 'antd';

const { Header, Content } = Layout;

const App = ({ children, location }) => {
  const defaultKey = location.pathname === '/user' ? ['2'] : ['1'];

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={defaultKey}
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
      <Content>
        <div style={{ background: '#fff', padding: 100, minHeight: 280 }}>
          {children}
        </div>
      </Content>
    </Layout>
  )
}

export default withRouter(App);
