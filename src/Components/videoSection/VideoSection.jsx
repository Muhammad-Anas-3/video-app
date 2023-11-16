import React from "react";
import "./VideoSection.css";
import Videos from "./Videos";

function VideoSection({ videos }) {
  return (
    <div className="Video__content">
      {videos.length > 0 &&
        videos.map((video, index) => (
          <Videos video={video} key={`${video.id}-${index}`} />
        ))}
    </div>
  );
}

export default VideoSection;
