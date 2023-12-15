import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductDetail from "../components/ProductDetail";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { SettingContext } from "../contexts/SettingContext";
import CloseIcon from "@mui/icons-material/Close";
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
        id: "chuoiId4",
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
        id: "chuoiId5",
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
        id: "chuoiId6",
    },
];

const ResultChat = () => {
    const {
        settingState: { isOpenChatBox },
    } = useContext(SettingContext);
    const {
        setCurrentProduct,
        productState: { currentProduct },
    } = useContext(ProductContext);

    const handleSelectProduct = (product) => {
        setCurrentProduct(product);
    };
    const handleClearProductDetail = (e) => {
        e.stopPropagation();
        setCurrentProduct(null);
    };
    return (
        <Grid container spacing={2}>
            {Boolean(currentProduct) && (
                <Grid item xs={6}>
                    <Box position={"relative"}>
                        <Box position="absolute" top={0} left={0}>
                            <IconButton onClick={handleClearProductDetail}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <ProductDetail product={currentProduct} />
                    </Box>
                </Grid>
            )}
            <Grid
                container
                xs={Boolean(currentProduct) ? 6 : 12}
                spacing={2}
                sx={{ margin: 0 }}
            >
                {listProduct.map((product) => {
                    if (
                        Boolean(currentProduct) &&
                        currentProduct.id === product.id
                    )
                        return (
                            <React.Fragment key={product.id}></React.Fragment>
                        );
                    return (
                        <Grid
                            item
                            xs={
                                Boolean(currentProduct)
                                    ? isOpenChatBox
                                        ? 6
                                        : 4
                                    : 3
                            }
                            key={product.id}
                        >
                            <Card
                                position="relative"
                                sx={{ display: "flex" }}
                                onClick={handleSelectProduct.bind(
                                    this,
                                    product
                                )}
                            >
                                <Grid item sx={6}>
                                    <CardMedia
                                        sx={{ height: "100%" }}
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
                                        {!Boolean(currentProduct) && (
                                            <Typography
                                                variant="button"
                                                color="text.secondary"
                                                component="div"
                                            >
                                                {product.brand}
                                            </Typography>
                                        )}
                                        <Typography
                                            component="div"
                                            variant="h5"
                                            className="product-name"
                                        >
                                            {product.name}
                                        </Typography>
                                        {/* <Typography
                                        variant="subtitle2"
                                        component="div"
                                        color="text.secondary"
                                    >
                                        {product.description}
                                    </Typography> */}
                                        <Typography
                                            variant="h4"
                                            color="black"
                                            component="div"
                                            fontWeight={600}
                                        >
                                            {product.price}
                                        </Typography>
                                        {/* <Button
                                        sx={{ marginTop: 2 }}
                                        variant="outlined"
                                        startIcon={<AddShoppingCartIcon />}
                                    >
                                        Add to cart
                                    </Button> */}
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Grid>
    );
};

export default ResultChat;
