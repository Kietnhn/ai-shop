import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { SettingContext } from "../contexts/SettingContext";
import { DIALOG_PRODUCT_DETAIL } from "../contexts/constants";
// fake data
const listProduct = [
    {
        availability: "InStock",
        avg_rating: "5.0",
        brand: "adidas",
        color: "Black",
        currency: "USA",
        description: "THIS MERINO LONG SLEEVE TEE IS MADE WITH NATURE.",
        images: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/50db1b32c549467c980300be1e3318e5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_21_model.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a4fd96124136457ea4dafe07362ff2a5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_22_model.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/057d515019794d32a2aac1ab48b0a779_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_23_hover_model.jpg",
        ],
        name: "TERREX XPERIOR MERINO 150 BASELAYER LONG SLEEVE TEE",
        price: "$100",
        original_price: "$100",
        review_count: 1,
        scraped_at: "12/11/2023, 03:49:21",
        url: "https://www.adidas.com/us/terrex-xperior-merino-150-baselayer-long-sleeve-tee/HZ8559.html",
        category: "Clothing",
        cloth_gender: "Men",
        id: "chuoiId1",
    },
    {
        availability: "InStock",
        avg_rating: "5.0",
        brand: "adidas",
        color: "Black",
        currency: "USA",
        description: "THIS MERINO LONG SLEEVE TEE IS MADE WITH NATURE.",
        images: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/057d515019794d32a2aac1ab48b0a779_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_23_hover_model.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/50db1b32c549467c980300be1e3318e5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_21_model.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a4fd96124136457ea4dafe07362ff2a5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_22_model.jpg",
        ],
        name: "TERREX XPERIOR MERINO 150 BASELAYER LONG SLEEVE TEE",
        price: "$100",
        original_price: "$100",
        review_count: 1,
        scraped_at: "12/11/2023, 03:49:21",
        url: "https://www.adidas.com/us/terrex-xperior-merino-150-baselayer-long-sleeve-tee/HZ8559.html",
        category: "Clothing",
        cloth_gender: "Men",
        id: "chuoiId2",
    },
    {
        availability: "InStock",
        avg_rating: "5.0",
        brand: "adidas",
        color: "Black",
        currency: "USA",
        description: "THIS MERINO LONG SLEEVE TEE IS MADE WITH NATURE.",
        images: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a4fd96124136457ea4dafe07362ff2a5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_22_model.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/50db1b32c549467c980300be1e3318e5_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_21_model.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/057d515019794d32a2aac1ab48b0a779_9366/Terrex_Xperior_Merino_150_Baselayer_Long_Sleeve_Tee_Black_HZ8559_23_hover_model.jpg",
        ],
        name: "TERREX XPERIOR MERINO 150 BASELAYER LONG SLEEVE TEE",
        price: "$100",
        original_price: "$100",
        review_count: 1,
        scraped_at: "12/11/2023, 03:49:21",
        url: "https://www.adidas.com/us/terrex-xperior-merino-150-baselayer-long-sleeve-tee/HZ8559.html",
        category: "Clothing",
        cloth_gender: "Men",
        id: "chuoiId3",
    },
];

const ResultChat = () => {
    const { setDialog } = useContext(SettingContext);
    const { setProduct } = useContext(ProductContext);
    const handleSelectProduct = (product) => {
        setProduct(product);
        setDialog(DIALOG_PRODUCT_DETAIL);
    };
    return (
        <Grid container spacing={2}>
            {listProduct.map((product) => (
                <Grid item xs={6} key={product.id}>
                    <Card
                        sx={{ display: "flex" }}
                        onClick={handleSelectProduct.bind(this, product)}
                    >
                        <Grid item sx={6}>
                            <CardMedia
                                component="img"
                                image={product.images[0]}
                                alt={product.name}
                            />
                        </Grid>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardContent sx={{ flex: "1 0 auto" }}>
                                <Typography
                                    component="div"
                                    variant="h5"
                                    className="product-name"
                                >
                                    {product.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    component="div"
                                >
                                    {product.price}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ResultChat;
