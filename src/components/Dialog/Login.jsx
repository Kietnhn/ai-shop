import React, { useContext } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
} from "@mui/material";
import { SettingContext } from "../../contexts/SettingContext";
import { DIALOG_LOGIN } from "../../contexts/constants";

const LoginDialog = () => {
    const {
        settingState: { dialog },
        clearDialog,
    } = useContext(SettingContext);

    const handleClose = () => {
        clearDialog();
    };

    const handleLogin = () => {
        // Implement your login logic here
        // For example, validate credentials and authenticate the user
        // You can also call an API endpoint for authentication
        handleClose(); // Close the modal after successful login
    };

    return (
        <Dialog open={dialog === DIALOG_LOGIN} onClose={handleClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    // You can add onChange handlers and state to capture input data
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                    // You can add onChange handlers and state to capture input data
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleLogin} color="primary">
                    Login
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default LoginDialog;
