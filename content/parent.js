import React, { Fragment } from "react";
import Image from "next/image";
import Whats from "../public/images/icons/whattt.png";
import classes from "../styles/whatsappbtn.module.css";
import { ArrowDownIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import NLink from 'next/link';

const Parentdiv = ({ children }) => {
  const path = useRouter().pathname;
 const text="Hi team, I am looking forward to getting connected with the Flywise team and learn more about study abroad opportunities!";
  return (
    <div>
      <Fragment>{children}</Fragment>
      {/* {path !== "/profile-evaluation" ? (
        <div className={classes.what}>
        <a style={{ color: 'black' }} href={`https://api.whatsapp.com/send?phone=19254459180&text=${text}` }target='_blank'>
                      <Image alt="whatsapp" src={Whats} />
              </a>
          
        </div>
        
      ) : null} */}
      {path =="/mentors"?(
        <NLink href="/mentors/#mentorrs">
        <div className={classes.godown}>
        <ArrowDownIcon color="white"  />
        </div>
        </NLink>
      ):null}
    </div>
  );
};

export default Parentdiv;
