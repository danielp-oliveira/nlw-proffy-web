import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

const Routes = () => (
  <Router>
    <Route path='/' exact component={Landing} />
    <Route path='/study' exact component={TeacherList} />
    <Route path='/give-classes' exact component={TeacherForm} />
  </Router>
)

export default Routes
