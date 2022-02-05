import Footer from 'components/Footer';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MovieDetails from './components/MovieDetails';
import Home from './pages/Home';


const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </HelmetProvider>
  );
};

export default App;
