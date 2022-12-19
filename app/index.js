import express, { json, urlencoded } from 'express';
import cors from 'cors';

import { sync } from './util/database';
import User from './models/anzeigen';

const app = express();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: true}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','PUT','DELETE');
  next();
})


app.use('/inserate', require('./routes/anzeigen'));

(async () =>{
  try {
    await sync(
      {force: false}
    );
    console.log("test");
    app.listen(process.env.EXTERNAL_PORT || 6969);
  } catch (error) {
    console.error(error);
  }
})()