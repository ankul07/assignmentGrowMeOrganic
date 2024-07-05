import { Box, Container } from "@mui/material";
import React from "react";
import FetchPost from "../components/FetchPost";
import DepartmentList from "../components/Department";

const SecondPage: React.FC = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <Box>
        <h1>Component 1 Fetching User Details</h1>
        <FetchPost />
      </Box>
      {/* second box started from here */}
      <Box
        sx={{
          maxWidth: "500px",
          margin: "auto",
        }}
      >
        <h1>Components 2 Creating Expand or Collapse Department</h1>
        <DepartmentList />
      </Box>
    </Container>
  );
};
export default SecondPage;
