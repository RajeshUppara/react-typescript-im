import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { palette } from '../../constants/styles';

  export namespace RenderTextField {
    export interface Props {
      name: string,
      label: string,
      type: string,
      disabled?: boolean
    }
    export type metaData = { touched: boolean, error: string };
    export interface TextFieldProps {
      touched: boolean,
      input: string,
      label: string,
      type: string,
      disabled: boolean,
      meta: metaData,
      custom: any,
      error: string
    }
  }

export default class RenderTextField extends React.Component<RenderTextField.Props, {}> {
  constructor(props: RenderTextField.Props) {
    super(props);
    this.renderTextField = this.renderTextField.bind(this);
  }

  renderTextField(data: RenderTextField.TextFieldProps) {
    return (
      <TextField
        floatingLabelText={data.label}
        errorText={data.touched && data.error}
        type={data.type}
        {...data.input}
        {...data.custom}
        floatingLabelStyle={{ fontSize: 14, fontWeight: 400 }}
        floatingLabelFocusStyle={{ fontSize: 14 }}
        underlineShow={true}
        style={{ width: '100%', paddingLeft: 0, marginBottom: '2rem' }}
        underlineFocusStyle={{ borderBottomWidth: '2px' }}
        disabled={data.disabled}
      />
    )
  }

  render() {
    return (
      <div style={{ height: 70 }}>
        <Field name={this.props.name}
          label={this.props.label}
          component={this.renderTextField}
          type={this.props.type}
          disabled={this.props.disabled}
        />
      </div>
    );
  }
}