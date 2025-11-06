import { Box, Stack } from "@mui/material";
import React from "react";
import { Chat_History } from "../../data";
import {
  DocMsg,
  LinkMsg,
  MediaMsg,
  ReplyMsg,
  TextMessage,
  TimeLine,
} from "./MsgTypes";

function Message() {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divider":
              return <TimeLine el={el} />;

            case "msg":
              switch (el.subtype) {
                case "img":
                  // img message
                  return <MediaMsg el={el} />;

                case "doc":
                  return <DocMsg el={el} />;

                case "link":
                  // Link message
                  return <LinkMsg el={el} />;

                case "reply":
                  return <ReplyMsg el={el} />;

                default:
                  return <TextMessage el={el} />;
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
