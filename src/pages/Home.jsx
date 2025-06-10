import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import Hero from '../components/molecules/Hero'
import InsNavbar from '../components/molecules/InsNavbar'


export default function Home() {
  return (
    <>
        <HomeLayout>
           <Hero />
           <InsNavbar />
        </HomeLayout>
    </>
  )
}
