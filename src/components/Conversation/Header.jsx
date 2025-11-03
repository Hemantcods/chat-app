import { useTheme } from "@emotion/react";
import { faker } from "@faker-js/faker";
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { CaretDown, MagnifyingGlass, Phone, VideoCamera } from "phosphor-react";
import React from "react";
import StyledBadge from "../StyledBadge";

function Header() {
  const theme = useTheme();

  return (
    <Box
      p={2}
      sx={{
        height: 100,
        width: "100%",
        backgroundColor:
          theme.palette.mode === "light"
            ? "#f8faff"
            : theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        sx={{ width: "100%", height: "100%" }}
      >
        <Stack direction={"row"} spacing={2}>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt={faker.person.fullName()}
                src={faker.image.avatar()}
              />
            </StyledBadge>
          </Box>

          <Stack spacing={0.2}>
            <Typography variant="subtitle2">
              {faker.person.fullName()}
            </Typography>
            <Typography variant="caption">Online</Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <IconButton>
            <VideoCamera />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
          <IconButton>
            <MagnifyingGlass />
          </IconButton>
          <Divider orientation="vertical" flexItem />
          <IconButton>
            <CaretDown />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Header;
