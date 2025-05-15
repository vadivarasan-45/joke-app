import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState={
    count:""
}
const list=createAsyncThunk("list/listcategory",async function(one){
    return await axios.get(`https://api.chucknorris.io/jokes/random?category=${one}`).then(function(iteam){
        // console.log(iteam.data.value)
        return <div>{iteam.data.value}😄</div>
    }).catch(function(error) {
        return (
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
            <h1 className="text-red-500 text-xl sm:text-2xl md:text-3xl font-bold mb-2">ERROR</h1>
            <h1 className="text-red-500 text-lg sm:text-xl mb-1">Status Code: 404</h1>
            <p className="text-red-500 text-sm sm:text-base md:text-lg text-center">
              Categories: animal, career, celebrity, dev, explicit, fashion, food, history, money, movie, music, political, religion, science, travel.
            </p>
          </div>
        );
      })
      
})
const slice=createSlice({
    name:"joke",
    initialState,
    reducers:{
        
    },extraReducers:(bulid)=>{
        bulid.addCase(list.pending,function(){
            console.log('loading...')
        }).addCase(list.fulfilled,function(State,action){
            State.count=action.payload
        })
    }
})
export default slice
export {list}