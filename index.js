'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Increase the limit
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

require('dotenv').config();
const PORT = process.env.PORT || 3002;
const cors = require('cors');
const error  = require('./src/middleware/error');
const mongooseConnect = require('./database');
const notFound = require('./src/middleware/notFound404');
const productRouter = require('./src/routes/productRoutes');
const userRouter = require('./src/routes/userRoutes');
const baseRouter = require('./src/routes/baseRoutes');
app.use(express.json());
app.use(cors());
app.use(baseRouter);
app.use('/product', productRouter); 
app.use('/user', userRouter);
app.use(notFound);
mongooseConnect().catch((err) => console.error(err));
app.use(error);

app.listen(PORT, () => {
  console.log(`Server running on port: ` + PORT);
});
