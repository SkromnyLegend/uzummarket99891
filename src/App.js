import './App.css';
import SubHeader from './components/sub-header/SubHeader';
import Navbar from './components/navbar/Navbar';
import Home from "./router/home/Home"
import Login from "./router/login/Login"
import Wishes from "./router/wishes/Wishes"
import Cart from "./router/cart/Cart"
import NavbarBottom from './components/navbar-bottom/NavbarBottom';
import Footer from './components/footer/Footer';
import { PRODUCTS  } from './static';
import SingleRoute from './router/single-route/SingleRoute';
import { Routes,Route } from 'react-router-dom';
import Notdef from './router/notdifend/Notdef';
function App() {
  return (
    <div className="App">
      <SubHeader/>
    <Navbar data={PRODUCTS}/>
    <NavbarBottom/>
    <Routes>
      <Route path='*' element={<Notdef/>} />
      <Route path='/' element={<Home  data={PRODUCTS}/>}/>
      <Route path='/login' element={<Login/>} />
      <Route  path='/wishes' element={<Wishes/>}/>
      <Route  path='/Cart' element={<Cart/>}/>
      <Route path='/product/:id' element={<SingleRoute data={PRODUCTS}/>}/>
    </Routes>
    <Footer/>

    </div>
  );
}

export default App;
