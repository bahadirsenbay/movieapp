import { applyMiddleware, createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import localForage from "localforage";
import {combinedReducers} from './reducers/combinedReducers'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
 
const persistConfig = {
  key: 'root',
  storage:localForage,
}
const logger = createLogger()
const persistedReducer = persistReducer(persistConfig, combinedReducers)
const store = createStore(persistedReducer, applyMiddleware(thunk, logger))
const persistor = persistStore(store)
export {
    store, persistor
}
