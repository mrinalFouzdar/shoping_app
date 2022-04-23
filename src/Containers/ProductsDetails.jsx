import React from 'react'
import axios from 'axios'
import {useParams} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {selectedProducts,removeselectedProducts,fetchProduct} from "../Redux/Actions/productsActions"
import styled from "styled-components"
const Div = styled.div`
 display:flex ;
 justify-content:center;
 position:relative ;
 .inerFlexdiv{
   box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
   height:500px ;
   border:1px solid black ;
   width:40em ;
   padding:10px;
 }
 .flex{
  height:500px ;
  width:40em ;
  display:flex ;
   justify-content:center ;
 }
 img{
   height:100% ;
   width: 80%;
 }
 p{
   color:red ;
 }
 button{
   margin-top:1em ;
   background-color:red;
   border:none ;
   width:6em ;
   height:3em;
   font-size:large ;
   cursor: pointer;
   
 }
 
`
function ProductsDetails() {
  const product = useSelector((state)=>state.product)
  console.log(product)
  const {productId} = useParams()
  const dispatch = useDispatch()
  console.log(productId);
  // const fetchProdutsDetails = async()=>{
  //   const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
  //   .catch((err)=>{
  //     console.log("err", err)
  //   })
  //   dispatch(selectedProducts(response.data));

  // }
  React.useEffect(()=>{
    // fetchProdutsDetails()
    dispatch(fetchProduct(productId))
    return ()=>{
      dispatch(removeselectedProducts())
      
    }
  },[productId])
  return (<>{
      Object.keys(product).length === 0 ? <div>... is Loading</div>:
    <Div>
      <div className='inerFlexdiv'>
        <div className='flex'>

        <img src={product.image} alt="" />
        </div>
      </div>
      <div className='inerFlexdiv'>
      <h1>{product.title}</h1>
      <p> <b> Price:${product.price} </b></p>
      <h4>{product.category}</h4>
      <span>{product.description}</span><br />
      <button>Add to Cart</button>
      </div>
    </Div>
  }
  </>
  )
}

export default ProductsDetails