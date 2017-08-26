import { } from './LoginForm';
import React, { Component, PropTypes } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import LoginFormComponent from "../../components/login/LoginFormComponent";
import { ILoginFormState } from "../../redux/loginform/model";
import * as LoginActions from '../../redux/loginform/actions';

export namespace LoginForm {
  export interface Props {
    user: string,
    onRedirect: () => any,
    loginform: ILoginFormState,
    router: any,
    dispatch: Dispatch<{}>
  };
  export interface State {
    /* empty */
  };
}

class LoginFormContainer extends Component<LoginForm.Props, LoginForm.State> {

  constructor(props: LoginForm.Props, context: any) {
    super(props, context);
  };

  handleLogin() {
    this.context.router.push('/main');
  };

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.redirectTo && nextProps.redirectTo != null) {
      this.context.router.replace(nextProps.redirectTo);
      this.props.onRedirect();
    }
  };

  render() {
    return (
      <div >
        <LoginFormComponent {...this.props} />
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);
  return {
    ...state
  }
};

const mapDispatchToProps = (dispatch: Dispatch<{}>) => {
  return {
    handleSignIn: (values: Array<any>) => dispatch(LoginActions.requestLoginDetails(values))
  }
};

export default connect(mapStateToProps)(LoginFormContainer);
