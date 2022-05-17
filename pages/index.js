import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NLink from "next/link";
import FaqList from "../component/common/faqs";
import Footer from "../component/common/footerr";
import Navbar from "../component/common/navbar";
import Corousel from "../component/Corousel"
import faqs from "./../content/homeFaqs";
import React, { useEffect, useRef } from "react";
import TestimonialCard from "../component/testimonialCard";
import classes from "../styles/whatsappbtn.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { TweenMax, Expo } from "gsap";
import "react-multi-carousel/lib/styles.css";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import WorldMap from "react-world-map";



export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 700 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 965, min: 643 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    smalie: {
      breakpoint: { max: 643, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

const row1Image = [
  {
  id:1,
  image:"/images/microsoft.svg"
},
  {
  id:2,
  image:"/images/airbnb.svg"
},
  {
  id:3,
  image:"/images/google.svg"
},
]
const row2Image = [
  {
  id:1,
  image:"/images/stripe.svg"
},
  {
  id:2,
  image:"/images/apple.svg"
},
  {
  id:3,
  image:"/images/meta.svg"
},
]
const row3Image = [
  {
  id:1,
  image:"/images/amazon.svg"
},
  {
  id:2,
  image:"/images/uber.svg"
},
  {
  id:2,
  image:"/images/lyft.svg"
},
]


  let one = useRef(null);
  let two = useRef(null);
  let three = useRef(null);
  let four = useRef(null);
  let five = useRef(null);
  let six = useRef(null);
  let seven = useRef(null);
  let eight = useRef(null);
  let nine = useRef(null);
  let ten = useRef(null);
  let eleven = useRef(null);

  useEffect(() => {
    TweenMax.to(one.current, 1, {
      delay: 0.2,
      opacity: 1,
      ease: Expo.easeInOut,
    });
    TweenMax.to(two.current, 1, {
      delay: 0.4,
      opacity: 1,
      ease: Expo.easeInOut,
    });
    TweenMax.to(three.current, 1, {
      delay: 0.6,
      opacity: 1,
      ease: Expo.easeInOut,
    });
    TweenMax.to(four.current, 1, {
      delay: 0.8,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    TweenMax.to(five.current, 1, {
      delay: 1,
      opacity: 1,

      ease: Expo.easeInOut,
    });
    TweenMax.to(six.current, 1, {
      delay: 1.2,
      opacity: 1,
      ease: Expo.easeInOut,
    });
    TweenMax.to(seven.current, 1, {
      delay: 1.4,
      opacity: 1,
      ease: Expo.easeInOut,
    });
    TweenMax.to(eight.current, 1, {
      delay: 1.6,
      opacity: 1,
      ease: Expo.easeInOut,
    });

    TweenMax.to(nine.current, 1, {
      delay: 1.8,
      opacity: 1,
      ease: Expo.easeInOut,
    });
    TweenMax.to(ten.current, 1, {
      delay: 2,
      opacity: 1,
      ease: Expo.easeInOut,
    });
    TweenMax.to(eleven.current, 1, {
      opacity: 1,
      ease: Expo.easeInOut,
    });
  }, []);
  // let bg = 'red';
  let bg = "transparent";

  return (
    <Box maxW="100vw">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Flywise</title>

      <Grid
        overflow="hidden"
        maxW="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem rowSpan={12} colSpan={12}>
          <Navbar outline="" />
        </GridItem>
        <GridItem rowSpan={8} colSpan={12} 
        bg={
            "linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)"
          }>
          <div className={classes.home}>
            <div className={classes.textDiv}>
              <Heading
                mt={{ base: "6", md: "4" }}
                textAlign={{ base: "center", md: "left" }}
                fontSize={["30px", "2xl", "3xl", "4xl", "4xl"]}
                fontFamily="sans-serif"
                fontWeight={700}
                maxW={578}
                
              >
                Apply to your Dream University for
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontFamily="sans-serif"
                  fontWeight="bold"
                  fontSize={["22px", "2xl", "3xl", "4xl", "4xl"]}
                  color="#2B6CB0"
                >
                  <span ref={eleven} className={classes.linkk1}>
                    {" "}
                    {"Free"}
                  </span>
                </Link>
              </Heading>

              <Text
                textAlign={{ base: "center", md: "left" }}
                my="4"
                fontSize={{ base: "16px", md: "16px" }}
                fontFamily="sans-serif"
                color="#595858"
                maxW={694}
                paddingTop={25}
                
              >
                We help you get admitted to your dream university with a career guidance program.
              </Text>
              <Text
                textAlign={{ base: "center", md: "left" }}
                my="4"
                fontSize={{ base: "16px", md: "16px" }}
                fontWeight="bold"
                fontFamily="sans-serif"
                maxW={694}
                paddingTop={50}
              >
                Shortlist the programs that best match your profile
              </Text>
              <Flex
                my={{ base: "10", md: "5" }}
                justifyContent={{
                  base: "center",
                  md: "center",
                  lg: "center",
                  xl: "flex-start",
                }}
              >
                <NLink href="/profile-evaluation" passHref>
                  <Button colorScheme='blue'
                    variant="solid"
                    fontWeight="semibold"
                    size="md"
                    px={6}
                    my={{ base: "4", md: "2" }}
                    mt={6}
                    backgroundColor="#2B6CB0"             
                  >
                    
                    {"Free Profile Evaluation  "}
                    <ArrowForwardIcon fontSize={20} />
                  
                  </Button>
                    
                
                </NLink>
              </Flex>
            </div>

            <div className={classes.illuss}>
              <Image objectFit="contain" src="/images/illus2.svg" alt="main" />
            </div>
            
          </div>
          </GridItem>
          <GridItem 
            rowSpan={12}
            colSpan={4}
            px={["2", "1", "4", "8", "16"]}
            // colSpan={{base: 12, md:6}}
            
            mt="16">
            <div className={classes.header_benefit2}>
              <Image style={{position:"absolute",left:-40,top:-40,width:65,height:65}} objectFit="contain" src="/images/checkMark.svg" alt="main" />
              <p>Our guidelines and application process is 100% free</p>
              </div>
          </GridItem>
          <GridItem 
            rowSpan={12}
            colSpan={4}
            px={["2", "1", "4", "8", "16"]}
            // colSpan={{base: 12, md:6}}
            
            mt="16">
            <div className={classes.header_benefit2}>
              <Image style={{position:"absolute",left:-40,top:-40,width:65,height:65}} objectFit="contain" src="/images/bookMark.svg" alt="main" />
              <p>Get admits from the top universities.</p>
              </div>
          </GridItem>
          <GridItem 
            rowSpan={12}
            colSpan={4}
            px={["2", "1", "4", "8", "16"]}
            // colSpan={{base: 12, md:6}}
            
            mt="16">
            <div className={classes.header_benefit2}>
              <Image style={{position:"absolute",left:-40,top:-40,width:65,height:65}} objectFit="contain" src="/images/plane.svg" alt="main" />
              <p>Get internships and jobs at our partnered companies abroad</p>
              </div>
          </GridItem>
              {/* <div className={classes.header_benefits} style={{marginTop:"5%"}}>
                <div className={classes.header_benefit}>
                  <Image style={{position:"absolute",left:-40,top:-40,width:65,height:65}} objectFit="contain" src="/images/checkMark.svg" alt="main" />
                  <p>Our guidelines and application process is 100% free</p>
                </div>
                <div  className={classes.header_benefit}>
                  <Image style={{position:"absolute",left:-40,top:-40,width:65,height:65}} objectFit="contain" src="/images/bookMark.svg" alt="main" />
                 <p>Get admits from the top universities.</p>
                </div>
                <div  className={classes.header_benefit}>
                  <Image style={{position:"absolute",left:-40,top:-40,width:65,height:65}} objectFit="contain" src="/images/plane.svg" alt="main" />
                 <p>Get internships and jobs at our partnered companies abroad</p>
                </div>
          </div> */}
          
        
        {/* Vikas Thakur done this */}
        <GridItem
          rowSpan={12}
          colSpan={12}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}

          mt="16"
          
        >

        <Heading
                mt={{ base: "6", md: "4" }}
                textAlign="center"
                fontSize={["30px", "2xl", "3xl", "4xl", "4xl"]}
                fontFamily="sans-serif"
                fontWeight={400}
                color="#2B6CB0"
                
              >
          How can you benefit from Flywise
        </Heading>
        </GridItem>
        <GridItem 
        rowSpan={12}
          colSpan={3}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          className={classes.itemBorder}
          mt="16"
          >
          {/* <div className={classes.benefit} style={{borderLeft:0}}> */}
                <div style={{display:"flex",justifyContent:"center"}}>
                  <Image style={{width:200,height:200}} objectFit="contain" src="/images/benefit1.svg" alt="main" />
                </div>
                
                <Text
                  textAlign="center"
                
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="1em"
                  fontWeight="bold"
                  
                  
                >
                  Find the best university
                </Text>
                <Text
                  textAlign="center"
                  
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="2em"
                  
                >
                  Select universities that best match with your preferences
                </Text>
          {/* </div> */}
          </GridItem>
          <GridItem 
        rowSpan={12}
          colSpan={3}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          className={classes.itemBorder}
          mt="16"
          >
          {/* <div className={classes.benefit}> */}
                <div style={{display:"flex",justifyContent:"center"}}>
                  <Image style={{width:200,height:200}} objectFit="contain" src="/images/benefit2.svg" alt="main" />
                </div>
                
                <Text
                  textAlign="center"
                
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="1em"
                  fontWeight="bold"
                
                  
                >
                  Application assistance
                </Text>
                <Text
                  textAlign="center"
                  
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="2em"
                
                >
                  Our dedicated admissions expert will apply for you
                </Text>
          {/* </div> */}
          </GridItem>
          <GridItem 
        rowSpan={12}
          colSpan={3}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          className={classes.itemBorder}
          mt="16"
          >
          {/* <div className={classes.benefit} > */}
                <div style={{display:"flex",justifyContent:"center"}}>
                  <Image style={{width:200,height:200}} objectFit="contain" src="/images/benefit3.svg" alt="main" />
                </div>
                
                
                <Text
                  textAlign="center"
                
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="1em"
                  fontWeight="bold"
                  
                  
                >
                  Visa and travel assistance
                </Text>
                <Text
                  textAlign="center"
                  
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="2em"
                  
                >
                  Get visa application help and pre-departure guidance
                </Text>
          {/* </div> */}
          </GridItem>
          <GridItem 
        rowSpan={12}
          colSpan={3}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          
          mt="16"
          >
          {/* <div className={classes.benefit} style={{borderRight:0,paddingRight:0}}> */}
                <div style={{display:"flex",justifyContent:"center"}}>
                  <Image style={{width:200,height:200}} objectFit="contain" src="/images/benefit4.svg" alt="main" />
                  {/* <Image style={{width:200,height:200}} objectFit="contain" src="/images/.svg" alt="main" /> */}
                </div>
                <Text
                  textAlign="center"
                
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="1em"
                  fontWeight="bold"
                  
                >
                  Career guidance
                </Text>
                <Text
                  textAlign="center"
                  
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="2em"
                >
                  Our career guidance program helps you get internships and jobs abroad.
                </Text>
          {/* </div> */}
          
          </GridItem>
                 
          {/* ************************************************************************************************************** */}
        <GridItem
          rowSpan={12}
          colSpan={6} //
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          display="flex"
          justifyContent="center"
          mt="16"
          
        >
          
          <div className={classes.additionalBenefit}>
          <Image style={{width:150,height:150,position:"absolute",left:"-2em",top:"-2em"}}  objectFit="contain" src="/images/benefit5.svg" alt="main" />
                
                  <Text
                  textAlign="center"
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingY="5%"
                  paddingLeft="20%"
                  
                >
                  We provide <b>live whatsapp chat support</b> to guide at every step of your abroad journey.
                </Text>
                
          </div>
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={6} //
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          display="flex"
          justifyContent="center"
          mt="16"
          
        >
          
          <div className={classes.additionalBenefit}>
          <Image style={{width:150,height:150,position:"absolute",left:"-2em",top:"-2em"}}  objectFit="contain" src="/images/benefit6.svg" alt="main" />
                <Text
                  textAlign="center"
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingY="5%"
                  paddingLeft="20%"
                  
                >
                  We provide <b>live whatsapp chat support</b> to guide at every step of your abroad journey.
                </Text>
          </div>
        </GridItem>
        {/* ********************************************************************************* */}

        <GridItem
          rowSpan={12}
          colSpan={12}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}

          mt="16"
        >

          <Heading
                  mt={{ base: "6", md: "4" }}
                  textAlign="center"
                  fontSize={["25px", "xl", "2xl", "3xl", "3xl"]}
                  fontFamily="sans-serif"
                  fontWeight={400}
                  color="#2B6CB0"
                  
                >
            Our previous students got admits from top universities such as 
          </Heading>
        </GridItem>
        {/* <GridItem
          rowSpan={12}
          colSpan={12}
          //px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          color="#ccc"
          mt="16"
        >

          <WorldMap />

        </GridItem> */}



          </Grid>
        <div style={{position:'relative'}}>
          <Image style={{width:"100%",position:'relative'}} objectFit="contain" src="/images/worldMap.svg" alt="main" />

              <Image style={{position:"absolute",left:280,top:220,width:300}} objectFit="contain" src="/images/arizonaUni.svg" alt="main" />
              <Image style={{position:"absolute",left:700,top:160,width:200}} objectFit="contain" src="/images/stevensUni.svg" alt="main" />
              <Image style={{position:"absolute",right:270,top:200,width:250}} objectFit="contain" src="/images/oregonUni.svg" alt="main" />
              <Image style={{position:"absolute",right:280,top:350,width:200}} objectFit="contain" src="/images/usf.svg" alt="main" />
              <Image style={{position:"absolute",top:480,left:680,width:200}} objectFit="contain" src="/images/cincinnatiUni.svg" alt="main" />
              <Image style={{position:"absolute",left:250,top:380,width:250}} objectFit="contain" src="/images/houstonUni.svg" alt="main" />
              <Image style={{position:"absolute",left:630,top:250,width:250}} objectFit="contain" src="/images/sanjoseUni.svg" alt="main" />
              <Text
                  fontSize={{ base: "40px", md: "40px" }}
                  fontFamily="sans-serif"
                  paddingTop="2em"
                  paddingLeft="4em" 
                  color="#2B6CB0"
                  fontWeight={400}
                  style={{position:"absolute",left:1000,top:550}}
                >
                  and many more...
                </Text>
          
        </div>
          <Grid overflow="hidden"
        maxW="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
        bg={
                "linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)"
              }
        >

          <GridItem rowSpan={12} colSpan={12}>
            <Heading
                  mt={{ base: "6", md: "4" }}
                  textAlign="center"
                  fontSize={["25px", "xl", "2xl", "3xl", "3xl"]}
                  fontFamily="sans-serif"
                  fontWeight={400}
                  color="#2B6CB0"
                  padding="2em"
                >
            What is career guidance program?
          </Heading>
          </GridItem>
          <GridItem
          rowSpan={12}
          colSpan={4}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          mt="16"
          >
          {/* <div className={classes.benefit} style={{borderLeft:0}}> */}
                <div style={{display:"flex",justifyContent:"center"}}>
                  <Image style={{width:200,height:200}} objectFit="contain" src="/images/cg1.svg" alt="main" />
                </div>
                
                <Text
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="1em"
                  fontWeight="bold"
                  paddingLeft="4em"
                  
                >
                  Attend your program
                </Text>
                <Text
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="2em"
                  paddingLeft="4em"
                  
                >
                  Study at one of our partnered universities by applying through flywise
                </Text>
          {/* </div> */}
          </GridItem>
          <GridItem 
        rowSpan={12}
          colSpan={4}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}
          
          mt="16"
          >
          {/* <div className={classes.benefit} style={{borderLeft:0}}> */}
                <div style={{display:"flex",justifyContent:"center"}}>
                  <Image style={{width:200,height:200}} objectFit="contain" src="/images/cg2.svg" alt="main" />
                </div>
                
                <Text
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="1em"
                  fontWeight="bold"
                  paddingLeft="4em"
                  
                >
                  Placement Training
                </Text>
                <Text
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="2em"
                  paddingLeft="4em"
                >
                  We provide training on professional networking and interview skills
                </Text>
          {/* </div> */}
          </GridItem>
          <GridItem 
          rowSpan={12}
            colSpan={4}
            px={["2", "1", "4", "8", "16"]}
            // colSpan={{base: 12, md:6}}
            mt="16"
          >
          {/* <div className={classes.benefit} style={{borderLeft:0}}> */}
                <div style={{display:"flex",justifyContent:"center"}}>
                  <Image style={{width:200,height:200}} objectFit="contain" src="/images/cg3.svg" alt="main" />
                </div>
                
                <Text
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="1em"
                  fontWeight="bold"
                  paddingLeft="4em"
                >
                  Job Opportunities
                </Text>
                <Text                  
                  fontSize={{ base: "16px", md: "16px" }}
                  fontFamily="sans-serif"
                  paddingTop="2em"
                  paddingLeft="4em"
                >
                  SGet job referrals from previous students and partnered companies.
                </Text>
          {/* </div> */}
          </GridItem>
          </Grid>
              {/* ***************************************************************************************** */}
          <Grid  overflow="hidden"
            maxW="100vw"
            templateRows="repeat(1, 1fr)"
            templateColumns='repeat(9, 1fr)'
            marginLeft={50}
            marginRight={50}
            >

              <GridItem rowSpan={1} colSpan={9}>
                <Heading
                      mt={{ base: "6", md: "4" }}
                      textAlign="center"
                      fontSize={["25px", "xl", "2xl", "3xl", "3xl"]}
                      fontFamily="sans-serif"
                      fontWeight={400}
                      color="#000000"
                      padding="2em"
                    >
                Our students got offered from top companies
              </Heading>

              </GridItem>
          </Grid>

              <div className="container">
                <div className="row">
                  <div className="col-4 mt-5" style={{textAlign:"right"}} >
                  {row1Image.map(({id,image})=>(
                    <Image className="p-5"   src={image} alt="main" key={id} />
                  ))}
                  </div>
                  <div className="col-4" style={{textAlign:"center"}}>
                    {row2Image.map(({id,image})=>(
                    <Image className="p-5" src={image} alt="main" key={id} />
                  ))}
                  </div>
                  <div className="col-4 mt-5">
                      {row3Image.map(({id,image})=>(
                    <Image className="p-5" src={image} alt="main" key={id} />
                  ))}
                  </div>
                </div>
              </div>

              <GridItem rowSpan={1} colSpan={9}>
                <Heading
                      mt={{ base: "6", md: "4" }}
                      textAlign="center"
                      fontSize={["25px", "xl", "2xl", "3xl", "3xl"]}
                      fontFamily="sans-serif"
                      fontWeight={400}
                      color="#000000"
                      padding="2em"
                    >
                Your future is sorted out with Flywise like our <b>10,000+</b> other students
              </Heading>
              </GridItem>

          <Corousel />











      <Footer />
    </Box>
  );
}
