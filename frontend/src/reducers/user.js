import { createSlice } from '@reduxjs/toolkit'

const initialState= {
  login: {
    userId: 0,
    accessToken: localStorage.validToken || null,
    secretMessage:null,
    errorMessage:null, 
  }
}

export const user = createSlice({
  name:'user',
  initialState: initialState,
  reducers: {
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.login.userId = userId
    },
    setAccessToken: ( state, action) => {
      const { accessToken } = action.payload
      state.login.accessToken = accessToken
      localStorage.setItem('validToken', accessToken)
    },
    setUserName: (state,action) => {
      const { name } = action.payload
      state.login.name = name
    },
    setSecretMessage: (state, action) => {
      const { secretMessage } = action.payload
      state.login.secretMessage = secretMessage
    },
    setErrorMessage: (state, action) => {
      const { errorMessage } = action.payload
      state.login.errorMessage = errorMessage
    }
  }
})

export const login = (name, password) => {
  return (dispatch) => {
    fetch('https://final-project-technigo.herokuapp.com/sessions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ name, password })
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Unable to log in, please check your username and password.')
        } else {
          return res.json()
        }
      })
      .then((json) => {
        dispatch(user.actions.setUserId({ userId: json.userId }))
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }))
      })
  }
}

export const getSecretMessage = (userId, accessToken) => {
  return (dispatch) => {
    fetch(`https://final-project-technigo.herokuapp.com/users/${userId}/secret`, {
      method: 'GET',
      headers: { Authorization: accessToken }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Could not get information, please make sure you are logged in.')
        }
        return res.json()
      })
      .then((json) => {
        dispatch(user.actions.setSecretMessage({ secretMessage: json.secretMessage }))
      })
      .catch((error) => {
        dispatch(user.actions.setErrorMessage({ errorMessage: error.toString() }))
      })
  }
}


export const logout = () => {
  return (dispatch) => {
    dispatch(user.actions.setSecretMessage({ secretMessage: null }))
    dispatch(user.actions.setErrorMessage({ errorMessage: null }))
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    dispatch(user.actions.setUserId({ userId: 0 }))
    localStorage.removeItem('validToken')
  }
}