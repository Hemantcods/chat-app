import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const List = [
  {
    key: 1,
    title: "Mark as unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 2,
    title: "Archive chat",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Pin chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    key: 4,
    title: "Search Chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    key: 5,
    title: "Next Chat",
    combination: ["Ctrl", "Tab"],
  },
  {
    key: 6,
    title: "New Group",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 7,
    title: "Increase speed of voice message",
    combination: ["Shift", "+"],
  },
  {
    key: 8,
    title: "Settings",
    combination: ["Cmd", "G"],
  },
  {
    key: 9,
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    key: 10,
    title: "Delete chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    key: 11,
    title: "Search",
    combination: ["Cmd", "F"],
  },
  {
    key: 12,
    title: "New Chat",
    combination: ["Cmd", "N"],
  },
  {
    key: 13,
    title: "Previous Chat",
    combination: ["Ctrl", "Shift", "Tab"],
  },
  {
    key: 14,
    title: "Profile & About",
    combination: ["Cmd", "P"],
  },
  {
    key: 15,
    title: "Decrease speed of voice message",
    combination: ["Shift", "-"],
  },
  {
    key: 16,
    title: "Emoji Panel",
    combination: ["Cmd", "E"],
  },
  {
    key: 17,
    title: "Sticker Panel",
    combination: ["Cmd", "S"],
  },
];
const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        onClose={handleClose}
        keepMounted
        TransitionComponent={Transition}
        sx={{ p: 4 }}
      >
        <DialogTitle>Keybooard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {List.map(({ key, title, combination }) => (
              <Grid item xs={6} key={key}>
                <Stack
                  sx={{ width: "100%" }}
                  justifyContent={"space-between"}
                  spacing={3}
                  direction={"row"}
                  alignItems={"center"}
                >
                  <Typography variant="caption" sx={{ fontSize: 14 }}>
                    {title}
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    {combination.map((el,i) => {
                      return (
                        <Button key={i}
                          disabled
                          variant="contained"
                          sx={{ color: "#212121" }}
                        >
                          {el}
                        </Button>
                      );
                    })}
                  </Stack>
                </Stack>
              </Grid>   
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
            <Button variant={"contained"} onClick={handleClose} >Ok</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Shortcuts;
