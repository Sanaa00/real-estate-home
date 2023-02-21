import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import useWindowDimensions from "../hooks/screenSize";
function VideoAbout() {
  const videoId = "5hemeiTVIG0";
  const [videoWidth, setVideoWidth] = useState("500");

  const screenSize = useWindowDimensions();

  useEffect(() => {
    (async () => {
      // eslint-disable-next-line no-restricted-globals
      if (screenSize >= 1024) {
        setVideoWidth(screenSize / 2 - 200);
      } else if (screenSize >= 768) {
        setVideoWidth("700");
        // eslint-disable-next-line no-restricted-globals
      } else if (screenSize >= 640) {
        console.log(screenSize);
        setVideoWidth("390");
        // eslint-disable-next-line no-restricted-globals
      }
    })();

    // eslint-disable-next-line no-restricted-globals, react-hooks/exhaustive-deps
  }, [screenSize]);

  const style = {
    height: "290",
    width: videoWidth,
  };
  return <YouTube videoId={videoId} opts={style} />;
}

export default VideoAbout;
