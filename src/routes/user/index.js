import React from 'react';
import { connect } from 'dva';
import { List, Avatar } from 'antd';

class User extends React.Component {
  render() {
    const { data } = this.props;
    if (data) {
      return (
        <List
          itemLayout="horizontal"
          dataSource={data.articles}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.author}</a>}
                description={item.description}
              />
            </List.Item>
          )}
        />
      )
    }

    return null;
  }

  componentDidMount() {
    if (!window.__INITIAL_STATE__) {
      const { dispatch } = this.props;

      dispatch({ 'type': 'user/fetch' });
    }
  }

  componentWillUnmount() {
    if (window.__INITIAL_STATE__) window.__INITIAL_STATE__ = false;
  }
}

export default connect(({ user }) => ({
  'data': user.data
}))(User);
