import React from 'react';
import { connect } from 'dva';

class User extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data)
    return(
      <div>User</div>
    )
  }

  componentDidMount() {
    const { dispatch } = this.props;

    dispatch({ 'type': 'user/fetch'});
  }
}

export default connect(({ user }) => ({
  'data': user.data
}))(User);
