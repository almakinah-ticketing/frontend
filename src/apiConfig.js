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
  } else if (params.popularity) {
    route = `${rootApi}/events?popularity=${params.popularity}`;
  } else {
    route = `${rootApi}/events`;
  }
  return route;
}
export const eventApi = (eventId) => `${rootApi}/events/${eventId}`;
export const attendeesApi = `${rootApi}/attendees`;
export const adminsApi = `${rootApi}/admins`;
export const loginsApi = (userType) => `${rootApi}/${userType}/logins`;
// export const currentUserApi = (userType, userId) => `${rootApi}/${userType}/${userId}`;

export const postEventApi = `${rootApi}/events`;

// export const eventsApi = (categoryId) => `${rootApi}/${(categoryId && categoryId !== '0') ? 'categories/' + categoryId : 'events'}`;
// export const categoryEventsApi = (categoryId) => `${rootApi}/categories/${categoryId}`;
// export const hotestEventApi = `${rootApi}/events/hottest`;
