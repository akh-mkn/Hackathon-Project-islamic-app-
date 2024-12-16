import React, { useRef, useState } from "react";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "1000" }}>
      <audio ref={audioRef} loop>
        <source src="/audio/background-music (2).mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button 
        onClick={togglePlayPause} 
        style={{
          padding: "10px",
          backgroundColor: "#F3E5D8",
          color: "black",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "1em",
        }}
      >
        {isPlaying ? "Pause Music" : "Play Music"}
      </button>
    </div>
  );
}

export default MusicPlayer;