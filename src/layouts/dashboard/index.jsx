import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  styled,
  Switch,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";
import { Nav_Buttons } from "../../data/index.jsx";
import { Gear } from "phosphor-react/dist";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings.jsx";

const DashboardLayout = () => {
  const { onToggleMode } = useSettings();

  const AntSwitch = styled(Switch)(({ theme }) => ({
    width: 40,
    height: 20,
    padding: 1,
    display: "flex",
    "&:active": {
      "& .MuiSwitch-thumb": {
        width: 40,
      },
      "& .MuiSwitch-switchBase.Mui-checked": {
        transform: "translateX(9px)",
      },
    },
    "& .MuiSwitch-switchBase": {
      padding: 2,
      "&.Mui-checked": {
        transform: "translateX(20px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor: "#1890ff",
          ...theme.applyStyles("dark", {
            backgroundColor: "#177ddc",
          }),
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
      width: 16,
      height: 16,
      borderRadius: 8,
      transition: theme.transitions.create(["width"], {
        duration: 200,
      }),
    },
    "& .MuiSwitch-track": {
      borderRadius: 20 / 2,
      opacity: 1,
      backgroundColor: "rgba(0,0,0,.25)",
      boxSizing: "border-box",
      ...theme.applyStyles("dark", {
        backgroundColor: "rgba(255,255,255,.35)",
      }),
    },
  }));

  const theme = useTheme();
  console.log(theme);
  const [index, setIndex] = useState(0);
  return (
    <Stack direction={"row"} sx={{ display: "flex", width: "100%", height: "100%" }}>
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
            <Avatar src={faker.image.avatar()} />
          </Stack>
        </Stack>
      </Box>
      <Outlet/>
    </Stack>
  );
};

export default DashboardLayout;
