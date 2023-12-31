import { Box, IconButton, Stack, useTheme } from "@mui/material";
import React from "react";

import { socialMediaList } from "../models/Data";
function SocialMediaContactList() {
  return (
    <Stack direction={"row"} width={"100%"} spacing={0}>
      {socialMediaList.map((item) => (
        <SocialMediaDiv color={item.color} size={40} link={item.link}>
          {item.child}
        </SocialMediaDiv>
      ))}
    </Stack>
  );
}

function SocialMediaDiv({ children, color, size, link, useDefault }) {
  const theme = useTheme();
  if (useDefault)
    return (
      <IconButton sx={{ fontSize: size }} disableRipple>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            display: "inherit",
            color: "inherit",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            width={size}
            height={size}
            bgcolor={theme.palette.primary.main}
            sx={{ borderRadius: "10px" }}
          >
            {children}
          </Box>
        </a>
      </IconButton>
    );
  else
    return (
      <IconButton sx={{ fontSize: size }} disableRipple>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: "none",
            display: "inherit",
            color: "inherit",
          }}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"center"}
            alignItems={"center"}
            width={size}
            height={size}
            sx={{ backgroundColor: color, borderRadius: "10px" }}
          >
            {children}
          </Box>
        </a>
      </IconButton>
    );
}

export default SocialMediaContactList;
