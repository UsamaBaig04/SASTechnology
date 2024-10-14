import React , {useEffect} from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/Navbar';
import {CarouselSlider} from './components/CarouselSlider';
import {AboutUs} from './components/AboutUs';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import {Services} from './components/Services';
import { Clients } from './components/Clients';
import { Products } from './components/Products';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // You can customize the animation duration here
    });
  }, []);
  return (
    <div className="App" >
     <Navbar/>
     <CarouselSlider/>
     <AboutUs/>
     <Clients/>  
     <Services/>
     <Products/>
     <Contacts/>
     <Footer/>  
    </div>
  );
}

export default App;
