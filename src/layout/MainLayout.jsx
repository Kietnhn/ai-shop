import React, { useContext } from "react";
import { Box, Container, Grid, IconButton } from "@mui/material";
import Header from "../components/Header";
import LoginDialog from "../components/Dialog/Login";
import RegisterDialog from "../components/Dialog/Register";
import { SettingContext } from "../contexts/SettingContext";
import ChatBox from "../components/ChatBox";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import NavBar from "../components/NavBar";

const MainLayout = ({ children }) => {
    const {
        settingState: { isOpenChatBox },
        setIsOpenChatBox,
    } = useContext(SettingContext);
    return (
        <Container maxWidth="xl">
            <Header />
            <Container sx={{ marginTop: 8 }} maxWidth="xl">
                <Box paddingTop={2} position={"relative"}>
                    <Grid container spacing={3}>
                        <Grid item xs>
                            <Box>
                                <NavBar />
                            </Box>
                            <Box paddingY={2}>{children}</Box>
                        </Grid>
                        {isOpenChatBox && (
                            <Grid item xs={4}>
                                <Box
                                    position={"sticky"}
                                    top={80}
                                    right={0}
                                    bottom={0}
                                    zIndex={9999}
                                    height={"calc(100vh - 80px)"}
                                >
                                    <ChatBox />
                                </Box>
                            </Grid>
                        )}
                    </Grid>
                    {!isOpenChatBox && (
                        <Box position={"fixed"} bottom={20} right={20}>
                            <IconButton
                                size="large"
                                onClick={() => setIsOpenChatBox(true)}
                            >
                                <SmartToyIcon />
                            </IconButton>
                        </Box>
                    )}
                </Box>
            </Container>
            <LoginDialog />
            <RegisterDialog />
        </Container>
    );
};

export default MainLayout;
