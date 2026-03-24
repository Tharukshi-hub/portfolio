import React, { useState } from "react";
import Loader from "./Loader";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [showProjects, setshowProjects] = useState(false);
  const [showContact, setshowContact] = useState(false);
  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <div>
           {!showProjects && !showContact && <Home setshowProjects={setshowProjects} setshowContact={setshowContact}/>}
           {showProjects && <Projects setshowProjects={setshowProjects} />}
           {showContact && <Contact setshowContact={setshowContact} />}
        </div>
      )}
    </>
  );
}

export default App;