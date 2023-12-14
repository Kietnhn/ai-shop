// auth
export const SET_AUTH = "SET_AUTH";
// product
export const SET_PRODUCT = "SET_PRODUCT";
//system
export const apiUrl =
    process.env.NODE_ENV !== "production" ? "http://localhost:5000/api" : "";
export const LOCAL_STORAGE_TOKEN_NAME = "AI_SHOP";
// settings
export const SET_DIALOG = "SET_DIALOG";
export const DIALOG_LOGIN = "DIALOG_LOGIN";
export const DIALOG_REGISTER = "DIALOG_REGISTER";
export const DIALOG_PRODUCT_DETAIL = "DIALOG_PRODUCT_DETAIL";
export const SET_IS_OPEN_CHAT_BOX = "SET_IS_OPEN_CHAT_BOX";
