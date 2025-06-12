import React from 'react'
import HomeLayout from '../layouts/HomeLayout'
import Hero from '../components/molecules/Hero'
import InsNavbar from '../components/molecules/InsNavbar'
import FullCard from '../components/molecules/FullCard'
import NewsLetter from '../components/molecules/NewsLetter'


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
