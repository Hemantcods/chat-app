import {
  Box,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
  useTheme,
} from "@mui/material";
import { CaretLeft, X } from "phosphor-react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";
import React from "react";
import { fa, faker } from "@faker-js/faker";
import { Shared_Docs,Shared_Links } from "../data";
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes";

const SharedMessage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode == "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          {/* Header */}
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            spacing={3}
          >
            <IconButton
              onClick={() => {
                dispatch(UpdateSidebarType("CONTACT"));
              }}
            >
              <CaretLeft />
            </IconButton>
            <Typography variant="subtitle2">Shared Messages</Typography>
          </Stack>
        </Box>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            sx={{px:2,pt:2}}
          >
            <Tab label="Media" />
            <Tab label="Links" />
            <Tab label="Docs" />
          </Tabs>

        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
          }}
          p={3}
          spacing={value===1? 1:3}
        >
          {(()=>{
            switch (value) {
              case 0:
                // Images
                return <Grid container spacing={2}>
                  {
                    [0,1,2,3,4,5,6].map((el)=>{
                      return <Grid item xs={4}>
                        <img src={faker.image.avatar()} alt={faker.person.fullName()} />
                      </Grid> 
                    })
                  }
                </Grid>
                break;
              case 1:
                // Links
                return Shared_Links.map((el)=>{return <LinkMsg el={el} />})
              case 2:
                // Docs
                return Shared_Docs.map((el)=>{return <DocMsg el={el} />})

            
              default:
                break;
            }
          })()}
        </Stack>
      </Stack>
    </Box>
  );
};

export default SharedMessage;
