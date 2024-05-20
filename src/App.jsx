import './App.css'
import {Route,Routes,Navigate} from 'react-router-dom'
import Home from './pages/Home'
import Wishlist  from './pages/Wishlist'
import Cart from './pages/Cart'
import Footer from './components/Footer'
import View from './pages/View'

function App() {

  return (
    <>
    <Routes> 
      {/* http://localhost:5173/ */}

<Route path='/'element={<Home/>}/>
<Route path='/wishlist'element={<Wishlist/>}/>
<Route path='/cart'element={<Cart/>}/>

{/* http://localhost:5173/10/view */}
<Route path='/:id/view' element={<View/>}/>
 
 {/* page not found */}

 <Route path='/*' element= {<Navigate to={'/'}/>}/>


</Routes>
<Footer/>
    </>
  )
}

export default App
