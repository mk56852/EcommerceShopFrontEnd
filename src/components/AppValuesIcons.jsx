import { Icon } from "@iconify/react";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";

function AppValuesIcon({ icon, header, body, size }) {
  const th = useTheme();
  return (
    <Box width={"100%"} height={"100%"}>
      <Stack direction={"column"} alignItems={"center"}>
        <Box py={1}>
          <Icon icon={icon} fontSize={size} color={th.palette.primary.main} />
        </Box>
        <Typography variant="body2" color={"primary.main"} fontWeight={"bold"}>
          {header}
        </Typography>
        <Typography variant="body2" color={"color6.main"}>
          {body}
        </Typography>
      </Stack>
    </Box>
  );
}

export default AppValuesIcon;
