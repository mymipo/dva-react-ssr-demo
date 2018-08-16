import React from 'react';
import { connect } from 'dva';
import { List, Avatar } from 'antd';

class User extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data)

    if (data) {
      return (
        <List
          itemLayout="horizontal"
          dataSource={data.data}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="https://ant.design">{item.name}</a>}
                description={item.info}}
              />
            </List.Item>
          )}
        />
      )
    }

    return null;
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ 'type': 'user/fetch'});
  }
}

export default connect(({ user }) => ({
  'data': user.data
}))(User);
