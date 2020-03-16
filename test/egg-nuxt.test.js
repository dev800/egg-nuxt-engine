'use strict';

const mock = require('egg-mock');

describe('test/egg-nuxt-engine.test.js', () => {
  let app;

  before(() => {
    app = mock.app({
      baseDir: 'apps/egg-nuxt-engine-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, egg nuxt')
      .expect(200);
  });
});
