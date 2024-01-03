import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { AppLogo } from "./NavigationBar";
import { Icon } from "@iconify/react";
import SocialMediaContactList from "./SocialMediaContactList";

function Footer() {
  const theme = useTheme();
  return (
    <Box>
      <Stack direction={"row"} spacing={25} alignItems={"center"}>
        <Stack direction={"column"} spacing={1} alignItems={"center"}>
          <AppLogo />
          <Box height={4} />
          <Typography variant="body1" color={"primary"}>
            We are always there for you
          </Typography>
          <Stack direction={"row"} alignItems={"center"}>
            <Icon
              icon="ic:baseline-headphones"
              fontSize={60}
              color={theme.palette.primary.main}
            />
            <Typography
              variant="h6"
              fontWeight={"bolder"}
              color={"primary.main"}
            >
              +216 23816240
            </Typography>
          </Stack>
          <SocialMediaContactList />
        </Stack>
        <FooterSectionItem title={"CATEGORIES"} />
        <FooterSectionItem title={"ABOUT US"} />
        <FooterSectionItem title={"FOLLOW US"} />
      </Stack>
    </Box>
  );
}

function FooterSectionItem({ title, items }) {
  return (
    <Stack flexDirection={"column"} spacing={3}>
      <Typography
        variant="subtitle1"
        fontWeight={"bolder"}
        color={"primary.main"}
      >
        {title}
      </Typography>
      <Stack direction={"column"} spacing={1}>
        <Divider />
        <Typography variant="subtitle1">{"item 1"}</Typography>
        <Typography variant="subtitle1">{"item 2"}</Typography>
        <Typography variant="subtitle1">{"item 3"}</Typography>
        <Typography variant="subtitle1">{"item 4"}</Typography>
      </Stack>
    </Stack>
  );
}

export default Footer;
