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
import LInnerLime from "../assets/LInnerLime.png";
import Heart from "../assets/Heart.png";
import LLime from "../assets/LLime.png";
import SmileEmoji from "../assets/SmileEmoji.png";
import LInnerPink from "../assets/LInnerPink.png";
import LPink from "../assets/LPink.png";

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
        <img className="image LInnerLime" src={LInnerLime} alt="" />
        <img className="image LLime" src={LLime} alt="" />
        <img className="image Heart" src={Heart} alt="" />
        <img className="image SmileEmoji" src={SmileEmoji} alt="" />
        <img className="image LInnerPink" src={LInnerPink} alt="" />
        <img className="image LPink" src={LPink} alt="" />
        <img className="image eclipseLeft" src={EclipseLeft} alt="" />
        <img className="eclipseRight" src={EclipseRight} alt="" />
      </div>
      <div className="threeSections">
        <div className="sectionProperties section1">
          <p className="sectionTitle1">Content Nodes</p>
          <p className="sectionContent1">
            Content Nodes, Earn rewards for supplying <br />
            their GPU, Storage and bandwidth for <br /> dCDN
          </p>
          <div className="deployButton">
            <p className="">Deploy</p>
          </div>
        </div>
        <div className="sectionProperties section2">
          <p className="sectionTitle2">Orchestrators</p>
          <p className="sectionContent2">
            Orchestrators will be responsible for <br />
            connecting the client with the content <br /> node for seamless
            streaming. Traffic <br /> distribution will be based on multiple{" "}
            <br />
            factors like job type, performance
          </p>
        </div>
        <div className="sectionProperties section3">
          <p className="sectionTitle2">Validators</p>
          <p className="sectionContent2">
            Validators will be responsible for validating
            <br />
            the execution of dCDN Network. Validators <br /> will earn rewards
            from Staking and earn a <br /> cut on the executions validated.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page2;
