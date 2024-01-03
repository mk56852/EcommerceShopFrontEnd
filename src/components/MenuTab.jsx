import React from "react";
import { menuItemsNames, menuItems } from "../models/Data";
import HoverMenu from "material-ui-popup-state/HoverMenu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  usePopupState,
  bindHover,
  bindMenu,
} from "material-ui-popup-state/hooks";
import {
  MenuItem,
  Divider,
  Button,
  Box,
  Grid,
  Typography,
} from "@mui/material";

import { Stack } from "@mui/system";

import SocialMediaContactList from "./SocialMediaContactList";

function ResponsifMenuTabWithContactIcons() {
  return (
    <Box display={{ xs: "none", md: "flex" }} px={14}>
      <MenuTab />
    </Box>
  );
}

function MenuTab() {
  return (
    <Stack direction={"row"} spacing={6}>
      {menuItemsNames.map((name) => (
        <MenuHoverItem name={name} key={name} items={menuItems[name]} />
      ))}
    </Stack>
  );
}

function MenuHoverItem({ name, items }) {
  const size = items["items"].length;
  const popupState = usePopupState({
    variant: "popover",
    popupId: name,
  });
  if (size === 0) {
    return (
      <Button
        disableRipple
        sx={{ "&:hover": { backgroundColor: "transparent" } }}
        aria-haspopup="true"
      >
        <Typography
          variant="subtitle1"
          color={"primary.main"}
          fontWeight={"bolder"}
        >
          {name}
        </Typography>
      </Button>
    );
  }
  return (
    <>
      <Button
        disableRipple
        sx={{
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
        aria-haspopup="true"
        endIcon={<ArrowDropDownIcon />}
        {...bindHover(popupState, { openDelay: 600 })}
      >
        <Typography
          variant="subtitle1"
          color={"primary.main"}
          fontWeight={"bolder"}
        >
          {name}
        </Typography>
      </Button>
      <HoverMenu
        transitionDuration={700}
        elevation={1}
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <SpecificMenuItem
          items={items}
          onClick={popupState.close}
        ></SpecificMenuItem>
      </HoverMenu>
    </>
  );
}
function SpecificMenuItem({ items, onClick }) {
  return (
    <Box width={"60vw"} height={"30vh"} m={2}>
      <Grid container spacing={3}>
        {items["items"].map((item, index) => (
          <Grid item flex={"auto"} key={item["id"]}>
            <Stack direction={"column"}>
              <MenuItem onClick={onClick}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {item.name}
                </Typography>
              </MenuItem>
              <Divider />
              {item["value"].map((val, index) => (
                <MenuItem key={index} onClick={onClick}>
                  <Typography key={index} variant="subtitle1">
                    {val}
                  </Typography>
                </MenuItem>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ResponsifMenuTabWithContactIcons;
