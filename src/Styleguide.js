import React from "react";

const Styleguide = () => {
  return (
    <div className="wrapper gradient-white">
      <h1>H1 Text style</h1>
      <h2>H2 Text style</h2>
      <h3>H3 Text style</h3>
      <h4>H4 Text style</h4>
      <h5>H5 Text style</h5>
      <div className="link">
        <a href="#hello" className="button-secondary-dark">
          Read more
        </a>
      </div>
      <div className="link">
        <a href="#hello" className="button-secondary-light">
          Read more
        </a>
      </div>
      <div className="small-title-normal">hey how are you</div>
      <div className="small-title-small">welcome to youtube channel</div>
      <div className="small-title-smallest">heyy everyone how are you</div>
      <div className="paragraph-normal">heyy everyone are you there?</div>
      <div className="paragraph-small">hello everyone how are you???</div>
      <div className="paragraph-smallest">welcome to youtube</div>

      <button className="button-primary-dark marginTopDesktop-twenty marginTopMobile-twenty">
        learn more
      </button>
      <button className="button-primary-light">learn more</button>
      <div className="small-title-normal">hey how are you</div>
      <div className="small-title-small white-text">
        welcome to youtube channel
      </div>
      <div className="small-title-smallest">heyy everyone how are you</div>
      <div className="paragraph-normal">heyy everyone are you there?</div>
      <div className="paragraph-small">hello everyone how are you???</div>
      <div className="paragraph-smallest">welcome to youtube</div>
    </div>
  );
};

export default Styleguide;
