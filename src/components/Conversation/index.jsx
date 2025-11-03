import { Box, Stack, useTheme } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";

function Conversation() {
  const theme = useTheme();
  return (
    <Stack height={"100%"} maxHeight={"100vh"}>
      {/* chat header */}
      <Header />
      {/* messgae */}
      <Box width={"100%"} sx={{ flexGrow: 1 }}></Box>
      {/* chat footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
