import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "../../components/hook-form";
import { set, useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";

const ProfileForm = () => {
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    bio: Yup.string().required("Bio can't be empty"),
    avatarUrl: Yup.string().required("Avatar can't be empty"),
  });
  const defaultValues = {
    name: "Hemant",
    bio: "Hey i love coding",
  };
  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const value = watch();
  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newfile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue("avatarUrl", newfile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        message: error.message,
      });
    }
  };
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <Stack spacing={3}>
          {!!errors.afterSubmit && (
            <Alert severity="error">{errors.afterSubmit.message}</Alert>
          )}

          <RHFTextField
            name="name"
            label="Full Name"
            helperText={"This name is visible to all of your Contacts"}
          />
          <RHFTextField multiline rows={4} maxRows={6} name="bio" label="Bio" />
        </Stack>
        <Stack direction={"row"} justifyContent={"end"}>
          <Button color="inherit" size="large" type="submit" variant="outlined">
            Save
          </Button>
        </Stack>
      </Stack>
    </FormProvider>
  );
};

export default ProfileForm;
