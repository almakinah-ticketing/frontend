import React, { Component } from 'react';
import { connect } from 'react-redux';
import history from './history';

export const Authorization = (allowedRoles) => {
  return (WrappedComponent) => {
    class WithAuthorization extends Component {
      render() {
        const { isAuthenticated, currentUser } = this.props;
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
            if (isAuthenticated && currentRole === 'admin') {
              history.push('/admin/dashboard');
            } else {
              history.push('/login');
            }
          } else if (allowedRoles[0] === 'admin') {
            if (isAuthenticated && currentRole === 'attendee') {
              history.push('/calendar');
            } else {
              history.push('/admin/login');
            }
          }
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