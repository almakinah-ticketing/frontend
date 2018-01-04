export const rootApi = 'http://localhost:3000';
export const categoriesApi = `${rootApi}/categories`;
// export const hotestEventApi = `${rootApi}/hot/event`;
export const ticketTypesApi = (eventId) => `${rootApi}/event/${eventId}/types`;
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
  } else {
    route = `${rootApi}/events`;
  }
  return route;
}
export const eventApi = (eventId) => `${rootApi}/events/${eventId}`;


export const postEventApi = `${rootApi}/events`;

// export const eventsApi = (categoryId) => `${rootApi}/${(categoryId && categoryId !== '0') ? 'categories/' + categoryId : 'events'}`;
// export const categoryEventsApi = (categoryId) => `${rootApi}/categories/${categoryId}`;
// export const hotestEventApi = `${rootApi}/events/hottest`;
