import { createContext, useReducer } from "react";
import { settingReducer } from "../reducers/settingReducer";
import { SET_DIALOG, SET_IS_OPEN_CHAT_BOX } from "./constants";
export const SettingContext = createContext();

const SettingContextProvider = ({ children }) => {
    const initialState = {
        dialog: "",
        isOpenChatBox: false,
    };
    const [settingState, dispatch] = useReducer(settingReducer, initialState);
    const setDialog = (payload) => {
        dispatch({
            type: SET_DIALOG,
            payload: payload,
        });
    };
    const setIsOpenChatBox = (payload) => {
        dispatch({
            type: SET_IS_OPEN_CHAT_BOX,
            payload: payload,
        });
    };
    const clearDialog = () => {
        dispatch({
            type: SET_DIALOG,
            payload: "",
        });
    };
    const settingContextData = {
        settingState,
        setDialog,
        clearDialog,
        setIsOpenChatBox,
    };

    // return component
    return (
        <SettingContext.Provider value={settingContextData}>
            {children}
        </SettingContext.Provider>
    );
};
export default SettingContextProvider;
