import React, { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from "../src/components/Header/Header"
import Home from './components/Page/Home'
import ToTop from './components/ToTop/ToTop.jsx'
import SideMenuActions from "./components/SideMenuActions/SideMenuActions.jsx"
import BannerFooter from './components/Banner/BannerFooter'
import CardFooter from './components/Card/CardFooter'
import Footer from './components/Footer/Footer'
import About from './components/Page/About'
import Contact from './components/Page/Contact'
import Login from './components/Page/Login'
import LostPassword from './components/Page/LostPassword'
function App() {

  const [isHideMenu, setIsHideMenu] = useState(false);
  const [isHideToTop, setIsHideToTop] = useState(true);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const positionY = window.scrollY;
      if (positionY > 300) {
        setIsHideToTop(false)
      } else {
        setIsHideToTop(true)
      } if (positionY > 350) {
        setIsHideMenu(true)
      } else {
        setIsHideMenu(false)
      }
    })
  })

  return (
      <div>
        <header>
            <Header />
        </header>          
          <div>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/contact' element={<Contact />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/login/lost-password' element={<LostPassword />}/>
            </Routes>
          </div>
          <main>
            <SideMenuActions style={{
              opacity: isHideMenu ? 0 : 1,
              visibility: isHideMenu ? "hidden" : "visible",
              transform: isHideMenu ? "translateY(50px)" : "translateY(0)"
            }} />
            <ToTop style={{
              opacity: isHideToTop ? 0 : 1,
              visibility: isHideToTop ? "hidden" : "visible",
              transform: isHideToTop ? "translateY(100px)" : "translateY(0)"
            }} />
          </main>
        <BannerFooter />
        <CardFooter />
        <footer>
          <Footer />
        </footer>
      </div>
  )
}
export default App
