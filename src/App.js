import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <Router className='bg-purple-500'>
    {/* H-SCREEN + JUST-BET WORKS VERTICALLY */}
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className='container mx-auto px-3 pb-12'>Content</main>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
