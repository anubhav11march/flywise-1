/* eslint-disable @next/next/no-img-element */

import { useRef, useState } from "react";
import Slider from "react-slick";
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { Image,Text } from '@chakra-ui/react'
import classes from "../styles/corousel.module.css";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ArrowButtonSmall } from "./common/sliderButton";
import { Grid,GridItem } from "@chakra-ui/react";

const data=[
    {
        id:1,
        name:'PL',
        image:'/images/pl.png',
        content:'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.'
    },
    {
        id:2,
        name:'Rahul',
        image:'/images/rahul.png',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod adipiscing massa cursus nibh porttitor. Fringilla luctus porttitor proin sem convallis. Ipsum cursus urna pellentesque.'
    },
    {
        id:3,
        name:'PR',
        image:'/images/pr.png',
        content:'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB.'
    },
]

function Corousel() {
    const slider= useRef(null)
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

  const [currentIndex, setCurrentIndex] = useState(1);

//   const settings = {
//     infinite: true,
//     lazyLoad: true,
//     speed: 300,
//     slidesToShow: 3,
//     centerMode: true,
//     centerPadding: 0,
//     beforeChange: (current, next) => setCurrentIndex(next),
//   };
const settings = {
      centerMode: true,
      infinite: true,
      lazyLoad:true,
      centerPadding: 0,
      slidesToShow: 3,
      speed: 300,
      beforeChange: (current, next) => setCurrentIndex(next),
    };


  return (
    <>
      <Grid
        overflow="hidden"
        maxW="100vw"
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)">
        <GridItem
          colSpan={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="16">
          <PrevArrow  onClick={() => slider?.current?.slickPrev()} />
        </GridItem>
        <GridItem
          colSpan={3}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="16">
          <div className={classes.corouselMain}>
                <Slider ref={slider} {...settings}>
                    {data.map((person, idx) => (
                    <div  className={idx === currentIndex ? classes.activeSlide : classes.slide} key={idx}>
                        {/* <img src={img} alt={img} /> */}
                        <Image className={classes.img} src={person.image} alt={person.name} />
                    </div>
                    ))}
                </Slider>
                
                
                {/* <div className="border-0">
                  <ArrowButtonSmall slider={slider} />
                </div> */}
            </div>
        </GridItem>
        <GridItem
          colSpan={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt="16">
          <NextArrow  onClick={() => slider?.current?.slickNext()} />
        </GridItem>
      </Grid>
        
        <div className={classes.nameContainer}>
            <Text
                fontSize={{ base: "20px", md: "36px" }}
                fontFamily="sans-serif"
                paddingTop="1em"
                fontWeight={700}
                textColor="2B6CB0"
            >{data[currentIndex].name}</Text>
        </div>

        
        <div className={classes.textContainer}>
            <img className={classes.leftQuote} src="/images/leftQuote.svg" alt="leftQuote" />
            <Text
                fontSize={{ base: "16px", md: "16px" }}
                fontFamily="sans-serif"
                paddingTop="1em"
                fontWeight={400}
                marginLeft="25%"
                marginRight="25%"
                zIndex={10}
            >
                {data[currentIndex].content}
            </Text>
            <img className={classes.rightQuote} src="/images/rightQuote.svg" alt="rightQuote" />
        </div>

    </>
  );
}

export default Corousel;