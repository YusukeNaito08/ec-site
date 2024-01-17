import { createSlice } from "@reduxjs/toolkit";

interface UserData {
  uid: string;
  firstName: string;
  lastName: string;
  firstNameKana: string;
  lastNameKana: string;
  email: string;
  tel: string;
  zip: string;
  prefectures: string;
  municipalities: string;
  street: string;
  apartment: string;
}

interface UserState {
  isLoggedIn: boolean;
  userData: UserData | null;
}

const initialState: UserState = {
  isLoggedIn: false,
  userData: null,
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
      state.userData = null;
    },
  },
});

export const { setUserLoggedIn, setUserLoggedOut } = userSlice.actions;
export default userSlice.reducer;
