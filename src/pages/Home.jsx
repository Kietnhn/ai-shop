import React from "react";
import Slider from "../components/Slider";
import Category from "../components/Category";
import { Box } from "@mui/material";

const Home = () => {
    return (
        <>
            <Slider />
            <Box marginTop={2}>
                <Category />
            </Box>
        </>
    );
};

export default Home;
