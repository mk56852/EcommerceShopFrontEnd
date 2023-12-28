import {
  AppBar,
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
            <Stack
              direction={"row"}
              justifyContent={"flex-end"}
              spacing={{ xs: 0, md: 3 }}
              pr={{ xs: 0, md: 2 }}
            >
              <AppBarIcons
                type="account"
                color="primary"
                size="50px"
                sizeForSmallDevices={"40px"}
              />
              <AppBarIcons
                type="shop"
                color="primary"
                size="50px"
                sizeForSmallDevices={"40px"}
              />
            </Stack>
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

function AppBarIcons({ type, color, size, sizeForSmallDevices }) {
  return (
    <Box display="flex">
      {type === "shop" && (
        <>
          <Box display={{ xs: "none", md: "flex" }}>
            <Stack direction="column" alignItems="center">
              <IconButton>
                <ShoppingCartOutlinedIcon
                  color={color}
                  sx={{ fontSize: size, stroke: "#ffffff", strokeWidth: 1 }}
                />
              </IconButton>
              <Typography variant="subtitle1" color={color}>
                Shop
              </Typography>
            </Stack>
          </Box>
          <Box display={{ xs: "flex", md: "none" }}>
            <IconButton>
              <ShoppingCartOutlinedIcon
                color={color}
                sx={{
                  fontSize: sizeForSmallDevices,
                  stroke: "#ffffff",
                  strokeWidth: 1,
                }}
              />
            </IconButton>
          </Box>
        </>
      )}

      {type === "account" && (
        <>
          <Box display={{ xs: "none", md: "flex" }}>
            <Stack direction="column" alignItems="center">
              <IconButton>
                <AccountCircleOutlinedIcon
                  color={color}
                  sx={{ fontSize: size, stroke: "#ffffff", strokeWidth: 1 }}
                />
              </IconButton>
              <Typography variant="subtitle1" color={color}>
                Account
              </Typography>
            </Stack>
          </Box>
          <Box display={{ xs: "flex", md: "none" }}>
            <IconButton>
              <AccountCircleOutlinedIcon
                color={color}
                sx={{
                  fontSize: sizeForSmallDevices,
                  stroke: "#ffffff",
                  strokeWidth: 1,
                }}
              />
            </IconButton>
          </Box>
        </>
      )}
    </Box>
  );
}

export default NavigationBar;
