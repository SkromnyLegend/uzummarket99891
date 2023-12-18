import { createSlice } from "@reduxjs/toolkit";

export const likeSlice = createSlice({
    name:"like",
    initialState :{
        value: JSON.parse(localStorage.getItem("likes")) || []
    },
    reducers:{
        toogleLike(state, action){
let index = state.value.findIndex(el=>el.id === action.payload.id)
if(index < 0){
 state.value = [...state.value,action.payload]
 localStorage.setItem("likes", JSON.stringify(state.value))

}else{
    state.value = state.value.filter((el)=> el.id !== action.payload.id)
}

            
       
    }
    }
})
export const {toogleLike} = likeSlice.actions
export default likeSlice.reducer