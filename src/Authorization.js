import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from './history';

export const Authorization = (allowedRoles) => {
  return (WrappedComponent) => {
    class WithAuthorization extends Component {
      render() {
        const { currentUser } = this.props;
        console.log(this.props);
        var currentRole;
        var urlStart;
        if (currentUser.attendee_id) {
          currentRole = 'attendee';
        } else if (currentUser.admin_id) {
          currentRole = 'admin';
        }
        if (allowedRoles.includes(currentRole)) {
          return <WrappedComponent {...this.props} />
        } else {
          if (allowedRoles[0] === 'attendee') {
            urlStart = '/';
          } else if (allowedRoles[0] === 'admin') {
            urlStart = '/admin/';
          }
          history.push(`${urlStart}login`);
          return null;
        }
      }
    }
    const mapStateToProps = (store) => {
      return {
        isAuthenticated: store.authentication.isAuthenticated,
        currentUser: store.authentication.currentUser
      }
    };
  return connect(mapStateToProps)(WithAuthorization);
  }
}