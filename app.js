
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


//setting it up as an Express App
const app = express();
const PORT = process.env.PORT || 3000;

//allows the app to use data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'))
app.use('/api', apiRoutes)
app.use('/assests/notes/html', htmlRoutes)




app.listen(PORT, function() {
    console.log(`App listening on PORT: ${PORT}`);
  });