import React, { Component, PropTypes } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import ReactTimeLine from '../../components/reacttimeline/ReactTimeline';

class ReactTimeLineContainer extends Component<any, any> {

  constructor(props: any, context: any) {
    super(props, context);  
  }

  render() {
    return (
      <div>
        <ReactTimeLine />
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

export default connect(mapStateToProps)(ReactTimeLineContainer);
