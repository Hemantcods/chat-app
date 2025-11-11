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

function Message({menu}) {
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
                  return <MediaMsg el={el} menu={menu} />;

                case "doc":
                  return <DocMsg el={el} menu={menu} />;

                case "link":
                  // Link message
                  return <LinkMsg el={el} menu={menu} />;

                case "reply":
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                  return <TextMessage el={el} menu={menu} />;
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
