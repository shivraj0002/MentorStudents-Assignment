import React, { useState } from "react";
import { Container, Paper } from "@mui/material";
import MediaRecorder from "./components/MediaRecorder";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState({});

  const setUserValue = (user: Object) => {
    setUser(user);
  };

  return (
    <Container
      maxWidth="lg"
      component={Paper}
      elevation={2}
      sx={{ height: "100vh" }}
    >
      <Routes>
        <Route index path="/" element={<Login setUser={setUserValue} />} />
        <Route path="/record" element={<MediaRecorder />} />
      </Routes>
    </Container>
  );
}

export default App;
