import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Slider from './components/Slider';
import ProduktionHouse from './components/ProduktionHouse';
import GenreMovieList from './components/GenreMovieList';
import DetailMovie from './pages/detail/DetailMovie';
function App() {
  return (
    <Router>
      <div className=''>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Slider />
      <ProduktionHouse />
      <GenreMovieList />
    </>
  );
}

export default App;
