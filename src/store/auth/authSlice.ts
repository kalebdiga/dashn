import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  user: any | null;
  token: string | null;
}

const initialState: AuthState = {
  user: sessionStorage.getItem("data") || null,
  token: sessionStorage.getItem("token") || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
      sessionStorage.setItem("data", action.payload);
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
      sessionStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("data");

      window.location.href = "/";
    },
  },
});

export const { setUser, setToken, logout } = authSlice.actions;
export default authSlice.reducer;
