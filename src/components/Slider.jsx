import React, { useState } from "react";
import { Box, Button, IconButton, Skeleton, Stack } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
const ImageSlider = () => {
    // using for real images
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = ["image-url-1.jpg", "image-url-2.jpg", "image-url-3.jpg"];

    const goToPreviousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNextImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box position={"relative"}>
            <Stack alignItems={"center"} justifyContent={"center"}>
                <Box>
                    <Skeleton
                        variant="rounded"
                        width={"100%"}
                        height={"400px"}
                        sx={{ aspectRatio: "16/9" }}
                    />
                    {/* <img
                        src={images[currentImageIndex]}
                        alt={`${currentImageIndex + 1}`}
                    /> */}
                </Box>
            </Stack>
            <Box
                position={"absolute"}
                top={"50%"}
                left={0}
                sx={{ transform: "translateY(-50%)" }}
            >
                <IconButton onClick={goToPreviousImage} size="large">
                    <NavigateBeforeIcon />
                </IconButton>
            </Box>
            <Box
                position={"absolute"}
                top={"50%"}
                right={0}
                sx={{ transform: "translateY(-50%)" }}
            >
                <IconButton onClick={goToNextImage} size="large">
                    <NavigateNextIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default ImageSlider;
