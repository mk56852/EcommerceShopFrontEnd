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
        <ScrollMenu
          LeftArrow={<Button variant="outined">hello</Button>}
          direction={"row"}
          spacing={4}
          px={3}
          py={4}
          justifyContent={"center"}
        >
          <ProductCard1
            title={"Black Shirt"}
            rating={4}
            promotion={"-60%"}
            imgSrc={"/images/p1.jpg"}
            body={"20DT au lieu de 60 DT"}
          />
          <Box width={20}></Box>
          <ProductCard1
            title={"Blue Shirt"}
            rating={4}
            promotion={"-60%"}
            imgSrc={"/images/p2.jpg"}
            body={"20DT au lieu de 60 DT"}
          />
          <ProductCard1
            title={"White Shirt"}
            rating={4}
            promotion={"-60%"}
            imgSrc={"/images/p3.jpg"}
            body={"20DT au lieu de 60 DT"}
          />
          <ProductCard1
            title={"Black Shirt"}
            rating={4}
            promotion={"-60%"}
            imgSrc={"/images/p1.jpg"}
            body={"20DT au lieu de 60 DT"}
          />
          <ProductCard1
            title={"White Shirt"}
            rating={4}
            promotion={"-60%"}
            imgSrc={"/images/p3.jpg"}
            body={"20DT au lieu de 60 DT"}
          />
        </ScrollMenu>
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
        <Box py={5} bgcolor={"#f5f5f5"} px={10}>
          <Footer />
        </Box>
      </Stack>
    </DefaultLayout>
  );
}

export default HomePage;
