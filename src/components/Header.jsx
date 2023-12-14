import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import Search from "./Search";
import UserHeader from "./UserHeader";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <AppBar position="fixed" sx={{ bgcolor: "#ffffff" }}>
            <Container>
                <Toolbar sx={{ justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Typography variant="h6" noWrap component={Link} to="/">
                        LOGO
                    </Typography>

                    {/* Search input */}
                    <Box>
                        <Search />
                    </Box>

                    {/* User */}
                    <Box>
                        <UserHeader />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
