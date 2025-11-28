import { Stack } from "@mui/material";

import { Navigate, Outlet } from "react-router-dom";
import SideBar from "./SideBar.jsx";
const DashboardLayout = () => {
  const isAuthenticated = true;
  if (!isAuthenticated) {
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
