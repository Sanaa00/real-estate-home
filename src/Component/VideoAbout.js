import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
function VideoAbout() {
  const videoId = "5hemeiTVIG0";
  const [videoWidth, setVideoWidth] = useState("300");

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line no-restricted-globals
      if (innerWidth >= 640) {
        setVideoWidth("390");
        // eslint-disable-next-line no-restricted-globals
      } else if (innerWidth >= 768) {
        setVideoWidth("700");
        // eslint-disable-next-line no-restricted-globals
      } else if (innerWidth >= 1024) {
        setVideoWidth("full");
      }
    })();

    // eslint-disable-next-line no-restricted-globals, react-hooks/exhaustive-deps
  }, [innerWidth]);

  const style = {
    height: "290",
    width: videoWidth,
  };
  return (
    <div>
      <YouTube videoId={videoId} opts={style} />
    </div>
  );
}

export default VideoAbout;
