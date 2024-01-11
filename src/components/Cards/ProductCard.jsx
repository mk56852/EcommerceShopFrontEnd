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
    <Card sx={{ width: { xs: 170, md: 240 } }} elevation={3}>
      <CardActionArea>
        <Box
          display={"flex"}
          width={"100%"}
          height={{ xs: 170, md: 240 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <img
            src={imgSrc}
            style={{
              maxWidth: "100%",
              maxHeight: "95%",
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
          <Typography gutterBottom variant="subtitle1" component="div">
            {title}
          </Typography>
          <IconButton
            onClick={handleLikeClick}
            sx={{
              height: 35,
              width: 35,
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
