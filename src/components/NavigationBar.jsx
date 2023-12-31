import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../utils/assets/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";

function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }} bgcolor={"transparent"} px={{ xs: 2, md: 7 }}>
      <AppBar
        position="sticky"
        sx={{ backgroundColor: "transparent" }}
        elevation={0}
      >
        <Stack direction={"column"} spacing={2}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box display={{ xs: "flex", md: "none" }}>
              <IconButton
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon
                  sx={{ fontSize: "40px", stroke: "#ffffff", strokeWidth: 1 }}
                />
              </IconButton>
            </Box>
            <Box display={"flex"}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "150px", height: "120px" }}
              />
            </Box>
            <Box display={{ xs: "none", md: "flex" }} width={"45vw"}>
              <SearchItem />
            </Box>

            <AppBarIconsList
              type="shop"
              color="primary"
              size="40px"
              sizeForSmallDevices={"30px"}
            />
          </Stack>
          <Box
            display={{ xs: "flex", md: "none" }}
            width={"80vw"}
            alignSelf={"center"}
          >
            <SearchItem />
          </Box>
        </Stack>
      </AppBar>
    </Box>
  );
}

function SearchItem() {
  return (
    <Box width={"100%"}>
      <Stack direction={"row"}>
        <Input
          placeholder="Search something here"
          type="text"
          disableUnderline
          sx={{
            height: "50px",
            border: "1px dotted black",
            borderRadius: "50px 0 0 50px",
            paddingLeft: 2,
          }}
          fullWidth={true}
        ></Input>
        <Button
          variant="contained"
          size={"meduim"}
          sx={{ width: "30%", borderRadius: "0 50px 50px 0" }}
        >
          Search
        </Button>
      </Stack>
    </Box>
  );
}

function AppBarIconsList({ size, sizeForSmallDevices }) {
  return (
    <Stack direction={"row"} spacing={2}>
      <IconButton
        variant="outlined"
        disableRipple
        sx={{ width: { xs: sizeForSmallDevices, md: size } }}
      >
        <PortraitRoundedIcon
          color="secondary"
          sx={{
            fontSize: { xs: sizeForSmallDevices, md: size },
            stroke: "white",
            strokeWidth: 0.5,
          }}
        />
      </IconButton>
      <IconButton
        variant="outlined"
        disableRipple
        sx={{ width: { xs: sizeForSmallDevices, md: size } }}
      >
        <Badge badgeContent={"1"} color="primary">
          <FavoriteBorderOutlined
            color="secondary"
            sx={{
              fontSize: { xs: sizeForSmallDevices, md: size },
              stroke: "white",
              strokeWidth: 0.5,
            }}
          />
        </Badge>
      </IconButton>
      <IconButton
        variant="outlined"
        disableRipple
        sx={{ width: { xs: sizeForSmallDevices, md: size } }}
      >
        <Badge badgeContent={"2"} color="primary">
          <ShoppingCartOutlinedIcon
            color="secondary"
            sx={{
              fontSize: { xs: sizeForSmallDevices, md: size },
              stroke: "white",
              strokeWidth: 0.5,
            }}
          />
        </Badge>
      </IconButton>
    </Stack>
  );
}

function AppBarIcons({ type, color, size, sizeForSmallDevices }) {
  return (
    <Box display="flex">
      {type == "account" && (
        <IconButton
          variant="outlined"
          disableRipple
          sx={{ width: { xs: sizeForSmallDevices, md: size } }}
        >
          <AccountCircleOutlinedIcon
            sx={{
              stroke: "white",
              strokeWidth: 0.5,
            }}
          />
        </IconButton>
      )}
      {type == "shop" && (
        <Button
          startIcon={<ShoppingCartOutlinedIcon />}
          variant="outlined"
          disableRipple
          sx={{ width: { xs: sizeForSmallDevices, md: size } }}
        >
          {type}
        </Button>
      )}
    </Box>
  );
}

export default NavigationBar;
