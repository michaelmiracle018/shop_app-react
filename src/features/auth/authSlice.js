import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://fakestoreapi.com/auth";

const initialState = {
	message: "",
	username: "",
	error: "",
	token: "",
	isLoading: false,
};

export const registerUser = createAsyncThunk(
	"register/registerUser",
	async (body, thunkAPI) => {
		console.log();
		try {
			const response = await axios.post(`${BASE_URL}/register`, { body });
			console.log(response);
			return response.data;
		} catch (error) {
			console.log(error);
		}
	},
);

export const loginUser = createAsyncThunk(
	"login/loginUser",
	async ({ email, password }, thunkAPI) => {
		console.log(email, password);
		try {
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
			};
			const response = await axios.post(
				`${BASE_URL}/login`,
				{ email, password },
				config,
			);
			console.log(response);
			// return response.data;
		} catch (error) {
			console.log(error);
		}
	},
);

const authSlice = createSlice({
	name: "User",
	initialState,
	reducers: {
		addToken: (state, action) => {
			state.token = localStorage.getItem("token");
		},
		addUser: (state, action) => {
			state.token = localStorage.getItem("user");
		},
		logout: (state, action) => {
			state.token = null;
			localStorage.clearItem("token");
		},
	},
	extraReducers: (builder) => {
		builder
			// Register
			.addCase(registerUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(
				registerUser.fulfilled,
				(state, { payload: { error, message } }) => {
					state.isLoading = false;
					if (error) {
						state.error = error;
					} else {
						state.message = message;
					}
				},
			)
			.addCase(registerUser.rejected, (state) => {
				state.isLoading = false;
			})
			// Login
			.addCase(loginUser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(
				loginUser.fulfilled,
				(state, { payload: { error, message, token, user } }) => {
					state.isLoading = false;
					if (error) {
						state.error = error;
					} else {
						state.message = message;
						state.user = user;
						state.token = token;

						localStorage.setItem("message", message);
						localStorage.setItem("user", JSON.stringify(user));
						localStorage.setItem("token", token);
					}
				},
			)
			.addCase(loginUser.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

export const { addToken, addUser, logout } = authSlice.actions;

export default authSlice.reducer;
