const express = require('express');
const app = express();
require('dotenv').config();
const PORT = 3002;

const cors = require('cors');
app.use(express.json());
app.use(cors());

app.use(notFound);
mongooseConnect().catch((err) => console.error(err));
app.use(error);

app.listen(PORT, ()=> {
    console.log('Server running on port:' + PORT);
})
