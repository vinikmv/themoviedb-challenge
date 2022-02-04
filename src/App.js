import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MovieDetails from './components/MovieDetails';
import Header from './components/Header';
import Home from './pages/Home';


const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
  );
};

export default App;
