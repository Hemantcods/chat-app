import { Box, Stack, useTheme } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Message from "./Message";

function Conversation() {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"} >
      {/* chat header */}
      <Header />
      {/* messgae */}
      <Box width={"100%"} sx={{ flexGrow: 1,overflow:"auto",scroll }}>
        <Message menu={true} />
      </Box>
      {/* chat footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
