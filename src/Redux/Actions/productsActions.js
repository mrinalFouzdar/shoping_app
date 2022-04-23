import fakestoreApi from "../../apis/fakestoreApi";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SELECTED_PRODUCTS= "SELECTED_PRODUCTS";
export const REMOVE_SELECTED_PRODUCTS="REMOVE_SELECTED_PRODUCTS"
export const FETCH_PRODUCTS ="FETCH_PRODUCTS"




export const fetchProducts = () => async  (dispatch) =>{
        const response = await fakestoreApi.get("/products ");
        dispatch( {type:FETCH_PRODUCTS,payload:response.data } )
    }
    
export const fetchProduct = (id) => async  (dispatch) =>{
        const response = await fakestoreApi.get(`/products/${id}` );
        dispatch( {type:SELECTED_PRODUCTS,payload:response.data } )
    }
   

// export const setProducts = (products)=>{
//     return{
//         type:SET_PRODUCTS,
//         payload:products
//     }
// }
// export const selectedProducts = (products)=>({
   
//         type:SELECTED_PRODUCTS,
//         payload:products,
    
// })
export const removeselectedProducts = ()=>({
   
        type:REMOVE_SELECTED_PRODUCTS
    
})