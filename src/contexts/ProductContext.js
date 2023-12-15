import { createContext, useReducer } from "react";
import { SET_PRODUCT } from "./constants";
import { productReducer } from "../reducers/productReducer";
export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
    const initialState = {
        currentProduct: null,
        carts: [],
    };

    const [productState, dispatch] = useReducer(productReducer, initialState);

    const setCurrentProduct = (payload) => {
        dispatch({
            type: SET_PRODUCT,
            payload: payload,
        });
    };
    const productionContextData = {
        productState,
        setCurrentProduct,
    };

    // return component
    return (
        <ProductContext.Provider value={productionContextData}>
            {children}
        </ProductContext.Provider>
    );
};
export default ProductContextProvider;
