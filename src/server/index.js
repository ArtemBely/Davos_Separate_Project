import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import App from '../components/App';
import Main from '../components/Main';
import NoMatch from '../components/NoMatch';
import Routes from '../components/routes';
import express from 'express';
import { renderToString } from 'react-dom/server';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import serialize from 'serialize-javascript';
import validator from 'express-validator';
import session from 'express-session';
import mongoose from 'mongoose';
import passport from 'passport';
import flash from 'connect-flash';
import fs from 'fs';
import path from 'path';
import http from 'http';
import https from 'https';

import sendRouter from './routers/sendRequest';

const app = express();
//const CONNECTION_URI = process.env.MONGODB_URI;
//const port = process.env.PORT || 5000;

var privateKey = fs.readFileSync(path.resolve('src/server/ssl/emtechinvest.key'));
var certificate = fs.readFileSync(path.resolve('src/server/ssl/emtechinvest.pem'));

var credentials = {
  key: privateKey,
  cert: certificate
}

require('dotenv/config');

/*
mongoose.connect(
  CONNECTION_URI || process.env.CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  },
  () => {
    console.log('Connection with database Users completed');
  }
);
*/
/*
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


client.messages.create({
  to: '+420775650705',
  from: '+447588664528',
  body: 'Забей калик ежжи!'
}).then((message) => console.log(message.sid));
*/

app.use(function(req, res, next) {
  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
  res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
  res.setHeader("Expires", "0");
  //res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }));
app.use(validator());
app.use(cookieParser());
app.use(session({
  secret: 'mysecret',
  resave: false,
  saveUnitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use('/sendRequest', sendRouter);

app.get('/robots.txt', (req, res) => {
  const resolvePath = path.resolve('public/robots.txt');
  res.sendFile(resolvePath);
});

app.get('/sitemap.xml', (req, res) => {
  const resolvePath2 = path.resolve('public/sitemap.xml');
  res.sendFile(resolvePath2);
});

app.get(['/', '/sendRequest'], (req, res, next) => {
  const activeRouter = Routes.find((route) => matchPath(req.url, route)) || {};
  const promise = activeRouter.fetchInitialData ?
                  activeRouter.fetchInitialData(req.path) :
                  Promise.resolve()
  promise.then(data => {
    const context = { data };
    const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
           <App data={data} />
        </StaticRouter>
      )

      const html =
        `<!DOCTYPE html>
            <html>
                <head>
                  <title>International EmTech Investment Forum in Davos</title>
                  <meta name="description" content="The International EmTech Investment Forum in Davos combines top networking, high tech shows and impact investment deal flow">
                  <link rel="stylesheet" type="text/css" href="../main.css">
                  <link rel="shortcut icon" href="/images/Subtract (1).ico" type="image/x-icon">
                  <link rel="canonical" href="https://emtechinvest.com/">
                    <meta name="viewport" content="width=device-width, initial-scale=1">

                    <meta property="og:url" content="https://emtechinvest.com/">
                    <meta property="og:type" content="website">
                    <meta property="og:title" content="International EmTech Investment Forum in Davos">
                    <meta property="og:description" content="The International EmTech Investment Forum in Davos combines top networking, high tech shows and impact investment deal flow">
                    <meta property="og:image" content="https://emtechinvest.com/images/Group 300.svg">

                    <!-- Twitter Meta Tags -->
                    <meta name="twitter:card" content="summary_large_image">
                    <meta property="twitter:domain" content="emtechinvest.com">
                    <meta property="twitter:url" content="https://emtechinvest.com/">
                    <meta name="twitter:title" content="International EmTech Investment Forum in Davos">
                    <meta name="twitter:description" content="The International EmTech Investment Forum in Davos combines top networking, high tech shows and impact investment deal flow">
                    <meta name="twitter:image" content="https://emtechinvest.com/images/Group 300.svg">

                      <script src='bundles//bundle.js' defer></script>
                        <script>window.__INITIAL_DATA__= ${serialize(data)}</script>

                          <!-- Global site tag (gtag.js) - Google Analytics -->
                          <script async src="https://www.googletagmanager.com/gtag/js?id=G-N6XLQ0TJ9H"></script>
                          <script>
                          setTimeout(() => {
                              window.dataLayer = window.dataLayer || [];
                              function gtag(){dataLayer.push(arguments);}
                              gtag('js', new Date());

                              gtag('config', 'G-N6XLQ0TJ9H');
                            }, 10000)
                            </script>

                          </head>
                        <body>
                       <div id="app">
                     ${markup}
                  </div>
                </body>
            </html>`;

        return res.send(html);
  }).catch(next)
});

app.get('/*', (req, res) => {
  const content = renderToString(
    <StaticRouter>
      <NoMatch />
    </StaticRouter>
  );
  res.status(404).send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>International EmTech Investment Association</title>
                   <link rel="stylesheet" type="text/css" href="../main.css">
                     <link rel="shortcut icon" href="/images/Vector.ico" type="image/x-icon">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                  <script src='/bundle.js' defer></script>
            </head>
            <body>
                 <div id="app">
                    <div className='main_wrap'>
                       ${content}
                  </div>
            </div>
      </body>
  </html>`
  )
});
/*
app.use((error, req, res, next) => {
  res.status(error.status);

    res.json({
    status: error.status,
    message: error.message,
    stack: error.stack
  });
});
*/
app.use((req, res, next) => {  //<-- заменить если появится непредвиденная ошибка
   const err = new Error ('Noooo');
     err.status = 404;
     next (err);
});


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => {console.log('connected on http!')});
httpsServer.listen(443, () => {console.log('connected on https!')});
