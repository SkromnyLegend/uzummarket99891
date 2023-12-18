import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",       
    initialState:{                                                                      
        value:JSON.parse(localStorage.getItem("cart")) ||  []                                                                       
    },                                                                      
    reducers: {                                                                     
            incCart(state, actions){                                                                        
                let index = state.value.findIndex((el)=> el.id === actions.payload.id)                                                                      
                if(index < 0){                                                                      
                    state.value = [...state.value, {...actions.payload, quantity: 1}]                                                                       
                }else{                                                                      
                    state.value = state.value.map((item, inx)=> {                                                                       
                        if(inx === index){                                                                            
                            return {...item, quantity: item.quantity + 1}                                                                       
                        }else{                                                                      
                            return item                                                                    
                        }                                                                       
                    })                                                                      
                }          
                localStorage.setItem("cart", JSON.stringify(state.value))                                                              
            },                                                                      
            decCart(state, actions){
                let index = state.value.findIndex((el)=> el.id === actions.payload.id)                                                                      
                state.value = state.value.map((item, inx)=> {                                                                       
                    if(inx === index){
                        return {...item, quantity: item.quantity - 1}                                                                       
                    }
                    else{                                                                      
                        return item                                                                    
                    }                                                                       
                })
                localStorage.setItem("cart", JSON.stringify(state.value))       
                
            },                                                                      
            removeCart(state, actions){
                state.value = state.value.filter((l)=> l.id !== actions.payload.id)      
                localStorage.setItem("cart", JSON.stringify(state.value))                                                                     
            },     
                    
                                             
    }
})
   


export const {incCart, decCart, removeCart} = cartSlice.actions
export default cartSlice.reducer 