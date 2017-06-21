const request = require('request');

exports.index = (req, res) => {
  res.render('search/search');
};

exports.list = (req, res) => {
  const URI = `https://www.instagram.com/${req.query.user}/media/`;

  console.log(`requesting [${URI}]`);
  request(URI, (error, response, body) => {
    if (response.statusCode === 200) {
      const bodyData = JSON.parse(body);

      bodyData.userAccount = req.query.user;

      console.log('success getting the media list');
      res.render('search/report', bodyData);
    } else {
      console.log(`!!!ERROR...status [${JSON.stringify(response.statusCode)}]...response [${JSON.stringify(response)}]`);
      res.status(500).send(`Error [${error}].`);
    }
  });
};
