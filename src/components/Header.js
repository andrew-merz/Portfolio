import { AppBar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const Header = () => {
  return (
    <AppBar color="transparent" position="fixed">
      <Container>
        <Typography
          style={{
            color: "white",
            flex: 1,
            fontWeight: "bold",
            fontFamily: "Roboto",
            cursor: "pointer",
          }}
          variant="h6"
        >
          Header
        </Typography>
      </Container>
    </AppBar>
  );
};

export default Header;
