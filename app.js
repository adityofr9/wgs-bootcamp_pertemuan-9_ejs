const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');


//Routes List
app.get('/', (req, res) => {
//   res.send('Hello World!')
  res.sendFile('./index.html', {root: __dirname})
})

app.get('/about', (req, res) => {
    // res.send('This is about page!')
    res.sendFile('./about.html', {root: __dirname})
})

app.get('/contact', (req, res) => {
    // res.send('This is contact page!')
    res.sendFile('./contact.html', {root: __dirname})
})

//Url dengan mengambil parameter id dan query category
app.get('/product/:id', (req, res) => {
    //category ini sebagai variable yang akan diberikan di url
    res.send(`product id : ${req.params.id} <br>
            category id : ${req.query.category} <br>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>`)
})

//Jika url dimasukkan selain routes list yang tersedia
app.use('/', (req,res) => {
    res.status(404)
    res.send('Page not found: 404')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})