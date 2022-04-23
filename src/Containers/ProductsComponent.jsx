import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"

const Div= styled.div`
  height:40ev;
  display:grid ;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  box-sizing:border-box ;
  align-content:center;

  .itemPerdiv{
    height:10ev ;
    width:300px ;
    align-items:center;
    padding:50px;
  }

  img{
    width:200px ;
  }
`
function ProductsComponent() {
  const products = useSelector((state)=>state.allProducts.products)
  // console.log(products);
  return (
    <Div>
      {
        products.map((items)=><div key={items.id} className="itemPerdiv" >
          <img src={items.image} alt="" />
          <h5>{items.title}</h5>
          <p>{items.price}</p>
        </div>)
      }
    </Div>
  )
}

export default ProductsComponent