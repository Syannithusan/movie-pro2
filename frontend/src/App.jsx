import { Route, Routes } from 'react-router'
import NavBar from './components/NavBar'
import Homepage from './pages/Homepage'
import MoviePage from './pages/MoviePage'
import CardList from './components/CardList'
import Signin from './pages/Signin'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path={"/"} element={<Homepage/>}/> 
        <Route path={"/movie/:id"} element={<MoviePage/>}/> 
        <Route path={"/signin"} element={<Signin/>}/> 
        <Route path={"/signup"} element={<SignUp/>}/> 
      </Routes>
    </div>
  )
}
export default App
