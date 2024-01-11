import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import React from "react";
import "./hideScroll.css";
import usePreventBodyScroll from "./usePreventBodyScroll";
import { Button, Box } from "@mui/material";

import { LeftArrow, RightArrow } from "./Arrow";
import ProductCard1 from "../Cards/ProductCard";
function ScrollList() {
  const { disableScroll, enableScroll } = usePreventBodyScroll();
  return (
    <Box
      maxWidth={"100%"}
      onMouseEnter={disableScroll}
      onMouseLeave={enableScroll}
    >
      <ScrollMenu
        LeftArrow={LeftArrow}
        RightArrow={RightArrow}
        onWheel={onWheel}
      >
        <ProductCard1
          title={"Black Shirt"}
          rating={4}
          promotion={"-60%"}
          imgSrc={"/images/p1.jpg"}
          body={"20DT au lieu de 60 DT"}
        />
        <Box width={{ xs: 12, md: 40 }}></Box>
        <ProductCard1
          title={"Blue Shirt"}
          rating={4}
          promotion={"-60%"}
          imgSrc={"/images/p2.jpg"}
          body={"20DT au lieu de 60 DT"}
        />
        <Box width={{ xs: 12, md: 40 }}></Box>
        <ProductCard1
          title={"White Shirt"}
          rating={4}
          promotion={"-60%"}
          imgSrc={"/images/p3.jpg"}
          body={"20DT au lieu de 60 DT"}
        />
        <Box width={{ xs: 12, md: 40 }}></Box>
        <ProductCard1
          title={"White Shirt"}
          rating={4}
          promotion={"-60%"}
          imgSrc={"/images/p3.jpg"}
          body={"20DT au lieu de 60 DT"}
        />
        <Box width={{ xs: 12, md: 40 }}></Box>
        <ProductCard1
          title={"Black Shirt"}
          rating={4}
          promotion={"-60%"}
          imgSrc={"/images/p1.jpg"}
          body={"20DT au lieu de 60 DT"}
        />
        <Box width={{ xs: 12, md: 40 }}></Box>
        <ProductCard1
          title={"Black Shirt"}
          rating={4}
          promotion={"-60%"}
          imgSrc={"/images/p1.jpg"}
          body={"20DT au lieu de 60 DT"}
        />
        <Box width={{ xs: 12, md: 40 }}></Box>
        <ProductCard1
          title={"White Shirt"}
          rating={4}
          promotion={"-60%"}
          imgSrc={"/images/p3.jpg"}
          body={"20DT au lieu de 60 DT"}
        />
        <Box width={{ xs: 12, md: 40 }}></Box>
      </ScrollMenu>
    </Box>
  );
}

function onWheel(apiObj, ev) {
  const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isThouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default ScrollList;
