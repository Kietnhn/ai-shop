// import React, { useContext } from "react";
// import {
//     Button,
//     Dialog,
//     DialogTitle,
//     DialogContent,
//     DialogActions,
// } from "@mui/material";
// import { SettingContext } from "../../contexts/SettingContext";
// import { DIALOG_PRODUCT_DETAIL } from "../../contexts/constants";
// import { ProductContext } from "../../contexts/ProductContext";

// const ProductDetailDialog = () => {
//     const {
//         settingState: { dialog },
//         clearDialog,
//     } = useContext(SettingContext);
//     const {
//         productState: { product },
//     } = useContext(ProductContext);
//     console.log({ product });
//     const handleClose = () => {
//         clearDialog();
//     };

//     return (
//         <Dialog open={dialog === DIALOG_PRODUCT_DETAIL} onClose={handleClose}>
//             <DialogTitle>Product detail</DialogTitle>
//             <DialogContent>{product?.name}</DialogContent>
//             <DialogActions>
//                 <Button onClick={handleClose} color="secondary">
//                     Cancel
//                 </Button>
//                 <Button color="primary">Login</Button>
//             </DialogActions>
//         </Dialog>
//     );
// };

// export default ProductDetailDialog;
