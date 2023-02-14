import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/products/productSlice";
import ModalReducer from "./features/modal/modalSlice";
import AuthReducer from "./features/auth/authSlice";

export const store = configureStore({
	reducer: {
		products: productReducer,
		modal: ModalReducer,
		auth: AuthReducer,
	},
});
