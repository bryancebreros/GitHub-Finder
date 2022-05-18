import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import NotFound from './pages/NotFound'
import About from './pages/About'
import Home from './pages/Home'
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router className='bg-purple-500'>
    {/* H-SCREEN + JUST-BET WORKS VERTICALLY */}
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/About' element={<About />}></Route>
            <Route path='/*' element={<NotFound />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
