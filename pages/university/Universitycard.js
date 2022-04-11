import React,{useState,useEffect} from "react";
import Classes from "../../styles/university.module.css";
import img1 from "../../public/images/canada_bg.png";
import icn1 from '../../public/images/session_icon_white.png'
import axios from "axios";
import { Button } from "@chakra-ui/react";
function Universitycard(prop) {
  const [courseData, setcourseData] = useState([])


  useEffect(() => {
    callUniversityData();
  }, [])
  
  const callUniversityData =async()=>{
    try {
      const call1 = await axios.get(`https://flywise-admin.herokuapp.com/api/allCourseByUniId/${prop.id}`);
      setcourseData(call1.data.course)
      console.log(call1);
    } catch (error) {
      console.log(error);
    } 
  }


  return (
    <>
      <div className={Classes.SingleCard}>
        <img src={prop.photo} alt="..." />
        <div className={Classes.SingleCardcontent}>
              <h2>{prop?.name}</h2>
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
                      <h6>{courseData?.gre ? courseData?.gre?.greRequired : "N/A" }</h6>
                    </div>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>Application Fee (USD)</h5>
                      <h6>{courseData?.applicationFees ? courseData?.applicationFees : "N/A" }</h6>
                    </div>
                    <div className={Classes.SingleCardSingleFeature}>
                      <h5>Program Fee (USD)</h5>
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
                <a  href={`/university/universitysingle/${prop.id}`}>
                         Program details 
                </a>       
              </div>
        </div>
      </div>
    </>
  );
}

export default Universitycard;
