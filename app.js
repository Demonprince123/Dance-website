const express = require("express"); 
const Path = require("Path"); 
const app = express(); 
const port = 8000;

//Express specific stuff
app.use("/static", express.static("static"));// for serving static file
app.use(express.urlencoded());

//PUG specific stuff
app.set('view engine', 'pug');// Set the template engine as pug
app.set('views', Path.join(__dirname,'views'))// Set the views directory

// endpoint 
app.get('/',(req , res)=>{
    const params={}
    res.status(200).render('home.pug',params)

})
app.get('/contact',(req , res)=>{
    const params={}
    res.status(200).render('contact.pug',params)

})

// Start the server
app.listen(port, () => {
    console.log(`The application started sucessfully on port ${port}`);
  });
  