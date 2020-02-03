'use strict';

module.exports = appInfo => {
  console.log(appInfo);

  return {
    keys: '123456',
    nuxt: require('./config.nuxt'),
  };
};
