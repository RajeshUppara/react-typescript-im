import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';

import RenderTextField from '../common/RenderTextField';
import RenderSelectField from '../common/RenderSelectField';
import RenderLogo from '../common/RenderLogo';
import RenderLogoText from '../common/RenderLogoText';
import RenderDropdownTextField from '../common/RenderDropdownTextField';
import { palette } from '../../constants/styles';
import { addressDetailsValidate } from './RegisterAccountValidate';
import * as RegisterAction from "../../redux/register/actions";
import { addressDetailsValidate as validate } from './RegisterAccountValidate';

class RegisterAccountAddressDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      stepIndex: 1,
    };
    this.onBackClick = this.onBackClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.initialize(this.props.register);
  }

  onBackClick(values, dispatch) {
    console.log("City " + values['city']);
    dispatch(RegisterAction.registerAddressDetails(values));
    dispatch(RegisterAction.setRegisterAccountState('contactDetails'));
  }

  render() {
    const { handleSubmit, pristine, reset, submitting, valid } = this.props;
    const cities = ['Select City', 'Hyderabad', 'Vizag'];
    //const states = ['Andhra Pradesh', 'Telangana'];
    const states = [
      {
        id: 'ap',
        name: 'Andhra Pradesh'
      },
      {
        id: 'ts',
        name: 'Telangana'
      }
    ];
    return (
      <form onSubmit={handleSubmit(onNextClick)} noValidate autoComplete='off'>
        <div className="row ">
          <div className="card-align-md">
           <h1 style={{fontWeight: 400}}>Welcome to <RenderLogoText color='#009688' /></h1>
            <Stepper activeStep={this.state.stepIndex}>
              <Step>
                <StepLabel>Contact Details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Address</StepLabel>
              </Step>
              <Step>
                <StepLabel>Business Details</StepLabel>
              </Step>
            </Stepper>
            <div className='card-container'>

              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <RenderTextField name='addressline' label='Address Line #1' type='text' />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <RenderTextField name='street' label='Street' type='text' />
                </div>
              </div>
              <div className="row">
                {/*<div className="col-xs-12 col-sm-6">
                  <RenderTextField name='area' label='Area' type='text' />
                </div>*/}
                <div className="col-xs-12 col-sm-6">
                  <RenderTextField name='city' label='City' type='text' />
                </div>
                <div className="col-xs-12 col-sm-6">
                  <RenderSelectField name='state' label='State' menuItems={states} />
                </div>
              </div>
              <div className="row">
 
                <div className="col-xs-12 col-sm-6">
                  <RenderTextField name='postalcode' label='Postal Code' type='text' />
                </div>
              </div>

            </div>

          <div className="row">
              <div className="card-action col-xs-offset-9 col-xs-3">
                <FlatButton
                  label="Back"
                  secondary={true}
                  style={{ fontSize: '80%' }}
                  onClick={handleSubmit(this.onBackClick)}
                />
                <RaisedButton
                  label="Next"
                  type='submit'
                  secondary={true}
                />
              </div>
            </div>

          </div>



        </div>



      </form>
    )
  }
}

function onNextClick(values, dispatch) {
  dispatch(RegisterAction.registerAddressDetails(values));
  dispatch(RegisterAction.setRegisterAccountState('businessDetails'));
}

export default RegisterAccountAddressDetails = reduxForm({
  form: 'RegisterAccountAddressDetails',
  validate,
  onNextClick
})(RegisterAccountAddressDetails);