import React from "react";
import Chats from "./Chats";
import { Box, Stack, useTheme } from "@mui/material";
import Conversation from "../../components/Conversation";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessage from "../../components/SharedMessage";
import StarredMessage from "../../components/StarredMessage";

const GeneralApp = () => {
  const theme = useTheme();
  const {SideBar}=useSelector((store)=>store.app)
  console.log(SideBar);
  
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: SideBar.open? "calc(100vw - 740px)":"calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.default,
        }}
      >
        {/* Conversation */}
        <Conversation />
      </Box>
      {/* Contact */}
      {SideBar.open && (()=>{
        switch(SideBar.type){
          case "CONTACT":
            return <Contact/>
          case "STARRED":
            return <StarredMessage/>
          case "SHARED":
            return <SharedMessage/>
        }
      })()} 
    </Stack>
  );
};

export default GeneralApp;
