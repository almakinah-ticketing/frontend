export const rootApi = 'http://localhost:3000';

export const categoriesApi = `${rootApi}/categories`;
// export const hotestEventApi = `${rootApi}/hot/event`;
export const ticketTypesApi = (eventId) => `${rootApi}/events/${eventId}/types`;
// export const eventsApi = (categoryId) => `${rootApi}/${(categoryId && categoryId !== '0') ? 'categories/' + categoryId : 'events'}`;
// export const categoryEventsApi = (categoryId) => `${rootApi}/categories/${categoryId}`;
export const eventsApi = function (params) {
  var route;
  if (params.categoryId && params.categoryId !== '0' && params.date) {
    route = `${rootApi}/events?event_date=${params.date}&category_id=${params.categoryId}`;
  } else if (params.categoryId && params.categoryId !== '0') {
    route = `${rootApi}/events?category_id=${params.categoryId}`;
  } else if (params.date) {
    route = `${rootApi}/events?event_date=${params.date}`;
  } else if (params.title) {
    route = `${rootApi}/events?title=${params.title}`;
  } else if (params.popularity) {
    route = `${rootApi}/events?popularity=${params.popularity}`;
  } else {
    route = `${rootApi}/events`;
  }
  return route;
}
export const postEventApi = `${rootApi}/events`;
export const eventApi = (eventId) => `${rootApi}/events/${eventId}`;
export const attendeesApi = `${rootApi}/attendees`;
export const adminsApi = `${rootApi}/admins`;
export const adminInvitationApi = `${rootApi}/admin/invitations`;
export const adminActivitiesApi = `${rootApi}/admin_activities`;
export const loginsApi = (userType) => `${rootApi}/${userType}/logins`;
// export const currentUserApi = (userType, userId) => `${rootApi}/${userType}/${userId}`;;
export const addTypes = (eventId) => `${rootApi}/events/${eventId}/types`;
export const updateAdminApi = (adminId) =>  `${rootApi}/admins/${adminId}/registration`;
export const getInvitedAdminApi = (invitationToken) =>  `${rootApi}/admins/registration/${invitationToken}`; 
// /admins/:admin_id/registrations/:invitation_token
export const buyApi = `${rootApi}/buy?`;
export const stripeApi = `${rootApi}/charges`;
export const historyApi = `${rootApi}/history`;
export const refundApi = (token) => `${rootApi}/refund?charge=${token}`;
export const calendarApi = `${rootApi}/calendar`;
// export const eventsApi = (categoryId) => `${rootApi}/${(categoryId && categoryId !== '0') ? 'categories/' + categoryId : 'events'}`;
// export const categoryEventsApi = (categoryId) => `${rootApi}/categories/${categoryId}`;
// export const hotestEventApi = `${rootApi}/events/hottest`;
