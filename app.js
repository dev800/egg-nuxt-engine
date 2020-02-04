'use strict';

module.exports = app => {
  app.config.coreMiddleware.unshift('errorHandler');
  app.config.coreMiddleware.unshift('nuxtrender');

  app.beforeStart(async () => {
    try {
      setTimeout(async () => {
        await app.nuxtBuild.build();

        if (!app.config.nuxt.dev) {
          console.log('[nuxt] Building done'); // eslint-disable-line no-console
        }
      }, 800)

    } catch (error) {
      console.log('[nuxt] Building error', error); // eslint-disable-line no-console
      process.exit(1);
    }
  });
};
