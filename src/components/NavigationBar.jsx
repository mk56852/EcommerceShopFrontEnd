import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import logo from "../utils/assets/logo.jpg";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import PortraitRoundedIcon from "@mui/icons-material/PortraitRounded";

function NavigationBar() {
  const theme = useTheme();
  return (
    <Box
      sx={{ flexGrow: 1 }}
      bgcolor={"transparent"}
      px={{ xs: 2, md: 7 }}
      py={2}
    >
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
            <AppLogo />
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
            pt={2}
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

function AppLogo() {
  const theme = useTheme();
  return (
    <Box display={"flex"}>
      <Avatar
        sx={{
          height: "120px",
          width: "120px",
          boxShadow: theme.shadows[6],
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "150px", height: "150px" }}
        />
      </Avatar>
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
        sx={{
          width: { xs: sizeForSmallDevices, md: size },
          display: { xs: "none", md: "flex" },
        }}
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
export { AppLogo };
export default NavigationBar;
