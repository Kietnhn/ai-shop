import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    Paper,
} from "@mui/material";
import React, { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
const NavBar = () => {
    const [value, setValue] = React.useState("/");
    const location = useLocation();

    useEffect(() => {
        setValue(location.pathname);
    }, [location]);

    return (
        <Box>
            <Paper elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        console.log("onChange", newValue);
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        component={NavLink}
                        to="/"
                        value="/"
                        sx={{ color: "inherit", textDecoration: "none" }}
                        label="Home"
                    />
                    <BottomNavigationAction
                        component={NavLink}
                        to="/result-chat"
                        value="/result-chat"
                        sx={{ color: "inherit", textDecoration: "none" }}
                        label="Result Chat"
                    />
                    <BottomNavigationAction
                        component={NavLink}
                        to="/"
                        value="/"
                        sx={{ color: "inherit", textDecoration: "none" }}
                        label="Virtual try-on"
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
};

export default NavBar;
