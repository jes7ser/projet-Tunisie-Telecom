import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Product from './pages/Product'
import PlaceOrder from './pages/PlaceOrder'
import Cart from './pages/cart'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Collection from './pages/Collection'
import Login from './pages/Login' 
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/footer'

const App = () => {
  return (

    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/collection' element={<Collection />} />
      <Route path='/prodcut/:productId' element={<Product />} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/place-order' element={<PlaceOrder />} />
      <Route path='/orders' element={<Orders />} />
    </Routes>
    <Footer />
    </div>
  )
}
 
export default App
