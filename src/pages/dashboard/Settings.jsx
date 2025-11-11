import { faker } from "@faker-js/faker";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Bell,
  CaretLeft,
  Image,
  Info,
  Key,
  Keyboard,
  Lock,
  Note,
  PencilCircle,
} from "phosphor-react";
import React from "react";

const Settings = () => {
  const theme = useTheme();

  const List = [
    {
      key: 0,
      icon: <Bell size={20} />,
      title: "Notifications",
      onclick: () => {},
    },
    {
      key: 1,
      icon: <Lock size={20} />,
      title: "Privacy",
      onclick: () => {},
    },
    {
      key: 2,
      icon: <Key size={20} />,
      title: "Security",
      onclick: () => {},
    },
    {
      key: 3,
      icon: <PencilCircle size={20} />,
      title: "Theme",
      //   onClick: handleOpenTheme,
      onclick: () => {},
    },
    {
      key: 4,
      icon: <Image size={20} />,
      title: "Chat Wallpaper",
      onclick: () => {},
    },
    {
      key: 5,
      icon: <Note size={20} />,
      title: "Request Account Info",
      onclick: () => {},
    },
    {
      key: 6,
      icon: <Keyboard size={20} />,
      title: "Keyboard Shortcuts",
    //   onclick: handleOpenShortcuts,
    onclick:()=>{}
    },
    {
      key: 7,
      icon: <Info size={20} />,
      title: "Help",
      onclick: () => {},
    },
  ];
  return (
    <Stack direction={"row"} width={"100%"}>
      {/* Left Panel */}
      <Box
        sx={{
          overflowY: "auto",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          height: "100vh",
          width: 320,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background,
        }}
      >
        <Stack p={4} spacing={5}>
          {/* Header */}
          <Stack spacing={3} direction={"row"} alignItems={"center"}>
            <IconButton>
              <CaretLeft size={24} color="#4B4B4B" />
            </IconButton>
            <Typography variant="h6">Settings</Typography>
          </Stack>
          {/* Profile */}
          <Stack direction={"row"} alignItems={"center"} spacing={3}>
            <Avatar
              sx={{ width: 56, height: 56 }}
              src={faker.image.avatar()}
              alt={faker.person.fullName()}
            />
            <Stack spacing={0.5}>
              <Typography variant="article">
                {faker.person.fullName()}
              </Typography>
              <Typography variant="body1">{faker.word.words()}</Typography>
            </Stack>
          </Stack>
          {/* List of Options */}
          <Stack spacing={4}>
            {List.map(({key,icon,title,onclick}) => 
              <>
              <Stack onclick={onclick} sx={{cursor:"pointer"}} key={key} spacing={1}>
                <Stack direction={"row"} spacing={2} alignItems={"center"}>
                    {icon}
                    <Typography variant="body2">
                        {title}
                    </Typography>
                </Stack>
                {key!==7 && <Divider/>}
              </Stack>
              </>
        )}
          </Stack>
        </Stack>
      </Box>
      {/* Right Panel */}
    </Stack>
  );
};

export default Settings;
