import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import LoginFormComponent from "../../components/login/LoginFormComponent";

class LoginForm extends Component<any, any> {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  constructor(props: any, context: any) {
    super(props, context);  
  }

  handleLogin() {
    this.context.router.push('/main');
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.redirectTo && nextProps.redirectTo != null) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  }

  render() {
    return (
      <div >
        <LoginFormComponent
          dispatch={this.props.dispatch}
          loginLoader={this.props.loginform.loading}
          router={this.props.router}
          loginSuccess={this.props.loginform.loginSuccess}
        />
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
