import React from 'react'
import Navbar from '../components/organisems/Navbar'
import Footer from '../components/organisems/Footer'
import App from '../../src/App'

export default function HomeLayout({children}) {
  return (
    <>
      
        <Navbar />
          {children}
        <Footer />
      
    </>
  )
}
