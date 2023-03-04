import React from "react";
import Kira from "../images/image-kira.jpg";

const Card5 = () => {
  return (
    <section className="card3 card5">
      <article className="card-body">
        <div className="authour3">
          <img src={Kira}></img>
          <p>
            Kira Whittle
            <span>Verified Graduate</span>
          </p>
        </div>
        <div className="card-text3">
          <p>
            Such a life-changing experience. Highly recommended!
            <span>
              “ Before joining the bootcamp, I've never written a line of code.
              I needed some structure from professionals who can help me learn
              programming step by step. I was encouraged to enroll by a former
              student of theirs who can only say wonderful things about the
              program. The entire curriculum and staff did not disappoint. They
              were very hands-on and I never had to wait long for assistance.
              The agile team project, in particular, was outstanding. It took my
              learning to the next level in a way that no tutorial could ever
              have. In fact, I've often referred to it during interviews as an
              example of my developent experience. It certainly helped me land a
              job as a full-stack developer after receiving multiple offers.
              100% recommend! ”
            </span>
          </p>
        </div>
      </article>
    </section>
  );
};

export default Card5;
