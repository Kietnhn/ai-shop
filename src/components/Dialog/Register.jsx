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
import { DIALOG_REGISTER } from "../../contexts/constants";

const RegisterDialog = () => {
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
        <Dialog open={dialog === DIALOG_REGISTER} onClose={handleClose}>
            <DialogTitle>Register</DialogTitle>
            <DialogContent>
                <TextField
                    label="Username"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    margin="dense"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="secondary">
                    Cancel
                </Button>
                <Button onClick={handleLogin} color="primary">
                    Register
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default RegisterDialog;
