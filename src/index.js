const path = require('path')
const express = require('express')
const morgan = require('morgan')
// const handlerbars = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

//Khai báo routes
const route = require('./routes')

//HTTP logger
app.use(morgan('combined'))

//static cấu hình cho đường dẫn
app.use(express.static(path.join(__dirname,'public')))

//template Engine
// handlerbar
// app.engine('handlebars', handlerbars.engine({defaultLayout:'main'}));
// app.set('view engine','handlebars')
// app.set('views',path.join(__dirname,'resources/views'))

//ejs
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'resources/views'))

//Lấy data theo body
app.use(bodyParser.urlencoded({ extended: false }))
route(app)

// app.get('/', (req, res) => {
//   res.render('home')
// })

// app.get('/tiendo', (req, res) => {
//   res.render('jobs')
// })

// app.get('/login', (req,res) => {
//   res.render('login')
// })

// app.get('/userlistjob', (req,res) => {
//   res.render('userlistjob')
// })
// const homeRoutes = require('./routes/home');

// app.use('/home',homeRoutes)


app.listen(port, () => {
  console.log(`Local ${port}`)
})