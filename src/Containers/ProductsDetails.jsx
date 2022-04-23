import React from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {selectedProducts} from "../Redux/Actions/productsActions"
function ProductsDetails() {
  const product = useSelector((state)=>state.product)
  console.log(product)
  const {productId} = useParams()
  const dispatch = useDispatch()
  console.log(productId);
  const fetchProdutsDetails = async()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err)=>{
      console.log("err", err)
    })
    dispatch(selectedProducts(response.data));

  }
  React.useEffect(()=>{
    fetchProdutsDetails()
  },[productId])
  return (<>{
      Object.keys(product).length === 0 ? <div>... is Loading</div>:
    <div>
     <h1>{product.title}</h1>
    </div>
  }
  </>
  )
}

export default ProductsDetails