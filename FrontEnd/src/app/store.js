import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/rootreducer'
export default configureStore({
  reducer: rootReducer,
})