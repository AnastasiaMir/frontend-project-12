const pathToApi = '/api/v1';

const routes = {
  notFoundPage: () => '*',
  mainPage: () => '/',
  signIn: () => [pathToApi, 'login'].join('/'),
  signUp: () => [pathToApi, 'signup'].join('/'),
  channelsPath: () => [pathToApi, 'channels'].join('/'),
  channelPath: (id) => [pathToApi, 'channels', id].join('/'),
  messagesPath: () => [pathToApi, 'messages'].join('/'),
  messagePath: (id) => [pathToApi, 'messages', id].join('/'),
};

export default routes;
