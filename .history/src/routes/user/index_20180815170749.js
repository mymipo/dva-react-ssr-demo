import React from 'react';
import { connect } from 'dva';

class User extends React.Component {
  render() {
    return(
      <div>User</div>
    )
  }

  componentDidMount() {

  }
}

export default connect()(User);
