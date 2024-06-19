const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
//const path = require('path')
const app = express()
const Phonebook = require('./models/phonebook')


app.use(cors())
app.use(express.json())
//app.use(express.static(path.join(__dirname, 'dist')))

// Define un nuevo token para morgan llamado 'postData'
morgan.token('postData', (req) => {
  if (req.method === 'POST') {
    return JSON.stringify(req.body)
  }
  return ''
})

// Formato personalizado para mostrar datos POST
const customFormat =
  ':method :url :status :res[content-length] - :response-time ms :postData'

// Middleware morgan configurado con el formato personalizado
app.use(morgan(customFormat))

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.get('/api/persons', (_request, response) => {
  Phonebook.find({}).then((phonebook) => {
    response.json(phonebook)
  })
})

app.get('/info', async (_request, response, next) => {
  try {
    const people = await Phonebook.countDocuments({})
    const info = `phonebook has info for ${people} people`
    response.send(info)
  } catch (error) {
    next(error)
  }
})

app.get('/api/persons/:id', (request, response, next) => {
  Phonebook.findById(request.params.id)
    .then((Phonebook) => {
      if (Phonebook) {
        response.json(Phonebook)
      } else {
        response.status(404).end()
      }
    })
    .catch((error) => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
  Phonebook.findByIdAndDelete(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch((error) => next(error))
})

app.post('/api/persons/', (request, response, next) => {
  const body = request.body

  const person = new Phonebook({
    name: body.name,
    number: body.number,
    date: new Date(),
  })

  person
    .save()
    .then((savedPerson) => {
      response.json(savedPerson)
    })
    .catch((error) => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }
  Phonebook.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatedNote) => {
      response.json(updatedNote)
    })
    .catch((error) => next(error))
})

app.use(errorHandler)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
