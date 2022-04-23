export const SET_PRODUCTS = "SET_PRODUCTS";
export const SELECTED_PRODUCTS= "SELECTED_PRODUCTS";
export const REMOVE_SELECTED_PRODUCTS="REMOVE_SELECTED_PRODUCTS"

export const setProducts = (products)=>{
    return{
        type:SET_PRODUCTS,
        payload:products
    }
}
export const selectedProducts = (products)=>({
   
        type:SELECTED_PRODUCTS,
        payload:products,
    
})