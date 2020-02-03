'use strict';
const path = require('path');


module.exports = appInfo => {
  const config = {
    keys: appInfo.name + '#egg-nuxt-engine',
    core: 'egg-nuxt-engine',
    nuxt: {
      srcDir: path.join(appInfo.baseDir, './resources'),
      rootDir: path.join(appInfo.baseDir),
    },
    security: {
      ignoreJson: true,
    },
  };
  return config;
};
