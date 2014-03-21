// modules
var express = require('express')
  , app = express()
  , webshot = require('webshot')
;


// configure webshot
var webshotOptions = {
  screenSize: {
    width: 750,
    height: 100
  },
  shotSize: {
    width: 750,
    height: 'all'
  },
  siteType:'html',
  streamType: 'jpg'
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
var server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port);
});
