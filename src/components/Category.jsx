import {
    Box,
    Card,
    CardContent,
    Skeleton,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";

const Category = () => {
    const categories = [
        {
            title: "Trousers",
            imgUrl: "",
        },
        {
            title: "Shirt",
            imgUrl: "",
        },
        {
            title: "Footwear",
            imgUrl: "",
        },
        {
            title: "Hat",
            imgUrl: "",
        },
    ];
    console.log(categories);
    return (
        <Stack direction={"row"} alignItems={"center"} gap={4}>
            <Typography>Category</Typography>
            <Box flexGrow={1}>
                <Stack direction={"row"} alignContent={"center"} gap={2}>
                    {categories.map((category) => (
                        <Card key={category.title}>
                            <CardContent
                                sx={{
                                    flexDirection: "column",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                {/* <img
                                    src={category.imgUrl}
                                    alt={category.title}
                                /> */}
                                <Skeleton
                                    variant="rectangular"
                                    width={40}
                                    height={40}
                                ></Skeleton>
                                <Typography
                                    variant="caption"
                                    marginTop={1}
                                    marginBottom={-1}
                                >
                                    {category.title}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Stack>
            </Box>
        </Stack>
    );
};

export default Category;
