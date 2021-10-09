import classes from "../../styles/header.module.css";
import Logo from "../../public/images/logo.svg";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  ModalOverlay,
  Modal,
  Stack,
  Image,
  Center,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverBody,
  Text,
  GridItem,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import React, { useState, useEffect } from "react";
import $ from "jquery";
const Links = [
  { link: "Test Prep", to: "/testprep" },
  { link: "Profile Evaluation", to: "/profile-evaluation" },
  { link: "Services", to: "/#services" },
  { link: "Mentors", to: "/mentors" },
  // { link: 'Destinations', to: '/destinations' },
  // { link: 'Courses', to: '/' }
];
import Ham from "../../public/images/icons/ham.png";
const NavLink = ({ to, link, outline }) => (
  <NextLink passHref href={to}>
    <Link
      // className={props.link === props.outline ? `bottom-outline` : ``}
      px={4}
      py={1}
      roundedTop={"md"}
      color={link === outline ? `rgba(41, 82, 134,1)` : `blackAlpha.700`}
      borderBottom={
        link === outline
          ? `1px solid rgba(41, 82, 134,0.8)`
          : `1px solid rgba(41, 82, 134,0)`
      }
      _hover={{
        textDecoration: "none",
        bg: "gray.100",
        color: "rgba(41, 82, 134,1)",
        borderBottom: "1px solid rgba(41, 82, 134,0.8)",
      }}
    >
      {link}
    </Link>
  </NextLink>
);

const AllNavLinks = ({ outline }) => {
  const initRef = React.useRef();
    
  return (
    <React.Fragment>
      {Links.map((link, idx) => (
        <NavLink outline={outline} to={link.to} link={link.link} key={idx} />
      ))}
      <Popover placement="bottom" closeOnBlur={true} initialFocusRef={initRef}>
        {({ isOpen, onClose }) => (
          <React.Fragment>
            <Modal isOpen={isOpen}>
              <ModalOverlay zIndex="3" />
            </Modal>
            <PopoverTrigger>
              <Link
                // className={outline === 'Destinations' ? `bottom-outline` : ``}
                px={2}
                py={1}
                borderBottom={
                  "Destinations" === outline
                    ? `1px solid rgba(41, 82, 134,0.8)`
                    : `1px solid rgba(41, 82, 134,0)`
                }
                color={
                  outline === "Destinations"
                    ? `rgba(41, 82, 134,1)`
                    : `blackAlpha.700`
                }
                roundedTop={"md"}
                _hover={{
                  textDecoration: "none",
                  borderBottom: "1px solid rgba(0,0,0,0.8)",
                  bg: "gray.200",
                }}
              >
                Destination
              </Link>
            </PopoverTrigger>
            <Portal zIndex="5">
              <PopoverContent h="5rem" w="25rem" zIndex="5">
                {/* <PopoverHeader>This is the header</PopoverHeader> */}
                {/* <PopoverCloseButton /> */}
                <PopoverBody>
                  <HStack justifyContent="space-evenly">
                    {["usa", "australia", "canada", "uk"].map((i, idx) => (
                      <NextLink
                        _hover={{ cursor: "pointer" }}
                        key={idx}
                        href={`/destinations/${i}`}
                      >
                        <Box>
                          <Image
                            maxH="3rem"
                            src={`/images/${i}_flag.png`}
                            alt="country"
                          />
                          <Text textAlign="center" fontSize="xs">
                            {i.toLocaleUpperCase()}
                          </Text>
                        </Box>
                      </NextLink>
                    ))}
                  </HStack>
                  {/* <Button mt={4} colorScheme="blue" onClick={onClose} ref={initRef}>
													Close
												</Button> */}
                </PopoverBody>
                {/* <PopoverFooter>This is the footer</PopoverFooter> */}
              </PopoverContent>
            </Portal>
          </React.Fragment>
        )}
      </Popover>
      <NavLink outline={""} to={"/courses"} link={"Courses"} />
      {/* <NLink href={}>
				<Link
					// className={props.link === props.outline ? `bottom-outline` : ``}
					px={2}
					py={1}
					color={`blackAlpha.700`}
					roundedTop={'md'}
					borderBottom= '1px solid rgba(41, 82, 134,0)'
					_hover={{
						textDecoration: 'none',
						bg: 'gray.100',
						color:"rgba(41, 82, 134,1)",
						borderBottom: '1px solid rgba(41, 82, 134,0.8)'
					}}
				>
					Courses
				</Link>
			</NLink> */}
    </React.Fragment>
  );
};

function Header() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    console.log(show);
  }, [show]);

  const initRef = React.useRef();

  // $('#ham').on('click',()=>{
  //     setShow(true);
  //     $('#sidedrawer').addClass("show");
  // })

  function showw() {
    setShow(true);
    $("#sidedrawer").addClass(`${classes.show}`);
  }
  function hidee() {
    setShow(false);
    $("#sidedrawer").removeClass(`${classes.show}`);
  }

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.mainHeader}>
          <div className={classes.logo}>
          <NextLink href="/"><Image
              _hover={{ cursor: "pointer" }}
              maxH="5rem"
              alt="logo"
              src="/images/logo.svg"
            /></NextLink>
          </div>
          <div className={classes.links}>
            <AllNavLinks />
          </div>
          <div className={classes.contact}>
            <Flex alignItems={"center"}>
              <NextLink href="/contact-us">
                <Button
                  variant={"solid"}
                  // colorScheme={'teal'}
                  size={{ base: "sm", md: "md" }}
                  py={["2", "2", "2", "2", "2"]}
                  color="white"
                  fontWeight="semibold"
                  px={["2", "6", "6", "6", "6"]}
                  colorScheme="blue"
                  mr={4}
                  rounded="full"
                >
                  Contact Us
                </Button>
              </NextLink>
            </Flex>
          </div>
          <div id="ham" className={classes.ham} onClick={showw}>
            <Image src="/images/icons/ham.png" />
          </div>
        </div>
        {show && <div className={classes.backdrop} onClick={hidee}></div>}
      </div>
      <div id="sidedrawer" className={classes.sidedrawer}>
        <div id="closeham" className={classes.ham} onClick={hidee}>
          <Image src="/images/icons/ham.png" />
        </div>
        <div className={classes.firstsidelink} onClick={hidee}>
          <NextLink passHref href={"/testprep"}>
            <p>Test Prep</p>
          </NextLink>
          <Image
            src="/images/icons/Tick Square.png"
            marginRight="20px"
            marginLeft="20px"
            height="25px"
            width="25px"
          />
        </div>
        <div className={classes.sidelink} onClick={hidee}>
          <NextLink passHref href={"/profile-evaluation"}>
            <p>Profile Evaluation</p>
          </NextLink>
          <Image
            src="/images/icons/Activity.png"
            marginRight="20px"
            marginLeft="20px"
            height="25px"
            width="25px"
          />
        </div>
        <div className={classes.sidelink} onClick={hidee}>
          <NextLink passHref href={"/#services"}>
            <p>Services</p>
          </NextLink>
          <Image
            src="/images/icons/Graph.png"
            marginRight="20px"
            marginLeft="20px"
            height="25px"
            width="25px"
          />
        </div>
        <div className={classes.sidelink} onClick={hidee}>
          <NextLink passHref href={"/mentors"}>
            <p>Mentors</p>
          </NextLink>
          <Image
            src="/images/icons/3 User.png"
            marginRight="20px"
            marginLeft="20px"
            height="25px"
            width="25px"
          />
        </div>
        <div id="destinaiton" className={classes.sidelink} >
          <Popover
            placement="bottom"            
            closeOnBlur={true}
            initialFocusRef={initRef}
          >
            {({ isOpen, onClose }) => (
              <React.Fragment >
                <Modal isOpen={isOpen} >
                  <ModalOverlay zIndex="3" />
                </Modal>
                <PopoverTrigger>
                <p>Destinations</p>
                
                </PopoverTrigger>
                <Portal zIndex="4">
                  <PopoverContent h="5rem" w="25rem"  zIndex="5"  >
                    {/* <PopoverHeader>This is the header</PopoverHeader> */}
                    {/* <PopoverCloseButton /> */}
                    <PopoverBody zIndex="45" >
                      <HStack  justifyContent="space-evenly">
                        {["usa", "australia", "canada", "uk"].map((i, idx) => (
                          <NextLink
                            _hover={{ cursor: "pointer" }}
                            key={idx}
                            href={`/destinations/${i}`}
                          >
                            <Box>
                              <Image
                              zIndex="150"
                                maxH="3rem"
                                src={`/images/${i}_flag.png`}
                                alt="country"
                              />
                              <Text textAlign="center" fontSize="xs">
                                {i.toLocaleUpperCase()}
                              </Text>
                            </Box>
                          </NextLink>
                        ))}
                      </HStack>
                      {/* <Button mt={4} colorScheme="blue" onClick={onClose} ref={initRef}>
                                        Close
                                    </Button> */}
                    </PopoverBody>
                    {/* <PopoverFooter>This is the footer</PopoverFooter> */}
                  </PopoverContent>
                </Portal>
              </React.Fragment>
            )}
          </Popover>
          
          <Image
            src="/images/icons/Info Square.png"
            marginRight="20px"
            marginLeft="20px"
            height="25px"
            width="25px"
          />
        </div>
        <div className={classes.sidelink} onClick={hidee}>
          <NextLink passHref href={"/courses"} >
            <p>Courses</p>
          </NextLink>
          <Image
            src="/images/icons/Category.png"
            marginRight="20px"
            marginLeft="20px"
            height="25px"
            width="25px"
          />
        </div>
        <div className={classes.sidelink} onClick={hidee}>
          <NextLink passHref href={"/contact-us"} >
            <p>Contact Us</p>
          </NextLink>
          <Image
            src="/images/icons/Send.png"
            marginRight="20px"
            marginLeft="20px"
            height="25px"
            width="25px"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
