let errorHandler = (err,req,res,next)=>{

    console.log("Application level error handler called");
    console.log(err);
    res.send("Some error occured");
    next();
    
}


let notFoundErrorHandler = (req,res,next)=>{
    console.log("Global not found error handler called");
    res.status(404).send("No routes found")

}

module.exports = {

    errorHandler : errorHandler,
    notFoundErrorHandler : notFoundErrorHandler,
}