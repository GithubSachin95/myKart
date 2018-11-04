const express = require('express')
const app = express()
const appConfig = require('./config/appConfig')
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
const appErrorHandler = require('./middlewares/appErrorHandler')
const routeLoggerMiddleWare = require('./middlewares/routeLogger')

//middlewares
app.use(bodyParser.urlencoded({ extended : true}))
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(cookieParser())
app.use(appErrorHandler.errorHandler);
app.use(routeLoggerMiddleWare.logIp)
var fs  = require('fs');
//importing models
let modelsPath ="./models"
fs.readdirSync(modelsPath).forEach(function(file){
    if(~file.indexOf('.js'))require(modelsPath + '/' + file);
    })

//importing routes 
    let routesPath = "./routes"
    
    fs.readdirSync(routesPath).forEach(function(file){
        if(~file.indexOf('.js')){
            let route = require(routesPath + '/' + file);
            route.setRouter(app);
        }
    })
app.use(appErrorHandler.notFoundErrorHandler)
app.listen(appConfig.port, () => {
let db = mongoose.connect(appConfig.db.uri , { useNewUrlParser : true});
console.log(`Example app listening on port ${appConfig.port}!`)

})

//handling mongoose connection error
mongoose.connection.on('error',function(err){
    console.log('database connection error');
    console.log(err);
})

mongoose.connection.on('open',function(err){
    if(err){
    console.log('database connection error');
    console.log(err);}
    else{
        console.log('successful connection');
    }
})