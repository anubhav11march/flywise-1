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
    name: "PL",
    image: "/images/pl.png",
    content:
      "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA.",
  },
  {
    id: 1,
    name: "Rahul",
    image: "/images/rahul.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod adipiscing massa cursus nibh porttitor. Fringilla luctus porttitor proin sem convallis. Ipsum cursus urna pellentesque.",
  },
  {
    id: 2,
    name: "PR",
    image: "/images/pr.png",
    content:
      "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB.",
  },
];

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

  const [currentIndex, setCurrentIndex] = useState(1);
  // console.log(currentIndex);
  const prev = () => {
    if (currentIndex > 0 && currentIndex !== data.length) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(data.length - 1);
    } else setCurrentIndex(currentIndex + 1);
  };
  const next = () => {
    if (currentIndex > 0 && currentIndex !== data.length) {
      setCurrentIndex(currentIndex + 1);
    }
    if (currentIndex === data.length - 1) {
      setCurrentIndex(data.length - 1 - currentIndex);
    } else setCurrentIndex(currentIndex + 1);
  };
  const settings = {
    infinite: true,
    slidesToShow: data.length,
    scrollToShow: 1,
    speed: 300,
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
          <div className={classes.corouselMain}>
            <Slider ref={slider} {...settings}>
              {data.map(({ image, id, name }) => (
                <div
                  className={
                    id === currentIndex ? classes.activeSlide : classes.slide
                  }
                  key={id}
                >
                  <Image className={classes.img} src={image} alt={name} />
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