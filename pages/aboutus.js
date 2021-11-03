import React from "react";
import Footer from "../component/common/footerr";
import Navbar from "../component/common/navbar";
import {
  Text,
  Container,
  Heading,
  SimpleGrid,
  Image,
  Box,
} from "@chakra-ui/react";

function courses() {
  return (
    <div>
      <Navbar />
      <Container maxW="80%" my="10" textAlign="justify">
        <Heading as="h1" size="2xl" mb="10" textAlign="center">
          About Us
        </Heading>
        <Text mb="5">
          Flywise is {`India's`} best overseas education platform which unlike
          any traditional consultancies travel with you till you LAND YOUR DREAM
          JOB IN USA.
        </Text>
        <Heading as="h3" size="lg" mb="2">
          Who We Are?
        </Heading>
        <Text mb="5">
          Flywise is a team of highly enthusiastic members who have real life
          experience in settling down abroad after coming from INDIA. Every
          mentor at Flywise is one successful person who has smartly achieved
          their dream of getting settled abroad and living their dream life.
          Flywise is doing its best to help other aspiring students coming
          abroad with the help of a fully-fledged plan. It is a young team full
          of zeal who is here to help the students who want to study and land
          their dream Tech jobs in the USA. Flywise has successfully helped more
          than 100 students in the past year with their experience.
          <br /> At Flywise the entire process of consultation and guidance is
          futuristic and totally based on real experiences. We are a family to
          our students, it is our motto to guide them and to be there with them
          till the end. Our team at Flywise supports our students along this new
          journey and become their BUDDY. Our Mentors are those who are already
          working at big international Tech companies at reputed positions.
        </Text>
        <Heading as="h3" size="lg" mb="2">
          Our Vision
        </Heading>
        <Text fontSize="lg" mb="2">
          Make Students stay abroad comfortable and successful with our
          Futuristic approach.
        </Text>
        <Text mb="5">
          Flywise is a BUDDY to every aspiring student who wants to go abroad
          and get settled there. Our vision is to inspire every student in the
          right way and provide them with the best guidance. A lot of
          traditional consultancies out there are misguiding the students and
          treating them just like a customer. We at Flywise have a totally
          different approach to handling our students. We always treat them like
          STUDENTS just like we were once, we are very well aware of the
          circumstances and situations one has to face in foreign land. Unlike
          any traditional consultancies Flywise does not leave our students
          mid-way, just after getting into a university. In fact, as mentioned
          we are their BUDDY and like a good BUDDY, we stay connected with them
          and continue to support them till they land their DREAM JOB. Our
          vision is obvious - FLY WISE and LAND WISELY with FLYWISE
        </Text>
        <Heading as="h3" size="lg" mb="2">
          Our Mission
        </Heading>
        <Text fontSize="lg" mb="2">
          Stay with our students till the very end
        </Text>
        <Text mb="5">
          Flywise only wants to provide the best and real-life experienced
          solutions to aspiring students. We do not believe in Fake promises but
          in turning every promise into reality. Here at Flywise we give our
          continuous guidance and support to our students from how to select a
          university abroad till landing their dream job abroad. Our specialty
          is that We Stay with our students till the very End by providing them
          with real life interview selection experiences as well. Our experts
          are none other than successful working professionals. Their experience
          helps our students achieve their goals. We want to create a lasting
          and positive impact on the lives of our students.
        </Text>
        <Heading as="h2" size="xl" mb="5">
          Meet Our TEAM
        </Heading>
        <SimpleGrid minChildWidth="300px" spacing="20px" mb="5">
          <Box>
            <Image
              src="/images/CEO.png"
              alt="CEO"
              width="300px"
              style={{ margin: "auto" }}
            ></Image>
          </Box>
          <Box>
            <Image
              src="/images/Co-founder.png"
              alt="CO-founder"
              width="300px"
              style={{ margin: "auto" }}
            ></Image>
          </Box>
        </SimpleGrid>
        <Text fontSize="xl" mb="2">
          Pavan Kanjula, CEO/Founder
        </Text>
        <Text mb="5">
          Pavan Kanjula, our CEO is the brain behind the futuristic overseas
          education platform FLYWISE. The idea of FLYWISE came into his mind
          only after going through similar struggles when he shifted to the USA
          to do his MS. Pavan is also someone who comes from a middle-class
          family in India. He is a young and dynamic person who wants to bring
          change in aspiring students’ lives by providing them real life
          experienced support at FLYWISE. He struggled so much and then achieved
          everything with flying colors. Pavan has broken all the stereotypes of
          studying abroad. He came to the USA and switched his major from
          mechanical to DATA SCIENCE got into a good University with budget
          friendly fees. He worked hard and grabbed the opportunity by getting
          his first job at AMAZON even before graduating. He paid off his study
          load with his first salary and bonus. Now, he is helping to nurture
          aspiring students with dreams of getting settled abroad. He is making
          full use of his own experience at FLYWISE by making another {`Pavan's`}
          dream real.
        </Text>
        <Text fontSize="xl" mb="2">
          Puneetha Kanjula, Co-founder
        </Text>
        <Text mb="5">
          Puneetha Kanjula, our Co-founder of FLYWISE comes along with real life
          experience in getting settled in USA after MS. She is a hard-working
          and enthusiastic woman who came from a small village in GUNTUR, Andhra
          Pradesh, India to the USA having big dreams. She has done her under
          graduation in Civil Engineering but worked her way up and shifted to
          the IT industry. Presently she has fulfilled each one of her dreams
          and is working as Sr. Technical Program Manager at Sony Play station.
          She believes in dreaming, believing, planning, working, and achieving
          it because she did the same. Now she is mentoring other aspiring
          students in making decisions and thrive in their career.
        </Text>
      </Container>
      <Footer />
    </div>
  );
}

export default courses;
