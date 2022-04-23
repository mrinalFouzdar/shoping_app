import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductsComponent from './ProductsComponent';
import axios from "axios"
import {setProducts} from "../Redux/Actions/productsActions"
function ProductsList() {
  const products = useSelector((state)=>state)
  const dispatch = useDispatch()

  React.useEffect(()=>{
    fetchProduts()
  },[])

  const fetchProduts = async ()=>{
    const respon = await axios.get("https://fakestoreapi.com/products")
    .catch((err)=>{
      console.log("err", err);
    })
    dispatch(setProducts(respon.data));
  }
  // console.log(products);
  return (
    <div>
      <ProductsComponent/>
    </div>
  )
}

export default ProductsList