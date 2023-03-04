import React from "react";
import Jeanette from "../images/image-jeanette.jpg";

const Card3 = () => {
  return (
    <section className="card3 card6">
      <article className="card-body">
        <div className="authour3">
          <img src={Jeanette}></img>
          <p>
            Jeanette Harmon
            <span>Verified Graduate</span>
          </p>
        </div>
        <div className="card-text3">
          <p>
            An overall wonderful and rewarding experience
            <span>
              “ Thank you for the wonderful experience! I now have a job I
              really enjoy, and make a good living while doing something I love.
              ”
            </span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Card3;
