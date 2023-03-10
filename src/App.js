import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import RestraurantDetails from './components/RestraurantDetails';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <Router>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<RestraurantDetails />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
