import React from "react";
import "./About.css";
import Detect from "./img/wal.jpg";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={Detect} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">Dogs</h1>
            <div className="about__meta">
              <p className="about__text p__color">
                The World Canine Organization (FCI) currently lists over 300
                officially recognized dog breeds. Over the millennia, mankind
                has managed to create a staggering variety of canine phenotypes
                and an almost staggering range of physical and behavioral traits
                in his faithful four-legged friend.
              </p>
              <p className="about__text p__color">
                The software accepts as input any image provided by the user. If
                a dog is detected in the image, an estimate of the dog's breed
                is provided in Text format below.
              </p>

              <div className="about__button d__flex align__items__center"></div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
