import { faker } from "@faker-js/faker";
import {
  alpha,
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  InputBase,
  Stack,
  styled,
  Typography,
  Badge,
  useTheme,
} from "@mui/material";
import { ArchiveBox, CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from "react";
import { ChatList } from "../../data";
import { SimpleBarStyle } from "../../components/Scrollbar";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const ChatElemet = ({ id, img, name, msg, time, unread, pinned, online }) => {
    const theme=useTheme()
    console.log(theme.palette.background.default);
    
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.mode==="light"? "#ffff":theme.palette.background.paper,
      }}
      p={2}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
      >
        <Stack direction={"row"} spacing={2}>
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={img} />
            </StyledBadge>
          ) : (
            <Avatar src={img} />
          )}
        </Stack>
        <Stack direction={"column"} spacing={0.3}>
          <Typography variant="subtitle2">{name}</Typography>
          <Typography variant="caption">{msg}</Typography>
        </Stack>
        <Stack spacing={2} alignItems={"center"}>
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={2}></Badge>
        </Stack>
      </Stack>
    </Box>
  );
};

function Chats() {
    const theme=useTheme()
  return (
    <Box
      sx={{
        position: "relative",
        width: 320,
        backgroundColor: theme.palette.mode==="light"? "#ffff":theme.palette.background.default,
        boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      }}
    >
      <Stack p={3} spacing={2} height={"100vh"}>
        <Stack
          direction="row"
          alignContent={"center"}
          justifyContent="space-between "
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search...." />
          </Search>
        </Stack>
        <Stack spacing={1}>
          <Stack direction={"row"} alignItems={"center"} spacing={1.5}>
            <ArchiveBox />
            <Button>Archive</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          direction={"column"}
          spacing={2}
          sx={{ flexGrow: 1, overflow: "scroll", height: "100%" }}
        >
          <SimpleBarStyle timeout={500} clickOnTrack={false}>
            <Stack spacing={2}>
              <Typography variant="subtitle2" color={"#676767"}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElemet {...el} key={el.id} />;
              })}
            </Stack>
            <Stack spacing={2}>
              <Typography variant="subtitle2" color={"#676767"}>
                All Chats
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElemet {...el} key={el.id} />;
              })}
            </Stack>
          </SimpleBarStyle>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Chats;
