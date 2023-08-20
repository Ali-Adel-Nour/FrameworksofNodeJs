
// setup function can be called multiple times with differenct configurations

function setup(format){
  const regexp = /:(\w+)/g;  //Logger components use a regexp to match request properties

  return function createLogger(req, res, next){         //Logger components that connect will use
    const str = format.replace(regexp,(match,property)=>{  //Logger component that connect will use
      return req[property]
      })
      console.log(str)
      next() //passes control to next middlware component
  }
}


module.exports = setup