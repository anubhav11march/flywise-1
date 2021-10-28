import React from "react";
import Footer from "../component/common/footerr";
import Image from "next/image";
import Navbar from "../component/common/navbar";
import NLink from 'next/link';
//import pngg from "../public/images/icons/rafiki.png";
import classes from "../styles/whatsappbtn.module.css";
//import ComingSoon from "../public/images/icons/coming.png";
import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";

function courses() {
  return (
    <Box
      // w={{base:"100vw", md:''}}
      maxW={"100vw"}
    >
      <Grid
        overflow="hidden"
        maxW="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem rowSpan={12} colSpan={12}>
          <Navbar outline="" />
        </GridItem>
        <GridItem
          rowSpan={12}
          colSpan={12}
          py={["0.4rem", "1rem", "2rem", "3rem", "4rem"]}
          pl={["0.4rem", "1rem", "3rem", "6rem", "12rem"]}
          pr={["0.4rem", "1rem", "1rem", "2rem", "12rem"]}
        >
          <div className={classes.pnggg}>
            <Image objectFit="contain" src= "/images/icons/rafiki.png" height="320px"  width="320px" />
            <br/>
            <Image src="/images/icons/coming.png" height="50px" width="320px" />
            <NLink href="/" passHref>
            <Button
              color="white"
              px="8"
              py="5"
              mb="4"
              mt="8"
              bg="rgba(13, 179, 251, 1)"
              _hover={{ bg: "rgba(13, 179, 251, 0.9)" }}
              _active={{ bg: "rgba(13, 179, 251, 0.7)" }}
              ml="auto"
              mr="auto"
            >
              Take me to home
            </Button>
            </NLink>
          </div>
        </GridItem>

        
      </Grid>
      <Footer />
    </Box>
  );
}

export default courses;
