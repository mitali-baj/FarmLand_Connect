// import { configureStore } from '@reduxjs/toolkit'
// import storage from "redux-persist/lib/storage";
// import {persistReducer} from "redux-persist";
// import {combineReducers} from "@reduxjs/toolkit";

// const persistConfig = {
//   key: "root",
//   version: 1,
//   storage
// };
// const reducer = combineReducers({
//   //favorites: favReducer,
// });
// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//     reducer: persistedReducer
// })
// export default store;

// // export default configureStore({
// //   reducer: {},
// // })
import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
//import rootReducer from "./reducers";
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const rootReducer = combineReducers({
      //favorites: favReducer,
    });

const persistConfig = {
      key: "root",
      version: 1,
      storage,
    };

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = legacy_createStore(persistedReducer,applyMiddleware());
const Persistor = persistStore(store);
export{Persistor};
export default store;