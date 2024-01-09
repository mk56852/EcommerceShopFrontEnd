import { Icon } from "@iconify/react";
import { Favorite, FavoriteBorderOutlined } from "@mui/icons-material";
import {
  CardContent,
  Card,
  Typography,
  CardActionArea,
  Box,
  useTheme,
  Rating,
  IconButton,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

function ProductCard1({ title, promotion, rating, body, imgSrc }) {
  const [isLiked, setIsLiked] = useState(false);
  const theme = useTheme();
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };
  return (
    <Card sx={{ width: "270px", maxWidth: "280px" }} elevation={3}>
      <CardActionArea>
        <Box
          display={"flex"}
          width={"100%"}
          height={250}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            src={imgSrc}
            style={{
              maxWidth: "100%",
              maxHeight: "90%",
              display: "block",
              margin: "auto",
              boxShadow: theme.shadows[3],
              borderRadius: 15,
            }}
          />
          <Box
            position="absolute"
            top={8}
            right={8}
            bgcolor="color4.main"
            color="primary.contrastText"
            borderRadius={3}
            padding={1}
          >
            <Typography variant="body2">{promotion}</Typography>
          </Box>
        </Box>
      </CardActionArea>
      <CardContent>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Typography gutterBottom variant="h6" component="div">
            {title}
          </Typography>
          <IconButton
            onClick={handleLikeClick}
            sx={{
              backgroundColor: "white",
              boxShadow: theme.shadows[3],
            }}
          >
            {isLiked ? (
              <Favorite color={"color4.main"} />
            ) : (
              <FavoriteBorderOutlined />
            )}
          </IconButton>
        </Stack>
        <Rating
          precision={1}
          disabled
          defaultValue={rating}
          name="customized-color"
          sx={{ color: "color4.main" }}
          icon={<Icon icon="mdi:star" />}
          emptyIcon={<Icon icon="mdi:star" />}
        />
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ProductCard1;
