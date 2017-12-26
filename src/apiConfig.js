export const rootApi = 'http://localhost:3000';

export const categoriesApi = `${rootApi}/categories`;

export const hotestEventApi = 'http://localhost:3002/hotestEvent'
export const eventsApi = `${rootApi}/events`;
export const categoryEventsApi = (categoryId) => `${rootApi}/categories/${categoryId}/events`;
