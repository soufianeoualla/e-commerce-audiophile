import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({
    name:'menu',
    initialState:{
        value:false
    },
    reducers:{
        showMenu:(state)=>{
            state.value = !state.value;
        },
       
    }

})

export const {closeMenu,showMenu}=menuSlice.actions

export default menuSlice.reducer