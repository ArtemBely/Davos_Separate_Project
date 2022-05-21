import React from 'react';
import express from 'express';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Hub from '../../components/Hub';

const router = express.Router();

router.get('/', (req, res) => {
  let cond = req.isAuthenticated();
  const congrats = renderToString(
    <StaticRouter>
       <Hub />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Hub</title>
                   <link rel="stylesheet" type="text/css" href="main.css">
                     <meta name="viewport" content="width=device-width, initial-scale=1">
                       <script src='bundles/bundle.js' defer></script>
                       </head>
                     <body>
                   <div id="app">
                 ${congrats}
              </div>
            </body>
        </html>`
    );
});

export default router;
