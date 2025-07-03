import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import Hero from '../components/molecules/Hero'
import InsNavbar from '../components/molecules/InsNavbar'
import FullCard from '../components/organisems/FullCard'
import NewsLetter from '../components/organisems/NewsLetter'


export default function Home() {
  return (
    <>
        <HomeLayout>
           <Hero />
           <InsNavbar />
           <FullCard />
           <NewsLetter />
        </HomeLayout>
    </>
  )
}
