import React from "react";
import "../styles/style4.css";
import Patrick from "../images/image-patrick.jpg";

const Card4 = () => {
  return (
    <section className="card4">
      <article className="card-body">
        <div className="authour">
          <img src={Patrick}></img>
          <p>
            Patrick Abrams
            <span>Verified Graduate</span>
          </p>
        </div>
        <div className="card-text">
          <p>
            Awesome teaching support from TAs who did the bootcamp themselves.
            Getting guidance from them and learning from their experiences was
            easy.
            <span>
              “ The staff seem genuinely concerned about my progress which I
              find really refreshing. The program gave me the confidence
              necessary to be able to go out in the world and present myself as
              a capable junior developer. The standard is above the rest. You
              will get the personal attention you need from an incredible
              community of smart and amazing people. ”
            </span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Card4;
