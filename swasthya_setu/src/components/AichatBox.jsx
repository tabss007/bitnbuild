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
        as="button"
        borderRadius="md"
        bg="tomato"
        color="white"
        px={4}
        h={10}
        onClick={handleAiChatClick}
      >
        Let AI assist you.
      </Box>
    </div>
  );
};

export default AichatBox;
