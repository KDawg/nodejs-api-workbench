const search = require('./search/controller.js');

exports.setup = (app) => {
  search.setup(app);

  app.use((req, res) => {
    // generically handling a request that falls-through all others above is a simple 404 response
    res.status(404).send('Sorry can\'t find that!');
  });
};
