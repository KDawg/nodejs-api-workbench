const site = require('./search.js');

exports.setup = (app) => {
  app.get('/', site.index);
  app.get('/search', site.list);
};
