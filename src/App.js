import { Route,  Routes } from 'react-router-dom';
import './App.css';
import Header from './Containers/Header';
import Navbar from './Containers/Navbar';
import ProductsDetails from './Containers/ProductsDetails';
import ProductsList from './Containers/ProductsList';

function App() {
  return (
    <div >
      {/* <Navbar/> */}
         <Header/>
      <Routes>
         
         <Route path='/' element={<ProductsList/>}/>
         <Route path='/product/:productId' element={<ProductsDetails/>}/>
         <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
