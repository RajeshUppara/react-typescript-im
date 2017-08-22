import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { palette } from '../../constants/styles';
import Icon from '../../constants/Icons';

export default class RenderLogo extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="row">
          <div style={{marginLeft: -50, marginTop: -48}}>
            <Icon icon='logo-icon-text'  width={500} height='70' color={this.props.color} />
          </div>
        </div>
    );
  }
}