import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

const Register = () => {
  return (
    <>
      <Stack sx={{ mb: 5, position: "relative" }} spacing={2}>
        <Typography variant="h4">Get Strated with chat App</Typography>
      
      <Stack direction={"row"} spacing={0.5}>
      <Typography>
        Already Have An Account?
      </Typography>
      <Link component={RouterLink} to="/auth/login" variant="subtitle2" >
       Sign In
      </Link>
      </Stack>
      {/* Register Form */}
      <RegisterForm/>
      <Typography  component={"div"} sx={{color:"text.secondary",mt:3,typography:"caption",textAlign:"center"}} >
        {"By signing up ,I agree to"}
        <Link underline="always" color={"text.primary"}>
        Terms of service
        </Link>
        {"and"}
        <Link underline="always" color={"text.primary"}>
        Privacy Policy
        </Link>
      </Typography>
      <AuthSocial/>
      </Stack>
    </>
  );
};

export default Register;
