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
import faqs from "./../content/homeFaqs";
import { useEffect, useRef } from "react";
import TestimonialCard from "../component/testimonialCard";
import classes from "../styles/whatsappbtn.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { TweenMax, Expo } from "gsap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
        <GridItem rowSpan={12} colSpan={12}>
          <div className={classes.home}>
            <div className={classes.textDiv}>
              <Heading
                mt={{ base: "6", md: "4" }}
                textAlign={{ base: "center", md: "left" }}
                fontSize={["22px", "2xl", "3xl", "4xl", "4xl"]}
              >
                An exclusive overseas education platform for
                <Link
                  _hover={{ textDecoration: "none" }}
                  fontWeight="bold"
                  fontSize={["22px", "2xl", "3xl", "4xl", "4xl"]}
                  color="#0DB3FB"
                >
                  <span ref={eleven} className={classes.linkk1}>
                    {" "}
                    {`master's`}
                  </span>{" "}
                  <span ref={one} className={classes.linkk2}>
                    education
                  </span>{" "}
                  <span ref={two} className={classes.linkk3}>
                    and
                  </span>{" "}
                  <span ref={three} className={classes.linkk4}>
                    your
                  </span>{" "}
                  <span ref={four} className={classes.linkk5}>
                    future
                  </span>{" "}
                  <span ref={five} className={classes.linkk6}>
                    IT
                  </span>{" "}
                  <span ref={six} className={classes.linkk7}>
                    career
                  </span>{" "}
                  <span ref={seven} className={classes.linkk8}>
                    in
                  </span>{" "}
                  <span ref={eight} className={classes.linkk9}>
                    the
                  </span>{" "}
                  <span ref={nine} className={classes.linkk10}>
                    USA!
                  </span>{" "}
                </Link>
              </Heading>

              <Text
                textAlign={{ base: "center", md: "left" }}
                my="4"
                fontSize={{ base: "16px", md: "16px" }}
              >
                Why do we go abroad? To pursue higher education, land a secure
                and stable job, earn a steady income and further pursue our
                dreams. Most of us dream of achieving this instantly as soon as
                we get an admission; however, the real journey starts when you
                land abroad.
              </Text>
              <Text
                textAlign={{ base: "center", md: "left" }}
                my="4"
                fontSize={{ base: "16px", md: "16px" }}
              >
                Our team at Flywise can support you along this new journey and
                help land your dream job.
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
                  <Button
                    variant={"solid"}
                    size={"md"}
                    color="white"
                    fontWeight="semibold"
                    px="6"
                    my={{ base: "4", md: "2" }}
                    id="gradientt"
                    colorScheme="blue"
                    // bg="linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)"
                    // _hover={{
                    // 	bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
                    // }}
                    // _focus={{
                    // 	bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
                    // }}
                    // _active={{
                    // 	bg: 'linear-gradient(289.85deg, #6ADBDB 20.37%, #4080D3 73.15%)'
                    // }}
                    mt="6"
                    rounded="full"
                  >
                    Free Profile Evaluation
                  </Button>
                </NLink>
              </Flex>
            </div>

            <div className={classes.illuss}>
              <Image objectFit="contain" src="/images/illus.svg" alt="main" />
            </div>
          </div>
        </GridItem>
        {/* Vikas Thakur done this */}
        <GridItem
          rowSpan={12}
          colSpan={12}
          px={["2", "1", "4", "8", "16"]}
          // colSpan={{base: 12, md:6}}

          mt="16"
          bg={
            "linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)"
          }
        >
          <Center>
            <Flex flexDirection={{ md: "row", base: "column" }}>
              <Image
                maxW="25rem"
                maxH="70vh"
                p="16"
                ml={["2", "4", "8", "16", "44"]}
                alt="desk"
                src="/images/person_board.png"
              />
              <Box
                mt={["2", "4", "8", "16", "16"]}
                ml={["2", "4", "8", "16", "12"]}
              >
                <Heading
                  mt={{ base: "4", md: "0" }}
                  textAlign={{ base: "center", md: "left" }}
                  mb="4"
                >
                  Do you worry about
                </Heading>
                {[
                  "backlogs and low B.tech CGPA?",
                  "low GRE and IELTS scores?",
                  "switching from non-CS to CS branch?",
                  "not getting a job after masters?",
                ].map((i, idx) => (
                  <Text
                    textAlign={{ base: "center", md: "left" }}
                    fontSize={{ base: "md", md: "xl" }}
                    key={idx}
                    color={"#17A2FB"}
                    my="2"
                    fontWeight="700"
                  >
                    {i}{" "}
                  </Text>
                ))}

                <Text
                  maxW={{ base: "75%", md: "70%" }}
                  textAlign={{ base: "justify", md: "left" }}
                  my="12"
                  mx={{ base: "auto", md: "0" }}
                  fontWeight="400"
                >
                  Our founders and mentors have personally faced/seen all these
                  issues, navigated through them and are currently working at
                  top product based companies in the US. Our mentors will work
                  with you to build a vision, mission and identify objectives
                  which will help in planning to get the best job abroad
                  irrespective of your backgrounds (which is why you are going
                  abroad).
                </Text>
              </Box>
            </Flex>
          </Center>
        </GridItem>
        <GridItem
          backgroundRepeat="no-repeat"
          p={["1.5rem", "3rem", "4rem", "8rem", "10em"]}
          rowSpan={12}
          colSpan={12}
          // backgroundImage="url(/images/paperplane.png)"
        >
          <Box h="100%" w="100%">
            <Heading
              fontSize={["2xl", "2xl", "3xl", "4xl", "4xl"]}
              my="2"
              textAlign="center"
              mb="10"
            >
              Watch this video to better understand how Flywise helps students
              in their Career
            </Heading>

            <Box
              display={["none", "inset", "none", "none", "none"]}
              border="8px"
              borderColor="rgba(66, 134, 211, 1)"
              rounded="3xl"
              boxShadow="xl"
              overflow="hidden"
            >
              <iframe
                width={"100%"}
                height={240}
                src="https://www.youtube.com/embed/eSythjoTlss"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>

            <Box
              display={["inset", "none", "inset", "none", "none"]}
              border="8px"
              borderColor="rgba(66, 134, 211, 1)"
              rounded="3xl"
              boxShadow="xl"
              overflow="hidden"
            >
              <iframe
                width={"100%"}
                height={200}
                src="https://www.youtube.com/embed/eSythjoTlss"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            <Box
              display={["none", "none", "none", "inset", "inset"]}
              border="8px"
              borderColor="rgba(66, 134, 211, 1)"
              rounded="3xl"
              boxShadow="xl"
              overflow="hidden"
            >
              <iframe
                width={"100%"}
                height={575}
                src="https://www.youtube.com/embed/eSythjoTlss"
                title="YouTube video player"
                frameBorder={0}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </Box>
            {/* <Image alt="video" src="/images/thumbnail.png" /> */}
          </Box>
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={12}
          // colSpan={{base: 12, md:6}}
          bg={
            "linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)"
          }
        >
          <Flex flexDirection={{ md: "row", base: "column" }}>
            <Box
              mt={["2", "4", "8", "16", "32"]}
              ml={["0", "4", "8", "16", "44"]}
              pl={["1", "1", "2", "4", "20"]}
            >
              <Heading
                fontSize={["2xl", "3xl", "4xl", "4xl", "4xl"]}
                my="16"
                mt="4"
                textAlign="center"
              >
                We are specialized in below fields, fly with us!
              </Heading>
              {[
                "Computer science",
                "Data science",
                "Business analytics",
                "Information systems",
              ].map((i, idx) => (
                <Flex my="4" ml="12" key={idx}>
                  <Image
                    filter="box-shadow(0px 39px 99px 0px rgba(0, 0, 0, 0.16))"
                    h="69px"
                    alt="icon"
                    src={`/images/icon${idx + 1}.png`}
                  />
                  <Text
                    my="5"
                    ml="4"
                    fontWeight="600"
                    fontSize={["1rem", "1.2rem", "1.3rem", "1.4rem"]}
                  >
                    {i}{" "}
                  </Text>
                </Flex>
              ))}
            </Box>
            <Center w="100%">
              <Image
                mr={["2", "4", "8", "16", "40"]}
                maxW={["100%", "100%", "100%", "75%", "70%"]}
                py={{ base: "8", md: "32" }}
                alt="desk"
                src="/images/computer_desk.png"
              />
            </Center>
          </Flex>
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={12}
          px={["0.4rem", "1rem", "3rem", "6rem", "12rem"]}

          // bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
        >
          <Heading my={["4 ", "4", "8", "16", "16"]} textAlign="center">
            How Flywise is better than any other overseas agencies?
          </Heading>

          <Flex
            flexDirection={{ md: "row", base: "column" }}
            my="4"
            px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          >
            <Box
              transform={{
                base: "translate(0px, 0px)",
                md: "translate(10px, 0px)",
              }}
              minW="32%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              // h="220px"
              rounded="17px"
              bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
            >
              <Heading
                textAlign="center"
                color="white"
                fontSize={["xl", "2xl", "2xl", "2xl", "3xl"]}
                px={["2", "1", "2", "3", "4"]}
                py={["2", "4", "8", "16", "16"]}
              >
                Real experienced mentors
              </Heading>
            </Box>
            <Box
              roundedRight="17px"
              roundedLeft="none"
              bg="rgba(106, 219, 219, 0.07)"
            >
              <Text fontSize="xl" fontWeight="600" py="12" px="8">
                Unlike traditional consultancies, you will get real experienced
                mentors who have already gone through all the steps and have
                succeeded with great careers.{" "}
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection={{ md: "row", base: "column-reverse" }}
            my="4"
            px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          >
            <Box
              roundedLeft="17px"
              roundedRight="none"
              bg="rgba(106, 219, 219, 0.07)"
            >
              <Text fontSize="xl" fontWeight="600" py="12" px="8">
                We hate traditional metrics. Our Mentors will work with you to
                identify your objectives, draw your vision, and show a path to
                get into a right University based on your budget and future
                vision!.{" "}
              </Text>
            </Box>
            <Box
              transform={{
                base: "translate(0px, 0px)",
                md: "translate(-10px, 0px)",
              }}
              minW="32%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              rounded="17px"
              bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
            >
              <Heading
                textAlign="center"
                color="white"
                fontSize={["xl", "2xl", "2xl", "2xl", "3xl"]}
                px={["2", "1", "2", "3", "4"]}
                py={["2", "4", "8", "16", "16"]}
              >
                Admit from right University
              </Heading>
            </Box>
          </Flex>
          <Flex
            flexDirection={{ md: "row", base: "column" }}
            my="4"
            px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          >
            <Box
              transform={{
                base: "translate(0px, 0px)",
                md: "translate(10px, 0px)",
              }}
              minW="32%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              rounded="17px"
              bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
            >
              <Heading
                textAlign="center"
                color="white"
                fontSize={["xl", "2xl", "2xl", "2xl", "3xl"]}
                px={["2", "1", "2", "3", "4"]}
                py={["2", "4", "8", "16", "16"]}
              >
                Land your dream job abroad!
              </Heading>
            </Box>
            <Box
              roundedRight="17px"
              roundedLeft="none"
              bg="rgba(106, 219, 219, 0.07)"
            >
              <Text fontSize="xl" fontWeight="600" py="12" px="8">
                We take resume reviews and prepare students with mock interviews
                by real Interviewers from top companies like Google, Facebook,
                and Amazon. We will also build a clear roadmap and help students
                to prepare for internships{" "}
              </Text>
            </Box>
          </Flex>
          <Flex
            flexDirection={{ md: "row", base: "column-reverse" }}
            my="4"
            px={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          >
            <Box
              roundedLeft="17px"
              roundedRight="none"
              bg="rgba(106, 219, 219, 0.07)"
            >
              <Text fontSize="xl" fontWeight="600" py="12" px="8">
                You will be part of a great community, super useful connections,
                and a wonderful network, lifelong!
              </Text>
            </Box>
            <Box
              transform={{
                base: "translate(0px, 0px)",
                md: "translate(-10px, 0px)",
              }}
              minW="32%"
              d="flex"
              justifyContent="center"
              alignItems="center"
              rounded="17px"
              bg="linear-gradient(294.98deg, #6ADBDB 9.42%, #4080D3 98.9%)"
            >
              <Heading
                textAlign="center"
                color="white"
                fontSize={["xl", "2xl", "2xl", "2xl", "3xl"]}
                // px={[]}
                py={["2", "4", "8", "16", "16"]}
                px={["0", "1", "2", "3", "4"]}
              >
                Best professional network in a foreign land
              </Heading>
            </Box>
          </Flex>
        </GridItem>
        {/* Vikas Thakur done this */}
        <GridItem
          px={["0.4rem", "1rem", "3rem", "6rem", "10rem"]}
          rowSpan={12}
          colSpan={12}
          bg={
            "linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)"
          }
          py={10}
        >
          <Heading
            id="services"
            pt="3rem"
            fontSize={["3xl", "3xl", "4xl", "4xl", "5xl"]}
            // textShadow="0px 2px 5px rgba(0,0,0,0.4)"
            textAlign="center"
          >
            What we offer
          </Heading>
          <Text textAlign="center" color="gray.500">
            Learn more about the services we offer{" "}
          </Text>
          <Center>
            <Stack
              pt="8"
              direction={{ base: "column", md: "row" }}
              spacing={{ base: "4", md: "8" }}
            >
              {[
                {
                  title: "Pre-Admission support",
                  image: "/images/landing_card1.svg",
                  texts: [
                    "Free profile evaluation",
                    "Test Preparation",
                    "Course selection",
                    "University selection",
                    "SOP & LOR",
                    "Application assistance",
                  ],
                },
                {
                  title: "Post-Admission support",
                  image: "/images/landing_card2.svg",
                  texts: [
                    "VISA assistance",
                    "Loan assistance",
                    "Forex",
                    "Roommate matching",
                    "Pre departure guidance",
                  ],
                },
                {
                  title: "Abroad career support",
                  image: "/images/landing_card3.svg",
                  texts: [
                    "Profile building",
                    "Career roadmap",
                    "Professional networking",
                    "Interview training",
                    "Job referrals at top tech companies",
                  ],
                },
              ].map((service, idx) => (
                <Center key={idx}>
                  <Box
                    rounded="md"
                    h="100%"
                    w={{ base: "80%", md: "24rem" }}
                    my="4"
                    maxH="558px"
                    maxW="425.03px"
                    p={["2", "4", "8", "16", "16"]}
                    bg="white"
                    transition="all 0.3s"
                    _hover={{
                      boxShadow: "0px 0px 10px 10px rgba(220, 220, 220, 0.25)",
                    }}
                    boxShadow="0px 0px 50px 23px rgba(220, 220, 220, 0.25)"
                  >
                    <Center>
                      <Image mb="4" maxH="40%" src={service.image} alt="main" />
                    </Center>
                    <Heading my="4" fontSize="xl">
                      {service.title}
                    </Heading>
                    {service.texts.map((i, idx) => (
                      <Flex alignItems="flex-start" key={idx}>
                        <Image
                          mr="2"
                          mt="1"
                          h="4"
                          src="/images/icons/tick2.png"
                          alt="tick"
                        />
                        <Text color="rgba(13, 179, 251, 1)" fontWeight="600">
                          {i}
                        </Text>
                      </Flex>
                    ))}
                  </Box>
                </Center>
              ))}
            </Stack>
          </Center>
        </GridItem>
        <GridItem py="8" colSpan="12" bg="white" rowSpan="12">
          <Heading textAlign="center">Testimonials</Heading>
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={12}
          // colSpan={{base: 12, md:6}}

          mt="4"
        >
          <Carousel
            swipeable={true}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            customTransition=""
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={[, "mobile", "smalie"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {[
              {
                name: "Akhil Daggubati",
                uni: "University of South Florida",
                logo: "/images/icons/floridalogo.png",
                img: "/images/mentors/Akhil.png",
                text: "“I always lived in a misconception that studying in the USA was ridiculously expensive. At flywise the empathetic crew surprised me by clearing all my myths about studying in the USA and guided me to find the most relevant course aligned to my interest in a great university which is within my financial reach. I heartily thank them for their continuous encouragement and guidance, which helps me crack my dream job abroad. I strongly insist flywise to any aspirants.”",
                degree: "Business analytics and information systems",
              },

              {
                name: "Dhanyasri Divi",
                uni: "CSU East Bay",
                degree: "Masters in statistics",
                img: "/images/mentors/dhanyasri.png",
                logo: "/images/icons/csu.png",
                text: "I reached out to Pavan (founder) on Linkedin before Flywise was incorporated, in that call he understood my background, aspirations and suggested the best course taking all factors into consideration, that call cleared my questions and gave me a concrete understanding of the pros and cons of the course that was being suggested by Pavan. I've joined Flywise and definitely feel it's beneficial to stay up to date on the latest course offerings,  industry trends and tips to maximize my chances of getting my dream job!",
              },
              {
                name: "Venkatesh Prasad",
                uni: "Stevens institute of technology",
                degree: "Business intelligence and analytics",
                text: "I have my Bachelor's in Mechanical Engineering and was absolutely clueless on what to or how to pursue my Master's. My mentor Pavan, at flywise very patiently listened to all my questions, enlightened me about the IT industry and their pay structure and expertly guided me on what course and university to choose.I am really delighted and overwhelmed with the help and support Flywise provided.",
                img: "/images/mentors/venkatesh.png",
                logo: "/images/icons/steven.png",
              },
              {
                name: "Preethi Rama",
                uni: "Cleveland State University",
                img: "/images/mentors/Preethi.png",
                text: "“Flywise is a place where innovation and young energy meets real experience. I was managed in a unique manner and was given a customized approach. Going above and beyond to help achieve career goals is something Flywise strongly stands for.”",
                logo: "/images/icons/clevelandlogo.png",
                degree: "Information systems",
              },
            ].map((testimonial, idx) => (
              <TestimonialCard
                name={testimonial.name}
                degree={testimonial.degree}
                img={testimonial.img}
                logo={testimonial.logo}
                text={testimonial.text}
                uni={testimonial.uni}
                key={idx}
              />
            ))}
          </Carousel>
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={12}
          pb="4rem"
          px={["0", "1", "4", "8", "16"]}
          width="100%"
          // colSpan={{base: 12, md:6}}
          // bg={'linear-gradient(180deg, #E6F6FF 41.47%, rgba(255, 255, 255, 0) 100%)'}
        >
          <Heading
            id="courses"
            my={["2", "4", "8", "16", "16"]}
            textAlign="center"
          >
            Have Any Questions?
          </Heading>
          <FaqList faqs={faqs} />
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}
