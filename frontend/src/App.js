import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { user } from './reducers/user'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Forum } from './components/Forum'
import { StartPage } from './pages/StartPage'
import { DiscussionsCards } from './pages/DiscussionsCards'
import { Lawbook } from './pages/Lawbook'
import { LoginPage } from './pages/LoginPage'
import { LoginSignup } from'./pages/LoginSignup'
import { QuizHome } from './quiz/QuizHome'
import { QuizStart } from './quiz/Quiz'


const reducer = combineReducers({ user: user.reducer })
const store = configureStore({ reducer })

export const App = () => {

return (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact>
         <StartPage />
        </Route>
        <Route path='/discussion' exact>
        <DiscussionsCards />
        </Route>
        <Route path='/forum' exact>
        <Forum />
        </Route>
        <Route path='/lawbook' exact>
        <Lawbook />
        </Route>
        <Route path='/quiz' exact>
          <QuizHome />
        </Route>
        <Route path='/quiz-start'>
          <QuizStart />
        
        </Route>


        <Route path='/user' exact>
        <LoginPage />
        </Route>

        <Route path='/sign' exact>
        <LoginSignup />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  </Provider>
  )
}
