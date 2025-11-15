import { Avatar, Badge, Box, Stack, Typography, useTheme } from "@mui/material";
import StyledBadge from "./StyledBadge";



const ChatElemet = ({ id, img, name, msg, time, unread, pinned, online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
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

export default ChatElemet;