import React from "react";
import { Box } from "@chakra-ui/react";
import { useNavigate  } from "react-router-dom";

const AichatBox = () => {
  const navigate = useNavigate();

  const handleAiChatClick = () => {
    navigate("/AiChat");
  };

  return (
    <div>
      <Box
        alignItems='center'
        className="fixed-button"
        onClick={handleAiChatClick}
        position={"sticky"}
        bottom="70px"
        right="20px"
        backgroundColor="#007bff"
        color="white"
        borderRadius="19px"
        zIndex="1000"
        p={3}
        cursor="pointer"
      >
        Let AI assist you.
      </Box>
    </div>
  );
};

export default AichatBox;
