import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import categoriesReducer from "./categories/categoriesSlice";
import productsReducer from "./products/productsSlice";
import cartReducer from "./cart/cartSlice";
import navbarReducer from "./navbar/navbarSlice";
import modalReducer from "./modal/modalSlice"

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  navbar: navbarReducer,
  modal: modalReducer
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});

export const persistor = persistStore(store);