import { createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
};
const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      (state.isLoggedIn = action.payload.isLoggedIn),
        (state.token = action.payload.token);
    },
    SignOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

// reducer
export default slice.reducer;

// login
export function LoginUser(formvalues) {
  // formvalues=>{email,password}
  return async (dispatch, getState) => {
    await axios
      .post(
        "/api/auth/login",
        {
          ...formvalues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
        dispatch(slice.actions.login({
            isLoggedIn:true,
            token:response.data.token
        }))
      })
      .catch(function (error) {
        console.log(error);
      });
  };
}

//Signout
export function SignOutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.SignOut());
  };
}

// forgot password
export function ForgotPassword(formvalues) {
  return async (dispatch, getState) => {
    await axios.post("/api/auth/forgot-password",{
      ...formvalues
    },{
      headers:{
        "Content-Type":"application/json"
      }
    }).then((response)=>{
      console.log("success",response)
    }).catch((error)=>{
      console.log(error)
    })
  }
}