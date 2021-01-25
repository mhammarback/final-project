import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/final-project'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

// MODELS 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2, 
    maxlength: 20,
    unique: true,
    required: true, 
  },
  password: {
    type: String, 
    minlength: 5, 
    maxlength: 30, 
    required: true,
  },
  accessToken: {
    type: String, 
    default: () => crypto.randomBytes(128).toString('hex'),
    unique: true,
  },
})

userSchema.pre('save', async function (next) {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }
  const salt = bcrypt.genSaltSync(10)
  user.password = bcrypt.hashSync(user.password, salt)
  next()
})

const User = mongoose.model('User', userSchema)

/*
const User = mongoose.model('User', {
  name: {
    type: String, 
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
})
*/

const Story = mongoose.model('Story', {
  message: {
    type: String, 
    required: true, 
    minlength: 5, 
    maxlength: 200
  }, 
  username: {
    type: String, 
    maxlength: 20, 
    default: 'Anonymous'
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
})

//AUTENTICATION 

const authenticateUser = async (req, res, next) => {
  try {
    const user = await User.findOne({ accessToken: req.header('Authorization') })
    if (user) {
      req.user = user
      next()
    } else {
      res.status(401).json({ loggedOut: true, message: 'Please try logging in again' })
    }
  } catch (err) {
    res.status(403).json({ message: 'Access token is missing or wrong', errors: err })
  }
}

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())

// ROUTES AUTHENTICATION 

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).json({ error: "Service unavailable" })
  }
})

/*maybe delete*/
app.get('/user', (req, res) => {
  res.send('Welcome to our shared forum')
})


app.post('/user', async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await new User({ name, password }).save()
    res.status(201).json({ userId: user._id, accessToken: user.accessToken })
  } catch (err) {
    res.status(400).json({ message: 'Could not create user', errors: err.errors })
  }
})

app.get('/user/secrets', authenticateUser)
app.get('/user/secrets', async (req, res) => {
  const secretMessage = `This is a super secret message for ${req.user.name}`
  res.status(201).json({ secretMessage })
})

app.post('/sessions', async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await User.findOne({ name })

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(201).json({ userId: user._id, accessToken: user.accessToken })
    } else {
      res.status(404).json({ notFound: true, message: 'Verify username and password is correct' })
    }
  } catch (err) {
    res.status(404).json({ notFound: true, message: 'Verify username and password is correct' })
  }
})




// ROUTES MESSAGES 

app.post('/forum' , async (req, res) => {
  const { message, username } = req.body 
  const story = new Story ({ message, username: username || 'Anonymous' })

  try {
    const savedStory = await story.save()
    res.status(201).json(savedStory)
  } catch (err) {
    res.status(400).json ({ message: 'could not post story', errors:err.errors})
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
