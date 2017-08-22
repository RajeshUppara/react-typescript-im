import React from 'react';
import { connect } from 'react-redux';


class Main extends React.Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        ...state
    }
};

export default connect(mapStateToProps)(Main);