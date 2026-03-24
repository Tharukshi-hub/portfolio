 import React, { useEffect, useState } from "react";
import "./Loader.css";

function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onFinish();
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onFinish]);

     return (
  <div className="loader-container">
    <div className="loader-card">
      <h1 className="loader-name">Tharukshi Hansamali</h1>
      <h2>Loading Portfolio...</h2>

      <div className="loading-bar">
        <div
          className="loading-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>{progress}%</p>
    </div>
  </div>
);
}

export default Loader;