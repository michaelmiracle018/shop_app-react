import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";


const PRODUCT_URL = "https://fakestoreapi.com/products";
const CATEGORIES_URL = "https://fakestoreapi.com/products/categories";

const items =
	localStorage.getItem("shopItems") !== null
		? JSON.parse(localStorage.getItem("shopItems"))
		: [];

const setItemFunc = (item) => {
	localStorage.setItem("shopItems", JSON.stringify(item));
};

const initialState = {
	products: [],
	categories: [],
	cartBag: items,
	singleProduct: [],
	relatedCategory: [],
	isLoading: true,
	total: 0,
	totalCartPrice: 0,
};

export const fetchProducts = createAsyncThunk(
	"products/fetchProducts",
	async (name, thunkAPI) => {
		try {
			const response = await axios.get(PRODUCT_URL);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
);

export const fetchCategories = createAsyncThunk(
	"categories/fetchCategories",
	async () => {
		try {
			const response = await axios.get(CATEGORIES_URL);
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	},
);

// FETCH SINGLE PRODUCT
export const fetchSingleProduct = createAsyncThunk(
	"singleProduct/fetchSingleProduct",
	async (productId) => {
		try {
			const response = await axios.get(`${PRODUCT_URL}/${productId}`);
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	},
);

// FETCH SPECIFIC CATEGORY
export const fetchSpecificCategory = createAsyncThunk(
	"specificCategory/fetchSpecificCategory",
	async (category) => {
		try {
			const response = await axios.get(`${PRODUCT_URL}/category/${category}`);
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	},
);

// FETCH LIMIT
export const fetchLimit = createAsyncThunk(
	"limit/fetchLimit",
	async (limit) => {
		try {
			const response = await axios.get(`${PRODUCT_URL}?limit=${limit}`);
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	},
);

const productSlice = createSlice({
	name: "Product",
	initialState,
	reducers: {
		// ADD TO CART
		addToCart: (state, action) => {
			console.log(action.payload.id);
			const itemFoundInCart = state.cartBag.find(
				(item) => item.id === action.payload.id,
			);
			if (!itemFoundInCart) {
				state.cartBag.push({ ...action.payload, quantity: 1 });
				toast.success("Item Added To Cart.", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
			} else {
				itemFoundInCart.quantity = 1;
				console.log(itemFoundInCart.quantity);

				toast.error("Item Already In Cart.", {
					position: "top-right",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "light",
				});
			}

			setItemFunc(
				state.cartBag.map((item) => item),
			);
		},
		increaseCart(state, { payload }) {
			const cartItem = state.cartBag.find((item) => item.id === payload);
			cartItem.quantity = cartItem.quantity + 1;

			setItemFunc(
				state.cartBag.map((item) => item),
				cartItem.quantity,
			);
		},

		decreaseCart(state, { payload }) {
			const cartItem = state.cartBag.find((item) => item.id === payload);
			cartItem.quantity = cartItem.quantity - 1;

			setItemFunc(
				state.cartBag.map((item) => item),
				cartItem.quantity,
			);
			//* OR THIS CODE

			// state.cartBag.find((item) => {
			// 	if (item.id === payload) {
			// 		item.quantity -= 1;
			// 	}

			// });
			// state.cartBag.find((item) => {
			// 	if (item.quantity < 1) {
			// 		state.cartBag = state.cartBag.filter((item) => item.id !== payload);
			// 	}

			// });
		},
		clearCart: (state) => {
			state.cartBag = [];
			setItemFunc(
				state.cartBag.map((item) => item),
				(state.cartBag = []),
			);
		},
		removeItem: (state, action) => {
			const itemId = action.payload;
			state.cartBag = state.cartBag.filter((item) => item.id !== itemId);
			toast.success("Item Deleted.", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "light",
			});
			setItemFunc(
				state.cartBag.map((item) => item),
				(state.cartBag = state.cartBag.filter((item) => item.id !== itemId)),
			);
		},
		calculateTotals: (state) => {
			let total = 0;
			state.cartBag.forEach((item) => {
				total += item.quantity * item.price;
			});
			state.totalCartPrice = total;
			setItemFunc(
				state.cartBag.map((item) => item),
				state.totalCartPrice,
			);
		},
	},

	extraReducers: (builder) => {
		builder
			// FetchProducts
			.addCase(fetchProducts.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(fetchProducts.rejected, (state, ) => {
				state.isLoading = false;
			})
			// FetchCategories
			.addCase(fetchCategories.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchCategories.fulfilled, (state, action) => {
				state.isLoading = false;
				state.categories = action.payload;
			})
			.addCase(fetchCategories.rejected, (state, ) => {
				state.isLoading = false;
			})
			// FETCH SINGLE PRODUCT
			.addCase(fetchSingleProduct.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchSingleProduct.fulfilled, (state, action) => {
				state.isLoading = false;
				state.singleProduct = action.payload;
			})
			.addCase(fetchSingleProduct.rejected, (state, action) => {
				state.isLoading = false;
			})
			// FETCH SPECIFIC CATEGORY
			.addCase(fetchSpecificCategory.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchSpecificCategory.fulfilled, (state, action) => {
				state.isLoading = false;
				console.log(action.payload);
				state.products = action.payload;
				state.relatedCategory = action.payload;
			})
			.addCase(fetchSpecificCategory.rejected, (state, ) => {
				state.isLoading = false;
			})
			// FETCH LIMIT
			.addCase(fetchLimit.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(fetchLimit.fulfilled, (state, action) => {
				state.isLoading = false;
				state.products = action.payload;
			})
			.addCase(fetchLimit.rejected, (state, ) => {
				state.isLoading = false;
			});
	},
});

// console.log(productSlice);
export const {
	clearCart,
	removeItem,
	increaseCart,
	decreaseCart,
	calculateTotals,
	addToCart,
	products,
	cartBag,
	singleProduct,
} = productSlice.actions;

export default productSlice.reducer;
