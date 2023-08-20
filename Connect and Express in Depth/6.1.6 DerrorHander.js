const connect = require('connect')
const errorHandler = require('./ErrorHanderMiddleware')

const app = connect()
app.use(errorHandler)

app.use((req,res)=>{
  foo()

  res.setHeader('Content-Type', 'text/plain')
  res.end('hello,world')
})


.listen(3000)