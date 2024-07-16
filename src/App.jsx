import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Slider from './components/Slider'
import ProduktionHouse from './components/ProduktionHouse'
import GenreMovieList from './components/GenreMovieList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header />

      <Slider />

      <ProduktionHouse /> 

      <GenreMovieList />
    </div>
  )
}

export default App
