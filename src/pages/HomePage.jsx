import React from "react";
import DefaultLayout from "../Layout/DefaultLayout";
import { Box, Button, Stack } from "@mui/material";
import SwiperAutoSwitch from "../components/AppSwipper";
import SectionTitle from "../components/SectionTitle";
import PriceCard from "../components/Cards/PriceCard";
import MenuTab from "../components/MenuTab";
import AppValuesIcon from "../components/AppValuesIcons";
import CategoryItem from "../components/CategoryItem";
import { categoryList, valuesItem } from "../models/Data";
import ProductCard1 from "../components/Cards/ProductCard";
import Footer from "../components/Footer";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import ScrollList from "../components/Scroll-list/ScrollList";
function HomePage() {
  return (
    <DefaultLayout>
      <Stack direction={"column"} spacing={2}>
        <MenuTab />
        <SwiperAutoSwitch />

        <SectionTitle
          title="Categories"
          subTitle={"Inspiring Creativity, Always Available"}
        />
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent={"center"}
        >
          {categoryList.map((item) => (
            <CategoryItem title={item.title} imgSrc={item.imgSrc} />
          ))}
        </Stack>

        <PriceCard />
        <ScrollList />
        <SectionTitle
          title="Values"
          subTitle={"That's why you have to choose us"}
        />
        <Stack
          direction={{ xs: "column", md: "row" }}
          height={{ md: 120 }}
          py={5}
        >
          {valuesItem.map((item) => (
            <AppValuesIcon
              icon={item.icon}
              header={item.header}
              body={item.body}
              size={60}
            />
          ))}
        </Stack>
        <Box py={5} bgcolor={"#f5f5f5"} px={10}></Box>
      </Stack>
    </DefaultLayout>
  );
}

export default HomePage;
