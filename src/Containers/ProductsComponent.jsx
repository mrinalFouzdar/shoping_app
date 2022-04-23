import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { Link } from 'react-router-dom'

const Div= styled.div`
  /* height:40ev; */
  display:grid ;
  grid-template-columns:repeat(4,1fr) ;
  box-sizing:border-box ;
  row-gap:30px;
  text-align:center;
  place-items:  center;

  .itemPerdiv{
    height:10ev ;
    width:300px ;
    padding:10px;
    padding-top:50px;
    border:1px solid black ;
    background-color: hsla(14, 100%, 53%, 0.6);
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
    cursor: pointer;
  }

  img{
    width:80% ;
    height: 300px ;
  }
`
function ProductsComponent() {
  const products = useSelector((state)=>state.allProducts.products)
  // console.log(products);
  return (
    <Div> { products.length === 0 ?
      <>
      <h1>...loading</h1>
        
      </>:<>
      {
        products.map((items)=><div key={items.id} className="itemPerdiv" >
          <Link to={`/product/${items.id}`}>
          <img src={items.image} alt="" />
          <h5>{items.title}</h5>
          <p>{items.price}</p>
          </Link>
        </div>)
      }
      </>}
    </Div>
  )
}

export default ProductsComponent