import React from 'react'
import Hero from '../components/Hero'
import CardList from '../components/CardList'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <CardList title="Now Playing" catogor="Now_playing"/>
        <CardList title="top rated" catogory="top_rated"/>
        <CardList title="Populare" catogory="popular"/>
        <CardList title="Upcoming" catogory="upcoming"/>
        <Footer/>
        
    </div>
  )
}

export default Homepage