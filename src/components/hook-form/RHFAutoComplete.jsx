import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Autocomplete, TextField } from "@mui/material";
import { tr } from "@faker-js/faker";

RHFTAutoComplete.prototype={
    name:PropTypes.string,
    label:PropTypes.string,
    helperText:PropTypes.node
}

export default function RHFTAutoComplete({ name,label, helperText, ...other }) {
  const { control,setValue } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Autocomplete
          {...field}
          fullWidth
          error={!!error}
          
          onChange={(event,newValue)=>setValue(name,newValue,{shouldValidate:true})}
          {...other}
          renderInput={(params)=>(
            <TextField label={label} error={!!error} helperText={error ? error.message : helperText} {...params} />
          )}
        />
      )}
    />
  );
}
