import React, { FC, useEffect, useState } from "react";
import { useReactMediaRecorder, RecorderErrors } from "react-media-recorder";
import { Grid, Box } from "@mui/material";

const sxStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const videoStyle = {
  width: "100%",
  height: "100%",
};

const MediaRecorder: FC = () => {
  const [recording, setRecording] = useState(false);
  const [showVideoTag, setShowVideoTag] = useState(false);
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({
      video: true,
      audio: true,
      mediaRecorderOptions: {
        mimeType: "video/webm;codecs=h264",
      },
    });

  const {
    status: screenRecStatus,
    startRecording: startScrRec,
    stopRecording: stopScrRec,
    mediaBlobUrl: screenUrl,
  } = useReactMediaRecorder({
    screen: true,
  });

  const startToRec = () => {
    startRecording();
    startScrRec();
    setRecording(true);
    setShowVideoTag(false);
  };

  const stopToRec = () => {
    stopRecording();
    stopScrRec();
    setRecording(false);
    setShowVideoTag(true);
  };

  return (
    <Grid container spacing={2} sx={{ height: "100%" }}>
      <Grid item xs={12}>
        <Box sx={sxStyle}>
          <p>{status}</p>
          {!recording ? (
            <button onClick={startToRec}>Start Recording</button>
          ) : (
            <button onClick={stopToRec}> Stop Recording</button>
          )}
        </Box>
      </Grid>
      <Grid item xs={6} sx={{ ...sxStyle, minHeight: "250px" }}>
        {showVideoTag && (
          <video style={videoStyle} src={mediaBlobUrl} controls autoPlay loop />
        )}
      </Grid>
      <Grid item xs={6} sx={{ ...sxStyle, minHeight: "250px" }}>
        {showVideoTag && (
          <video style={videoStyle} src={screenUrl} controls autoPlay loop />
        )}
      </Grid>
    </Grid>
  );
};

export default MediaRecorder;
