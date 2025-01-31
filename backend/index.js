const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000;

//thanushasolasa
//Thanu@14

app.use(express.json());
app.use(cors());


async function main() {
  await mongoose.connect('mongodb+srv://thanushasolasa:Thanu%4014@chefmaster.h94pm.mongodb.net/chefmaster?retryWrites=true&w=majority&appName=chefmaster');

  app.get('/', (req, res) => {
    res.send('ChefMaster Server is running..')
  })
  
}

main().then(() => console.log("Mongodb connected successfully!!")).catch(err => console.log(err));

//routes
const ItemRoutes = require("./src/routes/ItemRoute");
const CategoryRoutes=require("./src/routes/categoryRoute")

app.use('/api',ItemRoutes)
app.use('/api',CategoryRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});