import { Dispatch } from 'redux';
import React, { Component, PropTypes } from 'react';
import { Field, reduxForm, InjectedFormProps } from 'redux-form';
import Loader from 'react-loader';

//import { Image } from 'material-ui-image'
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Subheader from 'material-ui/Subheader';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Divider from 'material-ui/Divider';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

import RenderTextField from '../common/RenderTextField';
import RenderCheckboxField from '../common/RenderCheckboxField';
import RenderLogo from '../common/RenderLogo';
import Icon from '../../constants/Icons';
import { palette } from '../../constants/styles';
import validate from './LoginFormValidate';
import * as LoginActions from '../../redux/loginform/actions';

export namespace LoginFormComponent {
  export type Props = {
    dispatch: Dispatch<{}>,
    loginLoader: boolean,
    router: any,
    loginSuccess: boolean,
    handleSubmit?: any
    pristine?: boolean,
    reset?: boolean,
    submitting?: boolean,
    valid?: boolean,
    handleSignIn?: (values: Array<string>) => any
  } & InjectedFormProps

  export interface State {
    rememberMe: boolean,
    open: boolean
  }
}

class LoginFormComponent extends React.Component<LoginFormComponent.Props , LoginFormComponent.State> {
  
//class LoginFormComponent extends Component<LoginFormComponent1.Props, LoginFormComponent1.State> {

  constructor(props: LoginFormComponent.Props, context: any) {
    super(props, context);
    this.state = {
      rememberMe: true,
      open: false
    };
    this.redirectSignUp = this.redirectSignUp.bind(this);
    this.redirectForgotpassword = this.redirectForgotpassword.bind(this);
  }

  redirectSignUp() {
    this.props.router.push('/register');
  }

  redirectForgotpassword() {
    this.props.router.push('/forgotpassword');
  }

  static handleSubmit1(values: any) {
    
  };

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props;
    return (
      <form noValidate autoComplete='off'>

        <div className="row around-xs" style={{ height: '100vh', backgroundColor: '#009688' }}>
          <div className="card-align col-xs-12 col-sm-9 col-md-6 col-lg-6">
            <RenderLogo color='#FFF' />
            <Card className="card-container">
              <CardHeader title="Sign in" className='card-title' />
              <CardText >
                <RenderTextField name='email' label='Email or Mobile' type='text' />
                <RenderTextField name='password' label='Password' type='password' />
              </CardText>
              <CardActions >
                <RaisedButton
                  label="Sign In"
                  disabled={pristine || submitting || !valid}
                  onClick={handleSubmit(loginSubmit)}
                  fullWidth={true}
                  secondary={true}
                />

                <div className="link-item" style={{ marginLeft: "-16px" }} >
                  <FlatButton
                    label="Forgot password?"
                    secondary={true}
                    onClick={this.redirectForgotpassword}
                    style={{ fontSize: '80%' }} />
                </div>
                <div className="row middle-xs" style={{ marginRight: -8, marginLeft: -8, fontSize: "80%" }}>
                  <div className=" col-xs-6 col-sm-4">
                    New to Right Invoices?
                  </div>
                  <div className=" col-xs-6 col-sm-8 ">
                    <RaisedButton
                      label="Sign Up"
                      onClick={this.redirectSignUp}
                      fullWidth={true}
                      secondary={true} />
                  </div>
                </div>
              </CardActions>
            </Card>
          </div>

        </div>
      </form>
    )
  }
}

function loginSubmit(values: any, dispatch: Dispatch<{}>, props: LoginFormComponent.Props) {
  dispatch(LoginActions.requestLoginDetails(values));
  //dispatch(props.handleSignIn(values));
}

export default reduxForm({
  form: 'LoginFormComponent',
  validate,
  loginSubmit
})(LoginFormComponent);