/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Image, Text } from "@chakra-ui/react";
import classes from "../styles/corousel.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid, GridItem } from "@chakra-ui/react";

const data = [
  {
    id: 0,
    name: "Akhil Daggubati",
    image: "/images/mentors/Akhil.png",
    content:
      "“I always lived in a misconception that studying in the USA was ridiculously expensive. At flywise the empathetic crew surprised me by clearing all my myths about studying in the USA and guided me to find the most relevant course aligned to my interest in a great university which is within my financial reach. I heartily thank them for their continuous encouragement and guidance, which helps me crack my dream job abroad. I strongly insist flywise to any aspirants.”",
  },
  {
    id: 1,
    name: "Dhanyasri Divi",
    image: "/images/mentors/dhanyasri.png",
    content:
      "I reached out to Pavan (founder) on Linkedin before Flywise was incorporated, in that call he understood my background, aspirations and suggested the best course taking all factors into consideration, that call cleared my questions and gave me a concrete understanding of the pros and cons of the course that was being suggested by Pavan. I've joined Flywise and definitely feel it's beneficial to stay up to date on the latest course offerings,  industry trends and tips to maximize my chances of getting my dream job!",
  },
  {
    id: 2,
    name: "Venkatesh Prasad",
    image: "/images/mentors/venkatesh.png",
    content:
      "I have my Bachelor's in Mechanical Engineering and was absolutely clueless on what to or how to pursue my Master's. My mentor Pavan, at flywise very patiently listened to all my questions, enlightened me about the IT industry and their pay structure and expertly guided me on what course and university to choose.I am really delighted and overwhelmed with the help and support Flywise provided.",
  },
  {
    id:3,
    name:"Preethi Rama",
    image:"/images/mentors/Preethi.png",
    content:
      "“Flywise is a place where innovation and young energy meets real experience. I was managed in a unique manner and was given a customized approach. Going above and beyond to help achieve career goals is something Flywise strongly stands for.”",

  }
];

// [
//               {
//                 name: "Akhil Daggubati",
//                 uni: "University of South Florida",
//                 logo: "/images/icons/floridalogo.png",
//                 img: "/images/mentors/Akhil.png",
//                 text: "“I always lived in a misconception that studying in the USA was ridiculously expensive. At flywise the empathetic crew surprised me by clearing all my myths about studying in the USA and guided me to find the most relevant course aligned to my interest in a great university which is within my financial reach. I heartily thank them for their continuous encouragement and guidance, which helps me crack my dream job abroad. I strongly insist flywise to any aspirants.”",
//                 degree: "Business analytics and information systems",
//               },

//               {
//                 name: "Dhanyasri Divi",
//                 uni: "CSU East Bay",
//                 degree: "Masters in statistics",
//                 img: "/images/mentors/dhanyasri.png",
//                 logo: "/images/icons/csu.png",
//                 text: "I reached out to Pavan (founder) on Linkedin before Flywise was incorporated, in that call he understood my background, aspirations and suggested the best course taking all factors into consideration, that call cleared my questions and gave me a concrete understanding of the pros and cons of the course that was being suggested by Pavan. I've joined Flywise and definitely feel it's beneficial to stay up to date on the latest course offerings,  industry trends and tips to maximize my chances of getting my dream job!",
//               },
//               {
//                 name: "Venkatesh Prasad",
//                 uni: "Stevens institute of technology",
//                 degree: "Business intelligence and analytics",
//                 text: "I have my Bachelor's in Mechanical Engineering and was absolutely clueless on what to or how to pursue my Master's. My mentor Pavan, at flywise very patiently listened to all my questions, enlightened me about the IT industry and their pay structure and expertly guided me on what course and university to choose.I am really delighted and overwhelmed with the help and support Flywise provided.",
//                 img: "/images/mentors/venkatesh.png",
//                 logo: "/images/icons/steven.png",
//               },
//               {
//                 name: "Preethi Rama",
//                 uni: "Cleveland State University",
//                 img: "/images/mentors/Preethi.png",
//                 text: "“Flywise is a place where innovation and young energy meets real experience. I was managed in a unique manner and was given a customized approach. Going above and beyond to help achieve career goals is something Flywise strongly stands for.”",
//                 logo: "/images/icons/clevelandlogo.png",
//                 degree: "Information systems",
//               },
//             ]
function Corousel() {
  const slider = useRef(null);
  const NextArrow = ({ onClick }) => {
    return (
      <div className={classes.nextArrow} onClick={onClick}>
        <ArrowForwardIcon boxSize={10} className={classes.svg} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={classes.prevArrow} onClick={onClick}>
        <ArrowBackIcon boxSize={10} className={classes.svg} />
      </div>
    );
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  // console.log(currentIndex);
  const prev = () => {
    if (currentIndex > 0 && currentIndex !== data.length) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else setCurrentIndex(currentIndex + 1);
    // slider.current.slickPrev();
    console.log(slider)
  };
  const next = () => {
    if (currentIndex > 0 && currentIndex !== data.length) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === data.length - 1) {
      setCurrentIndex(data.length - 1 - currentIndex);
    } else setCurrentIndex(currentIndex + 1);
    // slider.current.slickNext();
    console.log(slider)
  };
  const settings = {
    infinite: true,
    slidesToShow: data.length,
    slidesToScroll: 1,
    speed: 300,
  };
  const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
  return (
    <>
      <Grid
        overflow="hidden"
        maxW="100vw"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
      >
        <GridItem
          colSpan={1}
          display="flex"
          textAlign="center"
          alignItems="center"
          justifyContent="flex-end"
          mt={{ base: "2%", md: "10%" }}
        >
          <PrevArrow onClick={prev} />
        </GridItem>
        <GridItem
          colSpan={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={{ base: "2%", md: "10%" }}
        >
          <div className={classes.corouselMain1} >
            
            {data.map(({ image, id, name }) => (
                <div
                  className={
                    id === currentIndex ? classes.activeSlide : classes.slide
                  }
                  hidden={id!==currentIndex?true:false}
                  
                  key={id}
                >
                  <Image className={classes.img} borderRadius="full" src={image} alt={name} />
                </div>
              ))}
          </div>
          <div className={classes.corouselMain2}>
          <Slider ref={slider} {...settings}>
              {data.map(({ image, id, name }) => (
                <div
                  className={
                    id === currentIndex ? classes.activeSlide : classes.slide
                  }
                  key={id}
                >
                  <Image className={classes.img} borderRadius="full" src={image} alt={name} />
                </div>
              ))}
            </Slider>
          </div>
        </GridItem>
        <GridItem
          colSpan={1}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          // alignItems="center"
          mt={{ base: "2%", md: "10%" }}
        >
          <NextArrow onClick={next} />
        </GridItem>
      </Grid>

      <div className={classes.nameContainer}>
        <Text
          className={classes.name}
          // fontSize={{ base: "22px", md: "36px" }}
          fontFamily="sans-serif"
          paddingTop="1em"
          fontWeight={700}
          textColor="2B6CB0"
        >
          {data[currentIndex].name}
        </Text>
      </div>

      <div className={classes.textContainer}>
        <img
          className={classes.leftQuote}
          src="/images/leftQuote.svg"
          alt="leftQuote"
        />
        <Text
          className={classes.testimonialText}
          // fontSize={{ base: "16px", md: "16px" }}
          fontFamily="sans-serif"
          paddingTop="1em"
          fontWeight={400}
          // marginLeft="25%"
          // marginRight="25%"
          zIndex={10}
        >
          {data[currentIndex].content}
        </Text>
        <img
          className={classes.rightQuote}
          src="/images/rightQuote.svg"
          alt="rightQuote"
        />
      </div>
      
      
    </>
  );
}

export default Corousel;