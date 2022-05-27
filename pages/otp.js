import { useState } from 'react';
import {
  auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from '../content/firebase';
import React from 'react';
import { useRouter } from 'next/router';
import Footer from '../component/common/footerr';
import Image from 'next/image';
import Navbar from '../component/common/navbar';
import NLink from 'next/link';
import pngg from '../public/images/icons/Group.png';
import classes from '../styles/whatsappbtn.module.css';
import ComingSoon from '../public/images/icons/confirm.png';
import axios from 'axios';
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
  PinInput,
  PinInputField,
} from '@chakra-ui/react';
import OtpInput from 'react-otp-input';

const Otp = (props) => {
  const [otp, setOtp] = useState(0);
  const [error, setError] = useState('');
  const router = useRouter();
  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const configureRecaptcha = () => {
    console.log(auth);
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  };
  const onSignInSubmit = (userPhone) => {
    e.preventDefault();
    // configureRecaptcha();
    // const phoneNumber = "+91" + userPhone;
    // console.log(phoneNumber);
    // const appVerifier = window.recaptchaVerifier;
    // signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    //   .then((confirmationResult) => {
    //     // SMS sent. Prompt user to type the code from the message, then sign the
    //     // user in with confirmationResult.confirm(code).
    //     window.confirmationResult = confirmationResult;
    //     console.log("send");
    //     // ...
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     // Error; SMS not sent
    //     // ...
    //   });
  };
  const onSubmitOtp = (e) => {
    e.preventDefault();
    const code = otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(user);
        evaluateProfilePost();
        console.log('User verified');

        // ...
      })
      .catch((error) => {
        console.log(error);
        //  alert("Wrong OTP");
        setError('Wrong Otp Entered');
        // ...
      });
  };

  function evaluateProfilePost() {
    // setLoading(true);
    // setSuccess("");
    setError('');
    router.push('/success');

    // axios({
    //   url: 'https://api.flywise.in/api/user/add',
    //   method: 'POST',
    //   headers: {
    //     contentType: 'applications/json',
    //   },
    //   // body: formData
    //   // data: {
    //   //   whichCountry: country,
    //   //   majorBarrier: majorBarrier,
    //   //   courses: course,
    //   //   GreQuantScore: greQuant,
    //   //   GreVerbalScore: greVerbal,
    //   //   // ielts_toefl: ieltsToefl,
    //   //   englishTestType: englishTestType,
    //   //   englishTestScore: englishTestScore,
    //   //   GreTraining: greTraining,
    //   //   workExperience: workEx,
    //   //   noofbacklogs: backlogs,
    //   //   cgpa: cgpa,
    //   //   college: clgUni,
    //   //   budget: budget,
    //   //   fund: fundMasters,
    //   //   firstName: firstName,
    //   //   lastName: lastName,
    //   //   email: userEmail,
    //   //   mobileNo: userPhone,
    //   //   session: session,
    //   //   iscsit: iscsit,
    //   //   referral: referral,
    //   //   discover: discover == "Other" ? other : discover,
    //   // },
    //   data: JSON.parse(localStorage.getItem('profile')),
    // })
    //   .then((res) => {
    //     console.log(res.data);

    //     localStorage.removeItem('profile');
    //     if (res.data.error === 'ALl fields required') {
    //       setError('All fields are required please try again');
    //     } else {
    //       router.push('/success');

    //       console.log(' ot success');
    //     }
    //   })
    //   .catch((err) => {
    //     localStorage.removeItem('profile');
    //     if (err) {
    //       console.log(err);
    //       // console.log(err.response.data.error);
    //       if (
    //         err.response.data.error ==
    //         'This user has already applied for profile evaluation'
    //       ) {
    //         setError('You have already applied');
    //       } else {
    //         setError('There was an error');
    //       }
    //     }
    //   });
    // .finally(() => setLoading(false));
  }
  return (
    <div>
      <Box
        // w={{base:"100vw", md:''}}
        maxW={'100vw'}
      >
        <Grid
          overflow='hidden'
          maxW='100vw'
          templateRows='repeat(12, 1fr)'
          templateColumns='repeat(12, 1fr)'
        >
          <GridItem rowSpan={12} colSpan={12}>
            <Navbar outline='' />
          </GridItem>
          <GridItem
            rowSpan={12}
            colSpan={12}
            py={['0.4rem', '1rem', '2rem', '3rem', '4rem']}
            pl={['0.4rem', '1rem', '3rem', '6rem', '12rem']}
            pr={['0.4rem', '1rem', '1rem', '2rem', '12rem']}
          >
            <div className={classes.pnggg}>
              <Image objectFit='contain' alt='pngg' src={pngg} />
              <br />
              <Image src={ComingSoon} alt='comingSoon' h='40px' w='100px' />
              <div>
                <PinInput
                  size={('xs', 'sm', 'md', 'lg')}
                  variant='outline'
                  type='number'
                  onComplete={(value) => setOtp(value)}
                  autofocus
                >
                  <PinInputField
                    marginRight='10px'
                    marginTop='20px'
                    borderColor='grey'
                  />
                  <PinInputField marginRight='10px' borderColor='grey' />
                  <PinInputField marginRight='10px' borderColor='grey' />
                  <PinInputField marginRight='10px' borderColor='grey' />
                  <PinInputField marginRight='10px' borderColor='grey' />
                  <PinInputField borderColor='grey' />
                </PinInput>
              </div>
              <Button
                color='white'
                px='8'
                py='5'
                mb='4'
                mt='8'
                bg='rgba(13, 179, 251, 1)'
                _hover={{ bg: 'rgba(13, 179, 251, 0.9)' }}
                _active={{ bg: 'rgba(13, 179, 251, 0.7)' }}
                ml='auto'
                mr='auto'
                onClick={onSubmitOtp}
              >
                Enter OTP
              </Button>
              {error}
            </div>
          </GridItem>
        </Grid>
        <Footer />
      </Box>
    </div>
  );
};
export default Otp;
