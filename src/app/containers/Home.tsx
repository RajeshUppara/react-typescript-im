import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
    return (
      <div>
        <div> Home Page </div>
        <Link  to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </div>
    )}
}


const mapStateToProps = (state: any) => {
  return {
    ...state
  }
};

export default connect(mapStateToProps)(Home);