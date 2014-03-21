// modules
var express = require('express')
  , app = express()
  , webshot = require('webshot')
;


// configure webshot
var webshotOptions = {
  screenSize: {
    width: 900,
    height: 100
  },
  shotSize: {
    width: 900,
    height: 'all'
  },
  siteType:'html',
  streamType: 'jpg',
  userAgent: 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/535.7 (KHTML, like Gecko) Chrome/16.0.912.75 Safari/535.7',
  customHeaders: { Referer: 'http://imagifier.usefulscience.org' }
}


// configure express
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/public'));


// save base url (http://localhost:3000/, etc) to local variable for use in templates
// since phantom.js requires absolute paths for css and js
app.use(function (req, res, next) {
  res.locals.baseUrl = req.protocol + '://' + req.get('host') + '/';
  next();
});


// index route
app.get('/', function (req, res, next) {
  res.render('index', req.query);
});


// image.html route
app.get('/image.html', function (req, res, next) {
  res.render('image', req.query);
});


// image.jpg route
app.get('/image.jpg', function (req, res, next) {

  // produce image html
  res.render('image', req.query, function (err, html) {
    if (err) return next(err);

    // convert html to jpg
    webshot(html, webshotOptions, function (err, pngStream) {
      if (err) return next(err);

      // send it
      res.setHeader('content-type', 'image/jpeg');
      pngStream.pipe(res);

    });
  });
});


// start server
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log('Listening on port ' + port);
});
