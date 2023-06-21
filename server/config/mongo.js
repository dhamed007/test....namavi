import mongoose from 'mongoose'
import config from './index.js'

const CONNECTION_URL = `mongodb+srv://pradeepkumargaming966:NLVqVZYl8jJuLF1u@gamingapi.jlbb6hr.mongodb.net/gaming-api?retryWrites=true&w=majority`

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongo has connected succesfully')
})
mongoose.connection.on('reconnected', () => {
  console.log('Mongo has reconnected')
})
mongoose.connection.on('error', error => {
  console.log('Mongo connection has an error', error)
  mongoose.disconnect()
})
mongoose.connection.on('disconnected', () => {
  console.log('Mongo connection is disconnected')
})
