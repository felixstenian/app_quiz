import React from 'react'
import { Switch } from 'react-router-dom'

import Route from './Route'

import Main from '../pages/Main'
import ConfirmStart from '../pages/ConfirmStart'
import Quiz from '../pages/Quiz'
import QuestionsResponsed from '../pages/QuestionsResponsed'

function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Main} title='Start Quiz' />
      <Route path='/confirmacao' component={ConfirmStart} isPrivate title='Confirm Quiz' />
      <Route path='/quiz' component={Quiz} isPrivate title='Quiz'/>
      <Route path='/finished' component={QuestionsResponsed} isRelated title='Report Quiz'/>
    </Switch>
  )
}

export default Routes
