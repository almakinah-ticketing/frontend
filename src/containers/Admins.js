import { connect } from 'react-redux';
import history from '../history';
import { withLastLocation } from 'react-router-last-location';
import InviteAdminFormComponent from '../pages/InviteAdminForm';
import AdminRegistrationComponent from '../pages/AdminRegistration';
import {
  postNewAdminLoading, postNewAdmin, postNewAdminSuccess, postNewAdminFailure,
  updateAdminLoading, updateAdmin, updateAdminSuccess, updateAdminFailure,
  getAdminLoading, getAdmin, getAdminSuccess, getAdminFailure
} from '../actions/admins';
import { handleNewSearchInput } from '../actions/events';

const mapStateToProps = (store) => {
  return {
    admin: store.admins.admin,
    loading: store.admins.loading,
    error: store.admins.error
  }
}

const mapDispatchToProps = (dispatch) => {
	return {
		// Add Admin


    postNewAdmin: (admin) => {
      dispatch(postNewAdminLoading());
      dispatch(postNewAdmin(admin)).then((response) => {
      	// debugger;
        // const id = response.payload.data.id;
        if (response.payload.status < 400) {
          dispatch(postNewAdminSuccess(response.payload.data));
          history.push('/admin/dashboard');
        } else {
          dispatch(postNewAdminFailure(response.payload.response.data));
        };
      });
    },

    // Update Admin

     updateAdmin: (adminId, updates) => {
	      dispatch(updateAdminLoading());
	      dispatch(updateAdmin(adminId, updates)).then(response => {
          	 if (response.payload.status < 400) {
	          dispatch(updateAdminSuccess(response.payload.data));
            history.push('/admin/login')
	        } else {
	          dispatch(updateAdminFailure(response.payload.response.data));
	        }
     	  });
      },

    //  Get Admin
      getAdmin: (invitationToken) => {
        dispatch(getAdminLoading());
        dispatch(getAdmin(invitationToken)).then((response) => {
          if (response.payload.status < 400) {
            dispatch(getAdminSuccess(response.payload.data));
          } else {
            dispatch(getAdminFailure(response.payload.response.data));
          }
        });
      },
      handleNewSearchInput: (searchInput) => {
      dispatch(handleNewSearchInput(searchInput));
    }
  }
}

export const InviteAdminForm = connect(mapStateToProps, mapDispatchToProps)(InviteAdminFormComponent);
export const AdminRegistration = connect(mapStateToProps, mapDispatchToProps)(AdminRegistrationComponent);