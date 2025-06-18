import React from 'react'
import {Navigate} from 'react-router-dom'

 const ProtectedRoute = ({children}) => {
    const user = localStorage.getItem('userData')
    const userData = JSON.parse(user)
    const email = userData?.email
    const password = userData?.password
    const authloggedIn = localStorage.getItem('isloggedIn') === 'True' && email && password

    return authloggedIn ? children : <Navigate to="/login" replace/>
     
}

export default ProtectedRoute
