import { createSlice } from "@reduxjs/toolkit";

// import { dispatch } from "../store";

const initialState = {
  SideBar: {
    open: false,
    type: "CONTACT", //can be CONTACT,SHARED
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state, action) {
      state.SideBar.open = !state.SideBar.open;
    },
    updateSidebarType(state, action) {
      state.SideBar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

export function ToggleSidebar() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.toggleSidebar());
  };
}

export function UpdateSidebarType(type) {
  return async (dispatch, getState) => {
    dispatch(
      slice.actions.updateSidebarType({
        type,
      })
    );
  };
}
