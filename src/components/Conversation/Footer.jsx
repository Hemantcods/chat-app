import {
  Box,
  IconButton,
  InputAdornment,
  Stack,
  useTheme,
} from "@mui/material";
import { LinkSimple, PaperPlaneTilt, Smiley } from "phosphor-react";
import StyledInput from "../StyledInput";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useState } from "react";

function ChatInput({setopenPicker}) {
  return (
    <StyledInput
      fullWidth
      placeholder="write a message..."
      variant="filled"
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment>
            <IconButton>
              <LinkSimple />
            </IconButton>
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment>
            <IconButton>
              <Smiley onClick={()=>{setopenPicker((prev)=>(!prev))}} />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

function Footer() {
  const theme = useTheme();
  const [openPicker, setopenPicker] = useState(false);
  return (
    <Box
      p={2}
      sx={{
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={3}>
        <Stack sx={{ width: "100%" }}>
          <Box
            sx={{
              display: openPicker ? "inline" : "none",
              zIndex: 10,
              position: "fixed",
              bottom: 81,
              right: 100,
            }}
          >
            <Picker data={data} theme={theme.palette.mode} />
          </Box>

          {/* Chat input */}
          <ChatInput setopenPicker={setopenPicker} />
        </Stack>

        <Box
          sx={{
            height: "48px",
            width: "48px",
            backgroundColor: theme.palette.primary.main,
            borderRadius: 1.5,
          }}
        >
          <Stack
            height={"100%"}
            width={"100%"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <IconButton>
              <PaperPlaneTilt color="#fff" />
            </IconButton>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default Footer;
