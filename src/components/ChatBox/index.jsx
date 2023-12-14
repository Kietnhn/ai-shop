import {
    Box,
    Card,
    CardContent,
    CardHeader,
    IconButton,
    Typography,
} from "@mui/material";
import React, { useContext } from "react";
import Messages from "./Messages";
import InputChat from "./InputChat";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { SettingContext } from "../../contexts/SettingContext";

const ChatBox = () => {
    const { setIsOpenChatBox } = useContext(SettingContext);
    return (
        <Box height={"100%"} position={"relative"}>
            <Card sx={{ height: "100%" }}>
                <CardHeader
                    sx={{
                        flexDirection: "row-reverse",
                        gap: 2,
                    }}
                    action={
                        <IconButton onClick={() => setIsOpenChatBox(false)}>
                            <ChevronRightIcon />
                        </IconButton>
                    }
                    title="Chat"
                />
                <hr style={{ margin: 0 }} />
                <CardContent>
                    <Messages />
                </CardContent>
                <Box position={"absolute"} bottom={0} left={0} right={0}>
                    <InputChat />
                </Box>
            </Card>
        </Box>
    );
};

export default ChatBox;
