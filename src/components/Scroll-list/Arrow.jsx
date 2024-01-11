import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import React from "react";

import { VisibilityContext } from "react-horizontal-scrolling-menu";

function Arrow({ children, disabled, onClick, left, right }) {
  return (
    <Box
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"transparent"}
    >
      <Box
        height={40}
        width={40}
        alignItems={"center"}
        justifyContent={"center"}
        bgcolor={"color5.main"}
        sx={{
          borderRadius: "40px",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          opacity: disabled ? "0" : "1",
          userSelect: "none",
        }}
      >
        <IconButton
          disabled={disabled}
          onClick={onClick}
          sx={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",

            opacity: disabled ? "0" : "1",
            userSelect: "none",
          }}
        >
          {left && <ArrowBack />}
          {right && <ArrowForward />}
        </IconButton>
      </Box>
    </Box>
  );
}

export function LeftArrow() {
  const { isFirstItemVisible, scrollPrev, visibleElements, initComplete } =
    React.useContext(VisibilityContext);

  const [disabled, setDisabled] = React.useState(
    !initComplete || (initComplete && isFirstItemVisible)
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isFirstItemVisible);
    }
  }, [isFirstItemVisible, visibleElements]);

  return <Arrow disabled={disabled} onClick={() => scrollPrev()} left={true} />;
}

export function RightArrow() {
  const { isLastItemVisible, scrollNext, visibleElements } =
    React.useContext(VisibilityContext);

  // console.log({ isLastItemVisible });
  const [disabled, setDisabled] = React.useState(
    !visibleElements.length && isLastItemVisible
  );
  React.useEffect(() => {
    if (visibleElements.length) {
      setDisabled(isLastItemVisible);
    }
  }, [isLastItemVisible, visibleElements]);

  return (
    <Arrow disabled={disabled} onClick={() => scrollNext()} right={true} />
  );
}
