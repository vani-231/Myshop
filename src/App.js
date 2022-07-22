import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route,Routes} from 'react-router-dom'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Welcome from './components/Welcome';
import Aboutus from './components/Aboutus';




function App() {
  return (
    <div className="App">
      <Navbar/> 
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path= '/signin' element={<Signin/>}></Route>
        <Route path='/welcome' element={<Welcome/>}></Route>
        <Route path='/aboutus' element={<Aboutus/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:prod_id' element={<ProductDetail/>}></Route>

      </Routes>
      

     
    </div>
  );
}

export default App;
