import React from "react";

function Videos({ video }) {
  return (
    <>
      <div className="video-card">
        <video controls className="video__mainsource">
          <source src={video.videos.tiny.url} />
        </video>
        <div className="video-info">
          <div className="author">
            <img
              src={video.userImageURL}
              alt="author"
              className="author__img"
            />
            <h3>{video.user}</h3>
          </div>
          <div className="detail">
            <p>Views: {video.views}</p>
            <p>Downoads:{video.downloads}</p>
            <a href={video.pageURL} target="_blank">
              <button>More Detail</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Videos;
