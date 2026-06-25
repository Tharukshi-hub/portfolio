import React, { useEffect, useState } from "react";
import "./Home.css";

function Home({setshowProjects, setshowContact}) {
  const fullH1 = "Hello, I'm Tharukshi";
  const fullH2 = "Web Developer";
  const fullP =
    "I am an Information Technology student passionate about web development and modern technologies. I enjoy building responsive and user-friendly web applications using React.js, JavaScript, MongoDB, and MySQL. Through academic and personal projects, I have gained experience in both front-end and back-end development and continuously strive to improve my skills by exploring new technologies and creating real-world solutions.";

  const [h1Text, setH1Text] = useState("");
  const [h2Text, setH2Text] = useState("");
  const [pText, setPText] = useState("");

  const openGitHub = () => {
  window.open("https://github.com/Tharukshi-hub");
};

  const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/tharukshi-hansamali-54985735a/");
  };

  const goToContact = () => {
    setshowProjects(false);
    setshowContact(true);
  };

  const openCV = () => {
    window.open("/My CV.pdf", "_blank");
  }
  useEffect(() => {
    let h1Index = 0;
    let h2Index = 0;
    let pIndex = 0;

    const typeH1 = setInterval(() => {
      setH1Text(fullH1.substring(0, h1Index + 1));
      h1Index++;

      if (h1Index === fullH1.length) {
        clearInterval(typeH1);

        const typeH2 = setInterval(() => {
          setH2Text(fullH2.substring(0, h2Index + 1));
          h2Index++;

          if (h2Index === fullH2.length) {
            clearInterval(typeH2);

            const typeP = setInterval(() => {
              setPText(fullP.substring(0, pIndex + 1));
              pIndex++;

              if (pIndex === fullP.length) {
                clearInterval(typeP);
              }
            }, 40);
          }
        }, 80);
      }
    }, 100);

    return () => {
      clearInterval(typeH1);
    };
  }, []);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-text">
          <h1>{h1Text}</h1>
          <h2>{h2Text}</h2>
          <p>{pText}</p>

          <div className="home-buttons">
            <button className="btn" onClick={()=> setshowProjects (true)}>View Projects</button>
            <button className="btn2" onClick={openCV}>View CV</button>
            <button className="btn3" onClick={goToContact}>Contact Me</button>
          </div>

          <div className="social-icons">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="Github" onClick={openGitHub}/>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" onClick={openLinkedIn}/>
          </div>
        </div>

        <div className="home-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/921/921347.png"
            alt="developer"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;