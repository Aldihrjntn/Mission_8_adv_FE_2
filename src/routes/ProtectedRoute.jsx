import React from 'react'
import {Navigate} from 'react-router-dom'

export const ProtectedRoute = ({children}) => {
    const user = localStorage.getItem('userData')
    const userData = JSON.parse(user)
    const email = userData?.email
    const password = userData?.password
    const authloggedIn = localStorage.getItem('isloggedIn') === 'True' && email && password

    return authloggedIn ? children : <Navigate to="/login" replace/>
     
}



export const PublicRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isloggedIn') === 'True'

  return isLoggedIn ? <Navigate to="/" replace /> : children
}