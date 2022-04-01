import React from "react";
import Classes from "../../styles/university.module.css";
import img1 from "../../public/images/canada_bg.png";
import icn1 from '../../public/images/session_icon_white.png'
import location from '../../public/images/location.png'
import { Button } from "@chakra-ui/react";
function Universitycard() {

  console.log(img1.src);
  return (
    <>
      <div className={Classes.SingleCard}>
        <img src={img1.src} alt="..." />
        <div className={Classes.SingleCardcontent}>
              <h2>Harvard University</h2>
              <div className={Classes.SingleCardlocation}>
                <img src={icn1.src} alt="" />
                <p>Dramatic Arts, Masters</p>
            </div>
            <section className={Classes.SingleCardFeatures}>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>Type</h5>
                      <h6>Private</h6>
                    </div>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>GRE Waiver</h5>
                      <h6>-</h6>
                    </div>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>Application Fee (USD)</h5>
                      <h6>100k</h6>
                    </div>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>Tution Fee (USD)</h5>
                      <h6>100</h6>
                    </div>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>IELTS Score</h5>
                      <h6>6.5</h6>
                    </div>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>TOEFL Score</h5>
                      <h6>69iBT</h6>
                    </div>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>Duolingo Score</h5>
                      <h6>8.5</h6>
                    </div>
            </section>
              <div className={Classes.SingleCardProgramBtn}>
                <a   href={"/universitysingle"}>
                        <Button bgColor='#4080D3'color="white" size="sm" > Program details ..</Button>
                </a>       
              </div>
        </div>
      </div>
    </>
  );
}

export default Universitycard;
