import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import listEndpoints from 'express-list-endpoints'

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/consent'
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
    unique: true
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
  },
  createdAt: {
    type: Date, 
    default: Date.now
  },
  hearts: {
    type: Number, 
    default: 0
  },
})

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())

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

// ROUTES AUTHENTICATION 

app.use((req, res, next) => {
  if (mongoose.connection.readyState === 1) {
    next()
  } else {
    res.status(503).json({ error: "Service unavailable" })
  }
})

app.get('/', (req, res) => {
  res.send(listEndpoints(app));
})

app.post('/users', async (req, res) => {
  try {
    const { name, password } = req.body
    const user = await new User({ name, password }).save()
    res.status(201).json({ userId: user._id, accessToken: user.accessToken })
  } catch (error) {
    res.status(400).json({ message: 'Could not create user', error })
  }
})

app.get('/users/:id/secret', authenticateUser)
app.get('/users/:id/secret', (req, res) => {
  const secretMessage = ` Welcome ${req.user.name}!`
  res.status(201).json({ secretMessage })
})

// LOGIN ENDPOINT
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

app.get('/stories', async (req, res) => {
  const storys = await Story.find().sort({createdAt: 'desc' }).limit(20).exec()  
  res.json(storys)
})

app.post('/stories' , async (req, res) => {
  const { message, username } = req.body 
  const story = new Story ({ message })

  try {
    const savedStory = await story.save()
    res.status(201).json(savedStory)
  } catch (err) {
    res.status(400).json ({ message: 'could not post story', errors:err.errors})
  }
})

app.post('/stories/:storyId/like', async (req,res) => {
  const storyId = req.params.storyId

  try {
    const storyLiked = await Story.updateOne({_id: storyId }, { $inc : { hearts: 1 } })
    res.json(storyLiked)
  } catch (err) {
    res.status(400).json({message: "story not found", error:err.errors})
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})