     import Hero from '../components/Hero'
import CardList from '../components/CardList'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
        <Hero/>
        <CardList title="Now Playing" category="now_playing"/>
        <CardList title="top rated" category="top_rated"/>
        <CardList title="Populare" category="popular"/>
        <CardList title="Upcoming" category="upcoming"/>
        <Footer/>  
        
    </div>
  )
}

export default Homepage

