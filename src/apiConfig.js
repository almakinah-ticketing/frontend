export const rootApi = 'http://localhost:3000';

export const categoriesApi = `${rootApi}/categories`;
export const eventsApi = (categoryId) => `${rootApi}/${(categoryId && categoryId !== 0) ? 'categories/' + categoryId : 'events'}`;
export const hotestEventApi = 'http://localhost:3002/hotestEvent';
// export const categoryEventsApi = (categoryId) => `${rootApi}/categories/${categoryId}`;
