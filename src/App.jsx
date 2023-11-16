import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import VideoSection from "./Components/videoSection/VideoSection";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [videos, setVideos] = useState([]);
  const [searchVideosTerm, setSearchVideosTerm] = useState("all");
  const [progress, setProgress] = useState(0);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    setProgress(20);
    const fetchDataUrl = async () => {
      const url = `https://pixabay.com/api/videos/?key=${
        import.meta.env.VITE_REACT_APP_PIXABAY_API_KEY
      }&q=${searchVideosTerm}&per_page=39`;
      setProgress(40);
      try {
        const response = await fetch(url);
        setProgress(70);
        if (response.ok) {
          const data = await response.json();
          setProgress(100);
          setVideos(data.hits);
          setSpinner(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    const delay = setTimeout(() => {
      fetchDataUrl();
    }, 500); // Add a delay of 500 milliseconds before making the API call

    return () => clearTimeout(delay);
  }, [searchVideosTerm]);

  const handleSearch = (text) => {
    setSearchVideosTerm(text);
  };

  return (
    <>
      <LoadingBar
        color="blue"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar searchTerm={handleSearch} />
      <div className="svg-loading">
        {spinner && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="80"
            height="80"
          >
            <circle
              cx="25"
              cy="25"
              r="20"
              fill="none"
              stroke="blue"
              strokeWidth="4"
            >
              <animate
                attributeName="stroke-dashoffset"
                attributeType="XML"
                from="0"
                to="502"
                dur="1s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-dasharray"
                attributeType="XML"
                values="150.6 100.4;1 250;150.6 100.4"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        )}
      </div>
      <div className="main__content">
        {!spinner && <VideoSection videos={videos} />}
        <div className="notFound">
          {progress === 0 && videos.length === 0 && <h1>No videos Found</h1>}
        </div>
      </div>
    </>
  );
}

export default App;
