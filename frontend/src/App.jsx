import React from 'react'
import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Employee from './Employee'
import Home from './Home'
import Profile from './Profile'
import AddEmployee from './AddEmployee'
import EmployeeEdit from './employeeEdit'
import Start from './Start'
import EmployeeDetail from './EmployeeDetail'
import EmployeeLogin from './EmployeeLogin'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Dashboard/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='/employee' element={<Employee/>}></Route>
      <Route path='/profile' element={<Profile/>}></Route>
      <Route path='/create' element={<AddEmployee/>}></Route>
      <Route path='/employeeEdit/:id' element={<EmployeeEdit/>}></Route>
      </Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/start' element={<Start/>}></Route>
      <Route path='/employeeLogin' element={<EmployeeLogin/>}></Route>
      <Route path='/employeedetail/:id' element= {<EmployeeDetail/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}


export default App