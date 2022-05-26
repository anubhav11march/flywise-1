/* eslint-disable @next/next/no-img-element */
import {
  Box,
  Button,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  Link,
} from "@chakra-ui/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NLink from "next/link";
import Footer from "../component/common/footerr";
import Navbar from "../component/common/navbar";
import Corousel from "../component/Corousel";
import React, { useEffect, useRef } from "react";
import classes from "../styles/whatsappbtn.module.css";
import "aos/dist/aos.css";
import { TweenMax, Expo } from "gsap";
import "react-multi-carousel/lib/styles.css";
import { ArrowForwardIcon } from '@chakra-ui/icons'



export default function Home() {
  // const responsive = {
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 2,
  //     slidesToSlide: 2, // optional, default to 1.
  //   },
  //   tablet: {
  //     breakpoint: { max: 1200, min: 700 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   mobile: {
  //     breakpoint: { max: 965, min: 643 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  //   smalie: {
  //     breakpoint: { max: 643, min: 0 },
  //     items: 1,
  //     slidesToSlide: 1, // optional, default to 1.
  //   },
  // };


  // let one = useRef(null);
  // let two = useRef(null);
  // let three = useRef(null);
  // let four = useRef(null);
  // let five = useRef(null);
  // let six = useRef(null);
  // let seven = useRef(null);
  // let eight = useRef(null);
  // let nine = useRef(null);
  // let ten = useRef(null);
  let eleven = useRef(null);

  useEffect(() => {
    // TweenMax.to(one.current, 1, {
    //   delay: 0.2,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });
    // TweenMax.to(two.current, 1, {
    //   delay: 0.4,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });
    // TweenMax.to(three.current, 1, {
    //   delay: 0.6,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });
    // TweenMax.to(four.current, 1, {
    //   delay: 0.8,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });

    // TweenMax.to(five.current, 1, {
    //   delay: 1,
    //   opacity: 1,

    //   ease: Expo.easeInOut,
    // });
    // TweenMax.to(six.current, 1, {
    //   delay: 1.2,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });
    // TweenMax.to(seven.current, 1, {
    //   delay: 1.4,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });
    // TweenMax.to(eight.current, 1, {
    //   delay: 1.6,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });

    // TweenMax.to(nine.current, 1, {
    //   delay: 1.8,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });
    // TweenMax.to(ten.current, 1, {
    //   delay: 2,
    //   opacity: 1,
    //   ease: Expo.easeInOut,
    // });
    TweenMax.to(eleven.current, 1, {
      opacity: 1,
      ease: Expo.easeInOut,
    });
  }, []);
  // let bg = 'red';
  let bg = "transparent";

  return (
    <div>
      <Navbar outline="" />
    
    <Box maxW="100vw" >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Flywise</title>

      {/* <Grid
        overflow="hidden"
        maxW="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem rowSpan={12} colSpan={12}>
          <Navbar outline="" />
        </GridItem>
        </Grid> */}
        
        <Grid
        overflow="hidden"
        maxW="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
         
        bg={
            "linear-gradient(180deg, #d6f0ff 41.47%, rgba(255, 255, 255, 0) 100%)"
          }
      >
        <GridItem rowSpan={{base:12,md:8}} colSpan={{base: 12, md:6}}
          mt="10%"
          paddingLeft={{base:"4%",md:"22%"}}
          mr={{base:"5%", md:0}}
        >
          <div  className={classes.headerDiv1} >
            
              <Heading
                textAlign="left"
                sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                className={classes.headerMainText}
                fontWeight={700}
                maxW={578}
                
              >
                Apply to your Dream University for
                <Link
                  _hover={{ textDecoration: "none" }}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  fontWeight="bold"
                  color="#2B6CB0"
                >
                  <span ref={eleven} className={classes.linkk1}>
                    {" "}
                    {"FREE"}
                  </span>
                </Link>
              </Heading>

              <Text
                textAlign="left"
                sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                color="#595858"
                maxW={680}
                paddingTop={25}
                className={classes.subText}
                
              >
                India’s best overseas education platform that travels with you till you land your dream job abroad.
              </Text>
              
              </div>
        </GridItem>
        <GridItem rowSpan={12} colSpan={{base: 12, md:6}} display="flex" justifyContent="center" mt={{base:"10%",md:"7%"}}>
            <div className={classes.illuss} >
              <Image objectFit="contain" src="/images/illus2.svg" alt="main" />
            </div>
        </GridItem>
        <GridItem  rowSpan={{base:12,md:4}} colSpan={{base: 12, md:6}} 
            paddingLeft={{base:0,md:"22%"}}
            textAlign={{base:"center",md:"left"}}
            >

          <Text
                    
                    mt={{base:"5",md:"5",lg:"0"}}
                    className={classes.subText}
                    fontWeight="bold"
                    sx={{
                      fontFamily:"Roboto",
                      fontFamily:'sans-serif'
                    }}
                    maxW={694}
                    
                  >
                    Shortlist the programs that best match your profile
                  </Text>
                  
                    <NLink href="/profile-evaluation" passHref>
                      <Button colorScheme='blue'
                        variant="solid"
                        fontWeight="semibold"
                        size="md"
                        my={{ base: "4", md: "2" }}
                        paddingX={{base:"22%",md:"12%",lg:"7%"}}
                        paddingY={{base:"4%",md:"7%",lg:"5%"}}
                        backgroundColor="#2B6CB0"
                        borderRadius={20}
                        mt={{base:"10",md:"6"}}
                        className={classes.btnText}    
                      >
                        
                        {"Shortlist Universities  "}
                        <ArrowForwardIcon
                          className={classes.btnText}
                        />
                      </Button>
                    </NLink>
        </GridItem>
            
          <GridItem
            rowSpan={12}
            colSpan={4}
            display="flex"
            justifyContent="center"
            mt="16" 
            mb={{base:20,md:20}}
            ml={{base:0,md:"12%"}}
            >
            <div className={classes.header_benefit2}>
              <img 
              className={classes.header_benefitIcon}
              src="/images/checkMark.svg" 
              alt="main" />
              <Text
                  className={classes.textBenefit}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  >Our guidelines and application process is 100% free</Text>
              </div>
          </GridItem>
          <GridItem 
            rowSpan={12}
            colSpan={4}
            display="flex"
            justifyContent="center"
            mt="16"
            mb={{base:20,md:20}}>
            <div className={classes.header_benefit2}>
              <img 
              className={classes.header_benefitIcon}
              src="/images/bookMark.svg" 
              alt="main" />
              <Text
                  className={classes.textBenefit}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  >Get admits from the top universities</Text>
              </div>
          </GridItem>
          <GridItem 
            rowSpan={12}
            colSpan={4}
            display="flex"
            justifyContent="center"
            mt="16"
            mb={{base:20,md:20}}
            mr={{base:0,md:"12%"}}
            >
            <div className={classes.header_benefit2}>
              <img 
              className={classes.header_benefitIcon}
              src="/images/plane.svg" 
              alt="main" />
              <Text
                  className={classes.textBenefit}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}

                  >Get internships and jobs at our partnered companies abroad</Text>
              
              </div>
          </GridItem>
             
          </Grid>
        
        {/* Vikas Thakur done this */}
        <Grid
        overflow="hidden"
        maxW="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem
          rowSpan={12}
          colSpan={12}
          px={["2", "1", "4", "8", "16"]}
          mt={{base:0,md:16}}
          
        >

        <Heading
                mt={{ base: "6", md: "4" }}
                mb={{ base: "6", md: "15" }}

                textAlign="center"
                className={classes.benefitsHeading}
                sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                fontWeight={400}
                color="#2B6CB0"
                
              >
          How can you benefit from Flywise
        </Heading>
        </GridItem>
        </Grid>



        <div
          className={classes.benefitsContainer}
          // overflow="hidden"
          // maxW="100vw"
          // templateRows="repeat(12, 1fr)"
          // templateColumns="repeat(12, 1fr)"
          // marginLeft={{base:0,md:"5%"}}
          // marginRight={{base:0,md:"5%",xl:"1%"}}
        >
        <div className="row mb-5">
        <div className={`${classes.itemBorder} col-12 col-md-6 col-lg-3 mt-5 mb-5 mb-md-0`}>
          <div style={{display:"flex",justifyContent:"center"}}>
              <img style={{width:200,height:200}} src="/images/benefit_1.svg" alt="main" />
            </div>
            <div className={classes.benefitsTitleContainer}>
              <Text
                textAlign="center"
                className={classes.benefitTitle}
                sx={{
                fontFamily:"Roboto",
                fontFamily:'sans-serif'
              }}
                paddingTop={{base:"0.5em", md:"1em"}}
                fontWeight="bold"
              >
                Find the best university
              </Text>
             </div>
             <div className={classes.benefitsContentContainer}>
            <Text
              textAlign={{base:"center",md:"left"}}
              className={classes.benefitContent}
              sx={{
              fontFamily:"Roboto",
              fontFamily:'sans-serif'
            }}
              paddingTop={{base:"0.5em", md:"2em"}}
              
            >
              Select universities that best match with your preferences
            </Text>
            </div>
        </div>
        <div className={`${classes.itemBorder} col-12 col-md-6 col-lg-3 mt-5 mb-5 mb-md-0`}>
          <div style={{display:"flex",justifyContent:"center"}}>
              <img style={{width:200,height:200}} src="/images/benefit_2.svg" alt="main" />
            </div>
            <div className={classes.benefitsTitleContainer}>
              <Text
                textAlign="center"
                className={classes.benefitTitle}
                sx={{
                fontFamily:"Roboto",
                fontFamily:'sans-serif'
              }}
                paddingTop={{base:"0.5em", md:"1em"}}
                fontWeight="bold"
              >
                Application assistance
              </Text>
            </div>
            <div className={classes.benefitsContentContainer}>
            <Text
              textAlign={{base:"center",md:"left"}}
              className={classes.benefitContent}
              sx={{
              fontFamily:"Roboto",
              fontFamily:'sans-serif'
            }}
              paddingTop={{base:"0.5em", md:"2em"}}
              
            >
              Our dedicated admissions expert will apply for you
            </Text>
            </div>
        </div>
        <div className={`${classes.itemBorder} col-12 col-md-6 col-lg-3 mt-5 mb-5 mb-md-0`}>
          <div style={{display:"flex",justifyContent:"center"}}>
              <img style={{width:200,height:200}} src="/images/benefit_3.svg" alt="main" />
            </div>
            
            <div className={classes.benefitsTitleContainer}>
              <Text
                textAlign="center"
                className={classes.benefitTitle}
                sx={{
                fontFamily:"Roboto",
                fontFamily:'sans-serif'
              }}
                paddingTop={{base:"0.5em", md:"1em"}}
                fontWeight="bold"
              >
                Visa and travel assistance
              </Text>
            </div>
            <div className={classes.benefitsContentContainer}>
            <Text
              textAlign={{base:"center",md:"left"}}
              className={classes.benefitContent}
              sx={{
              fontFamily:"Roboto",
              fontFamily:'sans-serif'
            }}
              paddingTop={{base:"0.5em", md:"2em"}}
              
            >
              Get visa application help and pre-departure guidance
            </Text>
            </div>
        </div>
        <div className= {`col-12 col-md-6 col-lg-3 mt-5 mb-5 mb-md-0`}>
          <div style={{display:"flex",justifyContent:"center"}}>
              <img style={{width:200,height:200}} src="/images/benefit_4.svg" alt="main" />
            </div>
            <div className={classes.benefitsTitleContainer}>
              <Text
                textAlign="center"
                className={classes.benefitTitle}
                sx={{
                fontFamily:"Roboto",
                fontFamily:'sans-serif'
              }}
                paddingTop={{base:"0.5em", md:"1em"}}
                fontWeight="bold"
              >
                Career guidance
              </Text>
            </div>
            <div className={classes.benefitsContentContainer}>
            <Text
              textAlign={{base:"center",md:"left"}}
              className={classes.benefitContent}
              sx={{
              fontFamily:"Roboto",
              fontFamily:'sans-serif'
            }}
              paddingTop={{base:"0.5em", md:"2em"}}
              
            >
              Our career guidance program helps you get internships and jobs abroad.
            </Text>
            </div>
        </div>
        
              </div>
          </div>
          
                 
          {/* ************************************************************************************************************** */}
        <Grid
          overflow="hidden"
          maxW="100vw"
          templateRows="repeat(12, 1fr)"
          templateColumns="repeat(12, 1fr)"
          marginLeft={{base:0,md:"5%"}}
          marginRight={{base:0,md:"5%",xl:"1%"}}
        >
        <GridItem
          rowSpan={12}
          px={["2", "1", "4", "8", "16"]}
          colSpan={{base: 12, lg:6}}
          display="flex"
          justifyContent="center"
          mt="16"
          
        >
          
          <div className={classes.additionalBenefit}>
          <img style={{width:150,height:150,position:"absolute",left:"-2em",top:"-1em"}}  src="/images/benefit5.svg" alt="main" />
                
                  <Text
                  textAlign="left"
                  className={classes.additionalBenefitContent}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  paddingY="5%"
                  paddingLeft={{ base: "35%", md: "20%" }}
                  
                >
                  We provide <b>live whatsapp chat support</b> to guide at every step of your abroad journey.
                </Text>
                
          </div>
        </GridItem>
        <GridItem
          rowSpan={12}
          px={["2", "1", "4", "8", "16"]}
          colSpan={{base: 12, lg:6}}
          display="flex"
          justifyContent="center"
          mt="16"
          
        >
          
          <div className={classes.additionalBenefit}>
          <img style={{width:150,height:150,position:"absolute",left:"-2em",top:"-1em"}}  src="/images/benefit6.svg" alt="main" />
                <Text
                  textAlign="left"
                  className={classes.additionalBenefitContent}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  paddingY="5%"
                  paddingLeft={{ base: "35%", md: "20%" }}
                  
                >
                  Our application service is <b>100% free for students,</b> as we are sponsored by universities.
                </Text>
          </div>
        </GridItem>
        {/* ********************************************************************************* */}

        <GridItem
          rowSpan={12}
          colSpan={12}
          px={["2", "1", "4", "8", "16"]}
          mt="16"
        >

          <Heading
                  mt={{ base: "6", md: "4" }}
                  textAlign="center"
                  className={classes.universitiesTitle}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  fontWeight={400}
                  color="#2B6CB0"
                  marginX={{base:"5.5%",md:"25%"}}
                  
                >
            Our previous students got admits from top universities such as 
          </Heading>
        </GridItem>
        </Grid>
        
        
        <div style={{position:'relative'}}>
          <img className={classes.mapImage} src="/images/worldMap.svg" alt="main" />

              <img className={classes.arizonaUni} src="/images/arizonaUni.svg" alt="main" />
              <img className={classes.stevensUni} src="/images/stevensUni.svg" alt="main" />
              <img className={classes.houstonUni} src="/images/houstonUni.svg" alt="main" />
              <img className={classes.sanjoseUni} src="/images/sanjoseUni.svg" alt="main" />
              <img className={classes.oregonUni} src="/images/oregonUni.svg" alt="main" />
              <img className={classes.usf} src="/images/usf.svg" alt="main" />
              <img className={classes.cincinnatiUni} src="/images/cincinnatiUni.svg" alt="main" />
              
              <p
                  className={classes.andMore}
                >
                  and many more...
                </p>
          
        </div>
          <Grid overflow="hidden"
        maxW="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
        bg={
                "linear-gradient(180deg, #d6f0ff 41.47%, rgba(255, 255, 255, 0) 100%)"
              }
        >

          <GridItem rowSpan={12} colSpan={12}
            
          >
            <Heading
                  mt={{ base: "6", lg: "4" }}
                  textAlign="center"
                  className={classes.benefitsHeading}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  fontWeight={400}
                  color="#2B6CB0"
                  padding="2em"
                >
            What is a career guidance program?
          </Heading>
          </GridItem>
          <GridItem
          
          px={["2", "1", "4", "8", "16"]}
          colSpan={{base: 12, lg:4}}
          mt={{base:"3rem", lg:"1rem"}}
          ml={{base:0,lg:"11%"}}
          // ml={{base:0,md:"11%"}}
          rowSpan={12}
          >
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img className={classes.cgImage} src="/images/cg1.svg" alt="main" />
                </div>
                
                <Text
                  paddingTop={{base:"0.5em", lg:"1em"}}
                  className={classes.benefitTitle}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  fontWeight="bold"
                  paddingLeft={{ base: "0", lg: "4rem" }}
                  textAlign={{base: "center", lg:"left"}}
                >
                  Attend your program
                </Text>
                <Text
                  paddingTop={{base:"0.5em", lg:"2em"}}
                  className={classes.benefitContent}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  paddingLeft={{ base: "0", lg: "4rem" }}
                  textAlign={{base: "center", lg:"left"}}
                >
                  Study at one of our partnered universities by applying through flywise
                </Text>
          </GridItem>
          <GridItem 
            rowSpan={12}
            px={["2", "1", "4", "8", "16"]}
            colSpan={{base: 12, lg:4}}
            mt={{base:"6rem", lg:"1rem"}}
            >
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img className={classes.cgImage} src="/images/cg2.svg" alt="main" />
                </div>
                
                <Text
                  
                  paddingTop={{base:"0.5em", lg:"1em"}}
                  className={classes.benefitTitle}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  fontWeight="bold"
                  paddingLeft={{ base: "0", lg: "4rem" }}
                  textAlign={{base: "center", lg:"left"}}
                >
                  Placement Training
                </Text>
                <Text
                  paddingTop={{base:"0.5em", lg:"2em"}}
                  className={classes.benefitContent}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  paddingLeft={{ base: "0", lg: "4rem" }}
                  textAlign={{base: "center", lg:"left"}}
                >
                  We provide training on professional networking and interview skills
                </Text>
          
          </GridItem>
          <GridItem 
          rowSpan={12}
            px={["2", "1", "4", "8", "16"]}
            colSpan={{base: 12, lg:4}}
            mt={{base:"6rem", lg:"1rem"}}
            mr={{base:0,lg:"11%"}}
          >
                <div style={{display:"flex",justifyContent:"center"}}>
                  <img className={classes.cgImage}  src="/images/cg3.svg" alt="main" />
                </div>
                
                <Text
                  paddingTop={{base:"0.5em", lg:"1em"}}
                  className={classes.benefitTitle}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  fontWeight="bold"
                  paddingLeft={{ base: "0", lg: "4rem" }}
                  textAlign={{base: "center", lg:"left"}}
                >
                  Job Opportunities
                </Text>
                <Text                  
                  paddingTop={{base:"0.5em", lg:"2em"}}
                  // fontSize={{ base: "16px", md: "16px" }}
                  className={classes.benefitContent}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  paddingLeft={{ base: "0", lg: "4rem" }}
                  textAlign={{base: "center", lg:"left"}}
                >
                  Get job referrals from previous students and partnered companies.
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
            mt={{base:10, md:0}}
            >

              <GridItem rowSpan={1} colSpan={9}>
                <Heading
                    mt={{ base: "6", md: "10%" }}
                  textAlign="center"
                  className={classes.benefitsHeading}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  fontWeight="semi-bold"
                  marginX={{base:"8%",md:"25%"}}
                  mb={{base:0,md:'1rem'}}
                      // padding="2em"
                    >
                Our students got offered from top companies
              </Heading>

              </GridItem>
          </Grid>
                {/* smallCompanies will be hidden if screen size is large */}
              <div className={classes.smallCompanies}>
              <div className="container">
                <div className="row">
                  <div className="col-6 d-flex justify-content-center" >
                    <Image className="p-4"  src="/images/microsoft.svg" alt="main" />
                  </div>
                  <div className="col-6 d-flex justify-content-center" >
                    <Image className="p-4" src="/images/airbnb.svg" alt="main" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex justify-content-center" >
                    <Image className="p-4"   src="/images/google.svg" alt="main" />
                  </div>
                  <div className="col-6 d-flex justify-content-center" >
                    <Image className="p-4" src="/images/stripe.svg" alt="main" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex justify-content-center" >
                    <Image className="p-4"   src="/images/apple.svg" alt="main" />
                  </div>
                  <div className="col-6 d-flex justify-content-center" >
                    <Image className="p-4" src="/images/amazon.svg" alt="main" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6 d-flex justify-content-center" >
                    <Image className="p-4"   src="/images/meta.svg" alt="main" />
                  </div>
                  <div className="col-6 d-flex justify-content-center" >
                    <Image className="p-4" src="/images/uber.svg" alt="main" />
                  </div>
                </div>
                </div>
              </div>
                {/* largeCompanies will be hidden if screen size is small */}
              <div className={classes.largeCompanies}>
                <img className={classes.microsoft} src="/images/microsoft.svg" alt="main" />
                <img className={classes.airbnb} src="/images/airbnb.svg" alt="main" />
                <img className={classes.google} src="/images/google.svg" alt="main" />
                <img className={classes.stripe} src="/images/stripe.svg" alt="main" />
                <img className={classes.apple} src="/images/apple.svg" alt="main" />
                <img className={classes.amazon} src="/images/amazon.svg" alt="main" />
                <img className={classes.meta} src="/images/meta.svg" alt="main" />
                <img className={classes.uber} src="/images/uber.svg" alt="main" />
                <img className={classes.lyft} src="/images/lyft.svg" alt="main" />
              </div>

                <Heading
                  mt={{ base: "10", md: "10%" }}
                  textAlign="center"
                  className={classes.testimonialsHeading}
                  sx={{
                  fontFamily:"Roboto",
                  fontFamily:'sans-serif'
                }}
                  fontWeight={400}
                  marginX={{base:"2%",md:"25%"}}
                  mb={{base:"2rem",md:"0"}}
                    >
                Your future is sorted out with Flywise like our <b>10,000+</b> other students
              </Heading>
          <Corousel />

      <Footer />
    </Box>
    </div>
  );
}
