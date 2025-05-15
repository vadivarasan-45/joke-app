import {configureStore} from "@reduxjs/toolkit"
import slice from "./jokeslice"

const Store=configureStore({
  reducer:slice.reducer
})
export default Store