import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { CaretLeft } from "phosphor-react";
import React from "react";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forgot Your Password
        </Typography>
        <Typography sx={{ color: "text.secondary" }}>
          Please enter your new password
        </Typography>
      </Stack>
      {/* New password Form*/}
      <NewPasswordForm />

      <Link
        component={RouterLink}
        to={"/auth/login"}
        color={"inherit"}
        variant="subtitle2"
        sx={{ mt: 3, mx: "auto", alignItems: "center", display: "inline" }}
      >
        <CaretLeft />
        Back to Login
      </Link>
    </>
  );
};

export default NewPassword;
