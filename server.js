const express = require('express');
const routes = require("./routes");
const sequelize = require('./config/connection');
const exphbs = require("express-handlebars")


const app = express();
const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
  helpers: {
    format_date: date => {
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
    }
  }
});
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(routes);

sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => {
   
    console.log(`Server listening at PORT: ${PORT}`);
});
});