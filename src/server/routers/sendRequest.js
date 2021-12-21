import React from 'react';
import serialize from 'serialize-javascript';
const express = require('express');
import nodemailer from 'nodemailer';
const router = express.Router();

router.post('/', (req, res, next) => {

  const output = `
<p> Данные о партнере </p>
<ul>
  <li> Name: ${req.body.name} </li>
  <li> Purpose: ${req.body.purpose} </li>
  <li> Number: ${req.body.phone_number} </li>
  <li> Email: ${req.body.email} </li>
</ul>
  `;
async function main() {
  let transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'project1@acorn.ws', // generated ethereal user
        pass: 'qwertyuiop987654321' // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false  // только для localhost
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Order from site" <project1@acorn.ws>', // sender address
      to: "belysevartem9@gmail.com", // list of receivers
      subject: "New partner ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
  return res.redirect('/');
});

router.post('/participant', (req, res, next) => {

  const output = `
<p> Данные о партнере </p>
<ul>
  <li> Name: ${req.body.name} </li>
  <li> Purpose: ${req.body.purpose} </li>
  <li> Number: ${req.body.phone_number} </li>
</ul>
  `;
async function main() {
  let transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'project1@acorn.ws', // generated ethereal user
        pass: 'qwertyuiop987654321' // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false  // только для localhost
      }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Order from site" <project1@acorn.ws>', // sender address
      to: "belysevartem9@gmail.com", // list of receivers
      subject: "New partner ✔", // Subject line
      text: "Hello world?", // plain text body
      html: output // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }

  main().catch(console.error);
  return res.redirect('/');
});

export default router;
