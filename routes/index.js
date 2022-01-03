var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'This is the login-widget title',
    para: 'This is a paragraph',
    baseUrl: 'https://dev-76476905.okta.com',
  });
});

module.exports = router;
