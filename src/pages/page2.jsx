import React from "react";
import Curve from "../assets/curve.png";
import Globe from "../assets/globe.png";
import EclipseLeft from "../assets/Ellipse left.png";
import EclipseRight from "../assets/Ellipse right.png";
import Person1 from "../assets/person 1.png";
import Person2 from "../assets/person 2.png";
import Person3 from "../assets/person 3.png";
import Person4 from "../assets/person 4.png";
import Person5 from "../assets/person 5.png";
import Person6 from "../assets/person 6.png";
import Person7 from "../assets/person 7.png";
import Person8 from "../assets/person 8.png";
import Person9 from "../assets/person 9.png";
import Person10 from "../assets/person 10.png";
import Person11 from "../assets/person 11.png";
import LGreen from "../assets/LGreen.png";
import LOrange from "../assets/LOrange.png";
import LBlue from "../assets/LBlue.png";
import LoveEmoji from "../assets/LoveEmoji.png";
import LInnerBlue from "../assets/LInnerBlue.png";

const Page2 = () => {
  return (
    <div className="page2Container">
      <div>
        <p className="title">
          FanCloud CDN network revolutionizes video infrastructure <br />
          with community-driven Innovation
        </p>
      </div>
      <div>
        <p className="subTitle">
          FanCloud pioneers a new era of connectivity with its decentralised
          content delivery network (dCDN),
          <br /> leveraging a global network of community-powered nodes. By
          harnessing a decentralised <br />
          architecture, dCDN drastically reduces data transfer and compute costs
          while enhancing load time.
          <br /> Join FanCloud’s dCDN network and experience the future of
          seamless, secure and community-
          <br /> driven consumption
        </p>
      </div>
      {/* <div className="globeSection">
        <div className="image">
          <img className="curve" src={Curve} alt="" />
          <img className="globe" src={Globe} alt="" />
          <img className="eclipseLeft" src={EclipseLeft} alt="" />
          <img className="eclipseRight" src={EclipseRight} alt="" />
        </div>
      </div> */}
      <div className="globeSection">
        <img className="image curve" src={Curve} alt="" />
        <img className="image globe" src={Globe} alt="" />
        <img className="image Person1" src={Person1} alt="" />
        <img className="image Person2" src={Person2} alt="" />
        <img className="image Person3" src={Person3} alt="" />
        <img className="image Person4" src={Person4} alt="" />
        <img className="image Person5" src={Person5} alt="" />
        <img className="image Person6" src={Person6} alt="" />
        <img className="image Person7" src={Person7} alt="" />
        <img className="image Person8" src={Person8} alt="" />
        <img className="image Person9" src={Person9} alt="" />
        <img className="image Person10" src={Person10} alt="" />
        <img className="image Person11" src={Person11} alt="" />
        <img className="image LGreen" src={LGreen} alt="" />
        <img className="image LOrange" src={LOrange} alt="" />
        <img className="image LBlue" src={LBlue} alt="" />
        <img className="image LInnerBlue" src={LInnerBlue} alt="" />
        <img className="image LoveEmoji" src={LoveEmoji} alt="" />
        <img className="image eclipseLeft" src={EclipseLeft} alt="" />
        <img className="eclipseRight" src={EclipseRight} alt="" />
      </div>
    </div>
  );
};

export default Page2;
