import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@mui/material";
import React from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductDetail = ({ product }) => {
    return (
        <Box>
            <Card sx={{ display: "flex" }}>
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
                        <Typography
                            variant="button"
                            color="text.secondary"
                            component="div"
                        >
                            {product.brand}
                        </Typography>
                        <Typography
                            component="div"
                            variant="h5"
                            className="product-name"
                        >
                            {product.name}
                        </Typography>
                        <Typography
                            variant="subtitle2"
                            component="div"
                            color="text.secondary"
                        >
                            {product.description}
                        </Typography>
                        <Typography
                            variant="h4"
                            color="black"
                            component="div"
                            fontWeight={600}
                        >
                            {product.price}
                        </Typography>
                        <Button
                            sx={{ marginTop: 2 }}
                            variant="outlined"
                            startIcon={<AddShoppingCartIcon />}
                        >
                            Add to cart
                        </Button>
                    </CardContent>
                </Box>
            </Card>
            <Typography variant="p">More info here</Typography>
        </Box>
    );
};

export default ProductDetail;
