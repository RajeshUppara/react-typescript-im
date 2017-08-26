import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Checkbox from 'material-ui/Checkbox';
import { palette } from '../../constants/styles';

export namespace RenderCheckboxField {
    export interface Props {
        name: string,
        label: string
    }
    export type metaData = { touched: boolean, error: string };
    export interface CheckboxFieldProps {
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

export default class RenderCheckboxField extends React.Component<RenderCheckboxField.Props, {}> {

    constructor(props: RenderCheckboxField.Props) {
        super(props);
        this.renderCheckbox = this.renderCheckbox.bind(this);
    }

    renderCheckbox(data: RenderCheckboxField.CheckboxFieldProps) {
        return (
            <Checkbox
                label={data.label}
                style={{ marginLeft: 5, top: 16 }}
            />
        )
    }

    render() {
        return (
            <div>
                <Field name={this.props.name} label={this.props.label} component={this.renderCheckbox} />
            </div>
        );
    }
}