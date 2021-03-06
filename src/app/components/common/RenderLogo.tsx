import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { palette } from '../../constants/styles';
import Icon from '../../constants/Icons';

export namespace RenderLogo {
  export interface Props {
    color: string
  }
}

export default class RenderLogo extends React.Component<RenderLogo.Props, {}> {

  constructor(props: RenderLogo.Props) {
    super(props);
  }

  render() {
    return (
        <div className="row">
          <div style={{marginLeft: -16}}>
            <Icon icon='logo-icon' width={70} height={70} color={this.props.color} />
          </div>
        </div>
    );
  }
}