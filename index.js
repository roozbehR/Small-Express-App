const express = require('express');
const path = require('path');
const { getMaxListeners } = require('process');
const exphbs = require('express-handlebars')
const logger = require('./middleware/logger');
const app = express();

//init middleware
// app.use(logger);








const PORT = process.env.PORT || 5000;


//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

//Members API routes
app.use('/api/members', require('./routes/api/members'));