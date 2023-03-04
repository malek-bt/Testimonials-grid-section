import React from "react";
import "../styles/style2.css";
import jonathan from "../images/image-jonathan.jpg";

const Card2 = () => {
  return (
    <section className="card2">
      <article className="card-body">
        <div className="authour">
          <img src={jonathan}></img>
          <p>
            Jonathan Walters
            <span>Verified Graduate</span>
          </p>
        </div>
        <div className="card-text">
          <p>
            The team was very supportive and kept me motivated
            <span>
              “ I started as a total newbie with virtually no coding skills. I
              now work as a mobile engineer for a big company. This was one of
              the best investments I've made in myself. ”
            </span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Card2;
