export const rootApi = 'http://localhost:3000';

export const categoriesApi = `${rootApi}/categories`;
// export const eventsApi = (categoryId) => `${rootApi}/${(categoryId && categoryId !== '0') ? 'categories/' + categoryId : 'events'}`;
// export const categoryEventsApi = (categoryId) => `${rootApi}/categories/${categoryId}`;
export const eventsApi = function (categoryId, date) {
  var route;
  if (categoryId && categoryId !== '0' && date) {
    route = `${rootApi}/filter/events?event_date=${date}&category_id=${categoryId}`;
  } else if (categoryId && categoryId !== 0) {
    route = `${rootApi}/categories/${categoryId}`;
  } else if (date) {
    route = `${rootApi}/find/events?event_date=${date}`;
  } else {
    route = `${rootApi}/events`;
  }
  return route;
}
export const eventApi = (eventId) => `${rootApi}/events/${eventId}`;
export const hotestEventApi = 'http://localhost:3002/hotestEvent';
