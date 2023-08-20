const env = process.env.NODE_ENV !== 'development'

//Error handling middleware uses four arguments

function errorHandler(err, req, res, next) {

  res.statusCode = 500

  //errorHandler middleware componets behaves differnetly depending on value of Node_ENV
  switch(env){
    case 'development':

    console.error('Error')
    console.error(err)
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(err))
    break;
    default:
      res.end("Server Errror ")
  }
}

module.exports = errorHandler