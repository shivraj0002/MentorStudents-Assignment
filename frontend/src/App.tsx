import React from "react";
import { Container, Paper } from "@mui/material";
import MediaRecorder from "./components/MediaRecorder";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Container
      maxWidth="lg"
      component={Paper}
      elevation={2}
      sx={{ height: "100vh" }}
    >
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/record" element={<MediaRecorder />} />
      </Routes>
    </Container>
  );
}

export default App;
