import { Stack } from "@mui/material";

import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar.jsx";
import { useSelector } from "react-redux";
const DashboardLayout = () => {
  const {isLoggedIn}=useSelector((state)=>state.auth)
  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }
  return (
    <Stack
      direction={"row"}
      sx={{ display: "flex", width: "100%", height: "100%" }}
    >
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
