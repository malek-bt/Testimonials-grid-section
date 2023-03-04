import React from "react";
import "../styles/style1.css";
import daniel from "../images/image-daniel.jpg";
const Card1 = () => {
  return (
    <section className="card">
      <article className="card-body">
        <div className="authour">
          <img src={daniel}></img>
          <p>
            Daniel Clifford
            <span>Verified Graduate</span>
          </p>
        </div>

        <div className="card-text">
          <p>
            I received a job offer mid-course, and the subjects I learned were
            current, if not more so, in the company I joined. I honestly feel I
            got every penny's worth.
            <span>
              “ I was an EMT for many years before I joined the bootcamp. I've
              been looking to make a transition and have heard some people who
              had an amazing experience here. I signed up for the free intro
              course and found it incredibly fun! I enrolled shortly thereafter.
              The next 12 weeks was the best - and most grueling - time of my
              life. Since completing the course, I've successfully switched
              careers, working as a Software Engineer at a VR startup. ”
            </span>
          </p>
        </div>
      </article>
    </section>
  ); 
};

export default Card1;
