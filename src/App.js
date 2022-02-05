import Footer from 'components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';
import Home from './pages/Home';


const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
