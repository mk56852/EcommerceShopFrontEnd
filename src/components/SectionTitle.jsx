import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

function SectionTitle({ title, subTitle }) {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      spacing={1}
      py={4}
    >
      <Typography
        variant="h3"
        fontFamily={"cursive"}
        fontWeight={"boler"}
        color={"primary.main"}
      >
        {title}
      </Typography>
      <Typography
        variant="h5"
        fontFamily={"serif"}
        fontWeight={"boler"}
        color={"color6.main"}
      >
        {subTitle}
      </Typography>
      <Box height={30}></Box>
      <Divider variant="middle" sx={{ width: "70vw", borderWidth: 0.9 }} />
    </Stack>
  );
}

export default SectionTitle;
