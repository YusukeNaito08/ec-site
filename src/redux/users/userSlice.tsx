import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  isLoggedIn: boolean;
  userData: string;
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoggedIn: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    setUserLoggedOut: (state) => {
      state.isLoggedIn = false;
      state.userData = "";
    },
  },
});

export const { setUserLoggedIn, setUserLoggedOut } = userSlice.actions;
export default userSlice.reducer;
