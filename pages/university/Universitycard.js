import React from "react";
import Classes from "../../styles/university.module.css";
import icn1 from '../../public/images/session_icon_white.png'
import Link from 'next/link'

function Universitycard(prop) {
  const clickHandle = () => {
    document.location.href = prop.link;

  }
  return (
    <>
      <div className={Classes.SingleCard}>
        <img src={prop.photo} alt="..." />
        <div className={Classes.SingleCardcontent}>
              <h2>{prop?.name}</h2>
              <div className={Classes.SingleCardlocation}>
                <img src={icn1.src} alt="" />
                <p>{prop?.coursename}</p>
            </div>
            <section className={Classes.SingleCardFeatures}>
                    <div className={`${Classes.SingleCardSingleFeature}  mb-2   p-2 `}>
                      <h5 className='pb-2' >GRE Required</h5>
                      <h6>{prop?.gre ? "Yes" : "No"}</h6>
                    </div>
                    
                    <div className={`${Classes.SingleCardSingleFeature} mb-2   p-2 `}>
                      <h5 className='pb-2'>Application Fee (USD)</h5>
                      <h6>{prop?.applicationFees }</h6>
                    </div>
                    <div className={`${Classes.SingleCardSingleFeature} mb-2   p-2 `}>
                      <h5 className='pb-2' >Program Fee (USD)</h5>
                      <h6>{prop?.programFees}</h6>
                    </div>
                    <div className={`${Classes.SingleCardSingleFeature} mb-2   p-2 `}>
                      <h5 className='pb-2'>IELTS Score</h5>
                      <h6>{prop?.ielts ? prop?.ielts : "N/A" }</h6>
                    </div>
                    <div className={`${Classes.SingleCardSingleFeature} mb-2   p-2 `}>
                      <h5 className='pb-2'>TOEFL Score</h5>
                      <h6>{prop?.toefl ? prop.toefl : "N/A"}</h6>
                    </div>
                    <div className={`${Classes.SingleCardSingleFeature} mb-2   p-2 `}>
                      <h5 className='pb-2'>Duolingo Score</h5>
                      <h6>{prop?.duolingo ? prop.duolingo : "N/A"}</h6>
                    </div>
                    <div className={`${Classes.SingleCardSingleFeature} mb-2   p-2 `}>
                      <h5 className='pb-2'>Deadline</h5>
                      <h6>{ (prop?.deadline==='fall') ? (prop?.fall?.final) : ( prop?.deadline==='spring' ? (prop?.spring?.final) : (prop?.deadline==='summer' ? (prop?.summer?.final) :(prop?.fall?.final ? (prop?.fall?.final):("N/A"))) )}</h6>
                    </div>
                        <a className={`${Classes.SingleCardSingleFeatureButton} mb-2   p-2 `}  href="#" onClick={()=>window.open(prop.link)} target={"_blank"}>
                           Program details     
                        </a>       
            </section>
              
        </div>
      </div>
    </>
  );
}

export default Universitycard;
