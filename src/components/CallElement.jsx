import { faker } from "@faker-js/faker";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import StyledBadge from "./StyledBadge";
import { ArrowDown, ArrowDownLeft, ArrowUpRight, Phone } from "phosphor-react";

const CallLogElement = ({ online=true, name, time = "00:00", incoming, missed }) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? "#ffff"
              : theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          spacing={2}
        >
          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  src={faker.image.avatar()}
                  alt={faker.person.fullName}
                />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} alt={faker.person.fullName} />
            )}
            <Stack direction={"column"} spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              <Stack direction={"row"} alignItems={"center"} spacing={1}>
                {incoming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">
                    {time}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone color="green" />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = () => {};

export { CallElement, CallLogElement };
