import React, { useEffect, useState } from "react";

export default ImageCapture = () => {
  const [videoSrc, setVideoSrc] = useState("");
  const streamConstraints = {
    video: {
      facingMode: ["environment"]
    }
  };
  const startCamera = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia(
      streamConstraints
    );
    const mediaStreamTrack = mediaStream.getVideoTracks()[0];
    console.log(mediaStreamTrack);
    console.log("capabilities", mediaStreamTrack.getCapabilities());
    console.log("constraints", mediaStreamTrack.getConstraints());
    // mediaStreamTrack.applyConstraints({width:1280, height:720})
    console.log("settings", mediaStreamTrack.getSettings());
    const imageCapture = new ImageCapture(mediaStreamTrack);
    console.log(imageCapture);
  };

  // useEffect(getDevices);
  return (
    <div>
      <button onClick={startCamera}>start</button>
      <button>takePhoto</button>
      <video src={videoSrc} />
    </div>
  );
};
