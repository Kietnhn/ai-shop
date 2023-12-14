import { AccountCircle } from "@mui/icons-material";
import {
    Badge,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack,
} from "@mui/material";
import React, { useContext } from "react";
import { SettingContext } from "../contexts/SettingContext";
import { DIALOG_LOGIN, DIALOG_REGISTER } from "../contexts/constants";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const UserHeader = () => {
    const { setDialog } = useContext(SettingContext);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isAuthenticated, setIsAuthenticated] = React.useState(true);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleMenu = (event) => {
        console.log(event.currentTarget);
        setAnchorEl(event.currentTarget);
    };
    const handleLogout = () => {
        setIsAuthenticated(false);
        handleClose();
    };
    return (
        <>
            {isAuthenticated ? (
                <>
                    <IconButton>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="account"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="primary"
                        onClick={handleMenu}
                    >
                        <AccountCircle />
                    </IconButton>
                    {/* Add user info or functionality here */}
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Log out</MenuItem>
                    </Menu>
                </>
            ) : (
                <Stack direction={"row"} alignItems={"center"} gap={2}>
                    <Button
                        variant="contained"
                        onClick={() => setDialog(DIALOG_LOGIN)}
                    >
                        Login
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => setDialog(DIALOG_REGISTER)}
                    >
                        Register
                    </Button>
                </Stack>
            )}
        </>
    );
};

export default UserHeader;
