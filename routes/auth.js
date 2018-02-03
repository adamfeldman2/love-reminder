module.exports = (app, bodyParser, passport) => {
  // Body Parser Middleware
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());

  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send({
      message: 'User has been logged out',
      user: req.user
    });
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
