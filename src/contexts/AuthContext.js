import { createContext, useReducer } from "react";
import { authReducer } from "../reducers/authReducer";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import { LOCAL_STORAGE_TOKEN_NAME, SET_AUTH, apiUrl } from "./constants";
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const initialState = {
        authLoading: false,
        user: null,
        isAuthenticated: false,
    };
    const [authState, dispatch] = useReducer(authReducer, initialState);
    const verifyPassword = async (payload) => {
        const { password } = payload;
        try {
            const response = await axios.get(`${apiUrl}/auth/verify-password`, {
                params: { password },
            });
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };
    const setUser = (payload) => {
        dispatch({
            type: SET_AUTH,
            payload: {
                isAuthenticated: true,
                user: payload,
            },
        });
    };
    const logoutUser = () => {
        localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
        dispatch({
            type: SET_AUTH,
            payload: {
                isAuthenticated: false,
                user: null,
            },
        });
    };

    const updateUser = async (formData) => {
        try {
            const response = await axios.post(
                `${apiUrl}/auth/update`,
                formData
            );

            if (response.data.success) {
                await loadUser();
            }
            return response;
        } catch (error) {
            console.log(error);
        }
    };

    // register
    const registerUser = async (userForm) => {
        try {
            const response = await axios.post(
                `${apiUrl}/auth/register`,
                userForm
            );
            if (response.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                );
            }
            await loadUser();
            return response.data;
        } catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    };
    // authenticate user
    const loadUser = async () => {
        if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
            setAuthToken(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
        }
        try {
            const response = await axios.get(`${apiUrl}/auth`);
            if (response.data.success) {
                dispatch({
                    type: SET_AUTH,
                    payload: {
                        isAuthenticated: true,
                        user: response.data.user,
                    },
                });
            }
        } catch (error) {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
            dispatch({
                type: SET_AUTH,
                payload: {
                    isAuthenticated: false,
                    user: null,
                },
            });
            setAuthToken("");
        }
    };

    const loginUser = async (userForm) => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`, userForm);
            if (response.data.success) {
                localStorage.setItem(
                    LOCAL_STORAGE_TOKEN_NAME,
                    response.data.accessToken
                );
            }
            await loadUser();
            return response.data;
        } catch (error) {
            if (error.response.data) return error.response.data;
            else return { success: false, message: error.message };
        }
    };

    // useEffect(() => {
    //     loadUser();
    // }, []);

    // context data
    const authContextData = {
        setUser,
        loginUser,
        authState,
        registerUser,
        logoutUser,
        updateUser,
        verifyPassword,
    };

    // return component
    return (
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthContextProvider;
