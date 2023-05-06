const cookieSession = require('cookie-session');
const express = require('express');
const authRouter = require('./routes/auth');

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(
  cookieSession({
    name: 'user',
    keys: ['key1', 'Key2'],
  })
);

app.set('view engine', 'ejs');

app.use('/auth', authRouter);

app.listen(8080, () => console.log('server running'));
