import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import AuthSocial from "../../sections/auth/AuthSocial";

const Login = () => {
  return (
    <>
      <Stack sx={{ mb: 5, position: "relative" }} spacing={2}>
        <Typography variant="h4">Login Here</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">New User?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create new account
          </Link>
        </Stack>
        {/* Login Form  */}
        {/* Auth Social  */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
