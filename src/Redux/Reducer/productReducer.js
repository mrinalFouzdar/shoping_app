import {SET_PRODUCTS} from "../Actions/productsActions"

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