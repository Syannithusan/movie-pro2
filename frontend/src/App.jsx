import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import MoviePage from './pages/MoviePage'
import CardList from './components/CardList'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Homepage/>}/> 
        <Route path={"/movie/:id"} element={<MoviePage/>}/> 
      </Routes>
    </div>
  )
}
export default App
