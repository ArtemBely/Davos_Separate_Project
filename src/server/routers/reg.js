import React from 'react';
import express from 'express';
import nodemailer from 'nodemailer';
import serialize from 'serialize-javascript';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import Reg from '../../components/Reg';
import Email from '../models/emails.js';

const router = express.Router();

router.get('/', (req, res) => {
  let cond = req.isAuthenticated();
  const congrats = renderToString(
    <StaticRouter>
       <Reg />
    </StaticRouter>
  )
  res.send(
    `<!DOCTYPE html>
        <html>
            <head>
              <title>Registration</title>
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

router.post('/send_request_to_participate', (req, res, next) => {

  var { email } = req.body;
  req.checkBody("email", "Wrong type of email field").isEmail();
  var errors = req.validationErrors();

  if(errors) {
    console.log(errors);
    var err = errors.map(er => er.msg);
    const congrats = renderToString(
      <StaticRouter>
         <Reg />
      </StaticRouter>
    )
    res.send(
      `<!DOCTYPE html>
          <html>
              <head>
                <title>Проверка кода</title>
                     <link rel="stylesheet" type="text/css" href="main.css">
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                         <script src='bundles/bundle.js' defer></script>
                         <script>window.__INITIAL_DATA__= ${serialize(err)}</script>
                         </head>
                       <body>
                     <div id="app">
                   ${congrats}
                </div>
              </body>
          </html>`
      );
  }


  var newEmail = new Email({
        email: email
   });
   console.log(newEmail);

   newEmail = newEmail.save();

   const output = `
   <h3> You have successfully registered. </h3>
   `;
   async function main() {
     let transporter = nodemailer.createTransport({
         host: "smtp.yandex.ru",
         port: 465,
         secure: true, // true for 465, false for other ports
         auth: {
           user: 'ww4@acorn.ws', // generated ethereal user
           pass: 'AlegroAria' // generated ethereal password
         },
         tls:{
           rejectUnauthorized:false  // только для localhost
         }
       });

       // send mail with defined transport object
       let info = await transporter.sendMail({
         from: '"Message from site emtechinvest" <ww4@acorn.ws>', // sender address
         to: `${req.body.email}`, // list of receivers
         subject: "New message ✔", // Subject line
         text: "Hello", // plain text body
         html: output // html body
       });

       console.log("Message sent: %s", info.messageId);
       console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   }

   main().catch(console.error);
   return res.redirect('/');

});

export default router;
