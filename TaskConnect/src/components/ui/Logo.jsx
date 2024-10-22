import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Link to="/">
        <text>BACK</text>
      </Link>
    </Box>
  );
}
