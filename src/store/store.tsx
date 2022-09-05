import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import rootReducer from '../rootReducer'

const sagaMiddleware = createSagaMiddleware()
let store = configureStore({
  reducer: rootReducer,
 
})
export { store }

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
