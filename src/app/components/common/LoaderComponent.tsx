import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import * as CommonAction from "../../redux/common/actions";

export default class LoaderComponent extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
    };
   // this.props.dispatch(CommonAction.showLoader(true));
  }

  componentWillReceiveProps(nextProps: any) {
      this.setState({
        show: nextProps.show,
      });
  }

  render() {
    return (
      <div style={{ display : (this.props.show ? 'block': 'none') }}> 
          <div style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#ccc'
          }}>       
            <CircularProgress size={40} thickness={5} />
          </div>
      </div>
    );
  }
}