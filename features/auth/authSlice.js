import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: "",
};

export const fetchUser = createAsyncThunk("auth/fetchUser", async (token) => {
  const response = await fetch("http://localhost:8080/api/v1/user/me", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  // console.log(data);
  return data?.data;
});
export const googleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (data) => {
    const response = await fetch(
      "http://localhost:8080/api/v1/user/socialLogin",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const result = await response.json();
    if (result?.status == "success") {
      localStorage.setItem("accessToken", result?.token);
      return data;
    }
    return data;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.user = {
        email: "",
        role: "",
      };
    },
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isSuccess = true;
      state.isError = false;
      state.error = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.error = "";
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = payload;
        state.error = "";
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.error = action.error.message;
      })
      .addCase(googleLogin.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.error = "";
      })
      .addCase(googleLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = payload;
        state.error = "";
      })
      .addCase(googleLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.error = action.error.message;
      });
  },
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
