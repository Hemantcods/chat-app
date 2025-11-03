import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import { MediaMsg, TextMessage, TimeLine } from "./MsgTypes";

function Message() {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} />;
              break;
            case "msg":
              switch (el.subtype) {
                case "img":
                  // img message
                  return <MediaMsg el={el}/>
                  break;
                case "doc":
                  // doc message
                  break;
                case "link":
                  // Link message
                  break;
                case "reply":
                  // reply message
                  break;
                default:
                  return <TextMessage el={el} />
                  break;
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
}

export default Message;
