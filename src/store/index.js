import  {configureStore} from '@reduxjs/toolkit'
import cartSlice from './cart-Slice'
import uiSlice from './ui-Slice'

const store = configureStore({
    reducer:{
        ui:uiSlice.reducer,
        cart:cartSlice.reducer
    }
})

export default store

