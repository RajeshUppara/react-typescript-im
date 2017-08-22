import React, { Component, PropTypes } from 'react';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class LoginForm extends Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props: any) {
    super(props);  
  }

  render() {
    return (
      <div >
        <div>Loggedin</div>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(LoginForm);
