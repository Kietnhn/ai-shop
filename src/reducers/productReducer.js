import { SET_PRODUCT } from "../contexts/constants";

export const productReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_PRODUCT:
            return {
                ...state,
                currentProduct: payload,
            };

        default:
            return state;
    }
};
