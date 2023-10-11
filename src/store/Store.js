import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Cartslice";

const store =configureStore({
    reducer:{
        cart:Cartslice
    }
})
//this is a cartslice 
export default store;