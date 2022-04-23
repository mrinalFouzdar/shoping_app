import {SET_PRODUCTS,SELECTED_PRODUCTS} from "../Actions/productsActions"


const intialState={
    products:[]
}

export const productReducer=(state=intialState,{type,payload})=>{
    switch (type) {
        case SET_PRODUCTS:
            
          return{
              ...state,
              products:payload

          }
    
        default:
            return state;
    }
}

export const selectedProductReducer=(state={},{type,payload})=>{
    switch (type) {
        case SELECTED_PRODUCTS:
            
            return{
                ...state,
                ...payload
            }
    
        default:
           return state;
    }
}