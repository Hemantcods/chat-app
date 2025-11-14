import { Link as RouterLink } from 'react-router-dom'
import { Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { CaretLeft } from 'phosphor-react'
import ResetPasswordForm from '../../sections/auth/ResetPasswordForm'

const ResetPassword = () => {
  return (
    <>
    <Stack spacing={2} sx={{mb:5,position:"relative"}}>
        <Typography variant='h3' paragraph >
            Forgot Your Password
        </Typography>
        <Typography sx={{color:"text.secondary"}}>
            Please enter the email addres associated with your account and we will email you a link to reset your password.
        </Typography>
        {/* reset Password Form */}
            <ResetPasswordForm/>
        <Link component={RouterLink} to={"/auth/login"} color={"inherit"} variant='subtitle2' sx={{mt:3,mx:"auto",alignItems:"center",display:"inline"}}>
        <CaretLeft/>
        Back to Login
        </Link>
    </Stack>
    </>
  )
}

export default ResetPassword