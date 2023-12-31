// ** MUI Imports

import Box from "@mui/material/Box";
import img1 from "../utils/assets/c1.jpg";
import img2 from "../utils/assets/c2.jpg";
// ** Third Party Components
import { useKeenSlider } from "keen-slider/react";
import { Stack, colors } from "@mui/material";

const SwiperAutoSwitch = ({ direction }) => {
  // ** Hook
  const [ref] = useKeenSlider(
    {
      loop: true,
      rtl: direction === "rtl",
    },
    [
      (slider) => {
        let mouseOver = false;
        let timeout;

        const clearNextTimeout = () => {
          clearTimeout(timeout);
        };

        const nextTimeout = () => {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        };
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <Box ref={ref} className="keen-slider">
      <Box className="keen-slider__slide">
        <img
          src={img1}
          alt="swiper 1"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
      <Box className="keen-slider__slide">
        <img
          src={img2}
          alt="swiper 2"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default SwiperAutoSwitch;
