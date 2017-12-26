export const rootApi = 'http://localhost:3000';

export const categoriesApi = `${rootApi}/categories`;
export const eventsApi = `${rootApi}/events`;
export const categoryEventsApi = (categoryId) => `${rootApi}/categories/${categoryId}/events`;
