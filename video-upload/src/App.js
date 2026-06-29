
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landingpage from './Pages/Landingpage';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import Wachhistory from './Pages/Wachhistory';


function App() {
  return (

    <>
        
        <Header/>
      <div className="container m-5">

        <Routes>

          <Route path='/' element={<Landingpage/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/watch-history' element={<Wachhistory/>}/>
          

          </Routes>

      </div>
      <Footer/>


    </>

  );
}

export default App;
