import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  useTheme,
} from "@mui/material";
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons, Profile_Menu } from "../../data/index.jsx";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch.jsx";

function SideBar() {
  const theme = useTheme();
  const { onToggleMode } = useSettings();
  const [index, setIndex] = useState();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        alignItems={"center"}
        justifyContent={"space-between"}
        width={"100%"}
        height={"100%"}
        spacing={3}
      >
        <Stack sx={{ alignItems: "center" }} spacing={2}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
            }}
          >
            <img width={"100%"} src={Logo} alt="Chat app" />
          </Box>
          <Stack
            spacing={3}
            sx={{ width: "max-content" }}
            direction={"column"}
            alignItems={"center"}
          >
            {Nav_Buttons.map((element) =>
              element.index === index ? (
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.main,
                    borderRadius: 1.5,
                  }}
                >
                  <IconButton
                    sx={{ width: "max-content", color: "#fff" }}
                    key={element.index}
                  >
                    {element.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  sx={{
                    width: "max-content",
                    color:
                      theme.palette.mode === "light"
                        ? "#000"
                        : theme.palette.text.primary,
                  }}
                  key={element.index}
                  onClick={() => {
                    setIndex(element.index);
                    console.log(element.index);
                  }}
                >
                  {element.icon}
                </IconButton>
              )
            )}

            <Divider sx={{ width: "48px" }} />
            {index === 3 ? (
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  borderRadius: 1.5,
                }}
              >
                <IconButton sx={{ color: "#fff" }}>
                  <Gear />
                </IconButton>
              </Box>
            ) : (
              <IconButton
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                }}
                onClick={() => setIndex(3)}
              >
                <Gear />
              </IconButton>
            )}
          </Stack>
        </Stack>
        <Stack alignContent={"center"} width={"100%"} spacing={4}>
          {/* switch */}
          <AntSwitch
            checked={theme.palette.mode === "dark"}
            onChange={() => {
              onToggleMode();
            }}
          />
          <Avatar
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            src={faker.image.avatar()}
          />
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
            anchorOrigin={{vertical:"bottom",horizontal:"right"}}
            transformOrigin={{vertical:"bottom",horizontal:"left"}}
          >
            <Stack spacing={1} px={1}>
              {Profile_Menu.map((el) => (
                <MenuItem key={el.title}>{el.title}</MenuItem>
              ))}
            </Stack>
          </Menu>
        </Stack>
      </Stack>
    </Box>
  );
}

export default SideBar;
