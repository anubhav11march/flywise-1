import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Heading,
  Image,
  Input,
  Link,
  Text,
  RadioGroup,
  Radio,
  Stack,
  Textarea,
} from '@chakra-ui/react'
import { LocalConvenienceStoreOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import Footer from '../component/common/footerr'
import Navbar from '../component/common/navbar'
import classes from '../styles/header.module.css'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactUS() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [referral, setReferral] = useState('')
  const [discover, setDiscover] = useState('Search Engine(Google,Yahoo,etc.)')
  const [other, setOther] = useState('')
  const onSubmit = (e) => {
    if (discover == 'Other') {
      setDiscover(other)
    }

    e.preventDefault()
    if (!firstName || !lastName || !email || !phone || !message) {
      alert('All fields required')
      return
    }
    fetch('https://flywisebackend.herokuapp.com/api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        referral: referral,
        discover: discover == 'Other' ? other : discover,
      }),
    })
      .then((res) => {
        return res.json()
      })
      .then((result) => {
        console.log(result)
        setFirstName('')
        setLastName('')
        setMessage('')
        setEmail('')
        setPhone('')
        setDiscover('')
        setReferral('')
        setOther('')
        toast.success("We've recieved your request, will get to you shortly.")
      })
      .catch((err) => {
        console.log(err)
      })
  }
  return (
    <Box overflowX="hidden">
      <ToastContainer />
      <title>Flywise - Contact us</title>
      <Navbar outline="Contact US" />
      <Grid
        overflow="hidden"
        maxW="100vw"
        templateRows="repeat(12, 1fr)"
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem
          zIndex="1"
          py={['2rem', '1rem', '2rem', '3rem', '10rem']}
          pl={['0.4rem', '1rem', '1rem', '6rem', '4rem']}
          pr={['0.4rem', '1rem', '1rem', '2rem', '4rem']}
          rowSpan={12}
          colSpan={[12, 12, 6, 7, 7]}
          // bg={bg}
        >
          <Heading
            color="rgba(156, 156, 156, 1)"
            my="4"
            textAlign={{ base: 'center', sm: 'left' }}
            fontSize={['lg', 'xl', '2xl', '3xl', '4xl']}
          >
            CONTACT US
          </Heading>
          <Heading
            my="8"
            textAlign={{ base: 'center', sm: 'left' }}
            fontSize={['xl', '2xl', '3xl', '4xl', '5xl']}
            color="#0DB3FB"
          >
            {`We've got answers if you've got questions!`}
          </Heading>
          <Heading
            textAlign={{ base: 'center', sm: 'left' }}
            fontWeight="500"
            my="8"
            fontSize={['md', 'lg', 'xl', '2xl', '3xl']}
          >
            {`Send us your thoughts, questions, compliments, or resume-related haikus! We'd love to hear from you`}
          </Heading>
          {/*<Link>
						<Button
							variant={'solid'}
							size={'lg'}
							color="white"
							fontWeight="semibold"
							boxShadow="base"
							px="10"
							py="8"
							bg="rgba(13, 179, 251, 1)"
							_hover={{
								bg: 'rgba(9, 124, 174, 1)'
							}}
							_focus={{
								bg: 'rgba(13, 179, 251, 1)'
							}}
							_active={{
								bg: 'rgba(13, 179, 251, 1)'
							}}
							mt="8"
							rounded="16px"
						>
							<Heading fontSize="2xl" fontWeight="500">
								Contact Us
							</Heading>
						</Button>
						</Link>*/}
        </GridItem>
        {/*<GridItem
					zIndex="1"
					pr={[ '0.4rem', '1rem', '3rem', '6rem', '12rem' ]}
					rowSpan={12}
					colSpan={[ 12, 12, 5, 5, 5 ]}
				>
					<Image mt="16" src="/images/contact_us.png" alt="main" />
				</GridItem>*/}
        <GridItem
          // pr={[ '0.4rem', '1rem', '3rem', '6rem', '8rem' ]}
          rowSpan={12}
          marginTop={{ base: '20px', sm: '0px' }}
          colSpan={[12, 12, 6, 5, 5]}
          py={['1rem', '3rem', '3rem', '3rem', '10rem']}
          px={{ base: '4', md: '0' }}
          zIndex="0"
          transform="translate(0,-3rem)"
        >
          <div className={classes.contactCard}>
            <Heading textAlign="center" color="rgba(110,110,110)" fontSize="xl">
              Want more information?
            </Heading>
            <Heading
              fontSize={{ base: '18px', sm: '25px' }}
              my={{ base: '4', sm: '4' }}
              textAlign="center"
              color="rgba(110,110,110)"
            >
              Ask us your questions or schedule a meeting
            </Heading>
            <Center>
              <Box w={['18rem', '22rem', '36rem', '44rem', '50rem']}>
                <Text mt="4" mb="2" color="rgba(110,110,110)">
                  First Name
                </Text>
                <Input
                  bg="whiteAlpha.900"
                  borderColor="blackAlpha.500"
                  _hover={{ borderColor: 'blackAlpha.800' }}
                  focusBorderColor="black"
                  placeholder=""
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <Text mt="4" mb="2" color="rgba(110,110,110)">
                  Last Name
                </Text>
                <Input
                  bg="whiteAlpha.900"
                  borderColor="blackAlpha.500"
                  _hover={{ borderColor: 'blackAlpha.800' }}
                  focusBorderColor="black"
                  placeholder=""
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
                <Text mt="4" mb="2" color="rgba(110,110,110)">
                  Your Email
                </Text>
                <Input
                  bg="whiteAlpha.900"
                  borderColor="blackAlpha.500"
                  _hover={{ borderColor: 'blackAlpha.800' }}
                  focusBorderColor="black"
                  placeholder=""
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Text mt="4" mb="2" color="rgba(110,110,110)">
                  Your Number
                </Text>
                <Input
                  bg="whiteAlpha.900"
                  borderColor="blackAlpha.500"
                  _hover={{ borderColor: 'blackAlpha.800' }}
                  focusBorderColor="black"
                  placeholder=""
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Text mt="4" mb="2" color="rgba(110,110,110)">
                  Do you have any referral code?
                </Text>
                <Input
                  bg="whiteAlpha.900"
                  borderColor="blackAlpha.500"
                  _hover={{ borderColor: 'blackAlpha.800' }}
                  focusBorderColor="black"
                  placeholder="Enter Code"
                  value={referral}
                  onChange={(e) => setReferral(e.target.value)}
                />
                <Text mt="4" mb="2" color="rgba(110,110,110)">
                  How did you discover Flywise?
                </Text>
                <Center>
                  <RadioGroup
                    mt="2"
                    onChange={setDiscover}
                    value={discover}
                    defaultValue="Search Engine(Google,Yahoo,etc.)"
                    color="rgba(110,110,110)"
                  >
                    <Stack spacing={2}>
                      <Radio
                        size="md"
                        value="Search Engine(Google,Yahoo,etc.)"
                        colorScheme="blue"
                      >
                        Search Engine (Google,Yahoo,etc.)
                      </Radio>
                      <Radio
                        size="md"
                        value="Recommended by friend or colleague"
                        colorScheme="blue"
                      >
                        Recommended by friend or colleague
                      </Radio>
                      <Radio size="md" value="Social Media" colorScheme="blue">
                        Social Media
                      </Radio>
                      <Radio
                        size="md"
                        value="Blog or Publication"
                        colorScheme="blue"
                      >
                        Blog or Publication
                      </Radio>
                      <Radio
                        size="md"
                        value="College Campaigns"
                        colorScheme="blue"
                      >
                        College Campaigns
                      </Radio>
                      <div style={{ display: 'flex' }}>
                        <Radio size="md" value="Other" colorScheme="blue">
                          Other :
                        </Radio>
                        <Input
                          width="200px"
                          height="30px"
                          border="none"
                          outline="none"
                          focusBorderColor="none"
                          required="false"
                          borderBottom="1px solid lightgray"
                          value={other}
                          onChange={(e) => {
                            setOther(e.target.value)
                            //setDiscover(other)
                          }}
                        />
                      </div>
                    </Stack>
                  </RadioGroup>
                </Center>

                <Text mt="4" mb="2" color="rgba(110,110,110)">
                  Your message
                </Text>
                {/* < placeholder="Here is a sample placeholder" /> */}
                <Textarea
                  bg="whiteAlpha.900"
                  borderColor="blackAlpha.500"
                  _hover={{ borderColor: 'blackAlpha.800' }}
                  resize={'vertical'}
                  focusBorderColor="black"
                  placeholder="Type your message......"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Box>
            </Center>
            <Center>
              <Button
                variant={'solid'}
                size={'md'}
                color="white"
                fontWeight="semibold"
                px="6"
                id="gradient"
                colorScheme="blue"
                my="19"
                rounded="full"
                onClick={(e) => onSubmit(e)}
              >
                Send request
              </Button>
            </Center>
          </div>
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  )
}

export default ContactUS
