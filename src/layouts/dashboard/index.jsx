import {Stack } from "@mui/material";

import { Outlet } from "react-router-dom";
import SideBar from "./SideBar.jsx";

const DashboardLayout = () => {
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
