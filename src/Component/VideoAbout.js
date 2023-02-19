import React from "react";
import YouTube from "react-youtube";
function VideoAbout() {
  const videoId = "5hemeiTVIG0";
  const style = {
    height: "290",
    width: "300",
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={style} />
    </div>
  );
}

export default VideoAbout;
