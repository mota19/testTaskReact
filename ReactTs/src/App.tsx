import { useState, useEffect} from 'react'
import './App.css'
import AboutMe from './components/AboutMe'
import Header from "./components/Header"
import LetDesignTogether from './components/LetDesignTogether'
import MyProject from './components/MyProject'
import Section from "./components/Section"
import Services from './components/services'
import Testimonials from './components/testimonals'
import Footer from './components/footer'
import CopyWrite from './components/copyWrtie'

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }


  useEffect(() => {
    // Додаємо/видаляємо клас темної теми на body
    if (isDarkTheme) {
        document.body.classList.add('darkTheme');
    } else {
        document.body.classList.remove('darkTheme');
    }
}, [isDarkTheme]);


  return (
    <div className={isDarkTheme ? 'dark-theme' : ''}>
      <button onClick={toggleTheme}>
        {isDarkTheme ? 'Light Theme' : 'Dark Theme'}
      </button>
      <div className='container'>
        <Header/>
        <Section />
        <AboutMe/>
        <Services />
        <MyProject/>
        <Testimonials />
        <LetDesignTogether />
        <Footer isDarkTheme={isDarkTheme}/>
        <CopyWrite/>
      </div>
    </div>
  )
}

export default App
