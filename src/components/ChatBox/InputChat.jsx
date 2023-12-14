import { Box, IconButton, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import CollectionsIcon from "@mui/icons-material/Collections";
import { useNavigate } from "react-router-dom";
const InputChat = () => {
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const handleSubmitMessage = () => {
        // somel logic of submitMessage
        navigate("/result-chat");
        setMessage("");
    };
    return (
        <Box padding={2}>
            <TextField
                hiddenLabel
                variant="outlined"
                placeholder="Enter message"
                fullWidth
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                InputProps={{
                    endAdornment: (
                        <Stack direction={"row"} gap={1}>
                            <IconButton color="primary" edge="end">
                                <CollectionsIcon />
                            </IconButton>
                            <IconButton
                                color="primary"
                                onClick={handleSubmitMessage}
                                edge="end"
                                disabled={!message.trim()}
                            >
                                <SendIcon />
                            </IconButton>
                        </Stack>
                    ),
                }}
            />
        </Box>
    );
};

export default InputChat;
