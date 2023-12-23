// AboutMe.js
import React from "react";

const AboutMe = () => {
  const openResume = () => {
    
    window.open(
      "https://www.instagram.com/thedaphnia/",
      "_blank"
    );
  };

  const openGitHub = () => {
  
    window.open("https://github.com/e-defne", "_blank");
  };

  const openLinkedIn = () => {
  
    window.open("https://www.linkedin.com/in/emine-defne-y-a00b84270/", "_blank");
  };
  return (
    <section className="aboutme">
      <h1 className="biggest">Merhaba Ben Defne</h1>
      <p className="aboutme-text">
        Kişisel blog sayfama hoşgeldin, Mega Yazılım Akademisi 
        5. hafta ödevimiz react ile basit bir blog sayfası
        yapmaktı şu an bunu görmektesin, daha fazlası için aşağıdaki
        linklerden bana ulaşabilirsin.
      </p>
      <div className="buttons">
        <button className="instagram-button" onClick={openResume}>
          instagram 
        </button>
        <button className="github-button" onClick={openGitHub}>
          GitHub Link
        </button>
        <button className="linkedin-button" onClick={openLinkedIn}>
          LinkedIn Link
        </button>
      </div>
    </section>
  );
};

export default AboutMe;