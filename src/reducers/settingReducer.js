import { SET_DIALOG, SET_IS_OPEN_CHAT_BOX } from "../contexts/constants";

export const settingReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case SET_DIALOG:
            return {
                ...state,
                dialog: payload,
            };
        case SET_IS_OPEN_CHAT_BOX:
            return {
                ...state,
                isOpenChatBox: payload,
            };

        default:
            return state;
    }
};
