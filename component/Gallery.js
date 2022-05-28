import React from 'react'
import { Image } from '@chakra-ui/react'
import classes from "../styles/gallery.module.css";


const Gallery = () => {

    let data=[
        {
            id:1,
            imgSrc:"/images/stripe.svg"
        },
        {
            id:2,
            imgSrc:"/images/microsoft.svg"
        },
        {
            id:3,
            imgSrc:"/images/amazon.svg"
        },
        {
            id:4,
            imgSrc:"/images/apple.svg"
        },
        {
            id:5,
            imgSrc:"/images/airbnb.svg"
        },
        {
            id:6,
            imgSrc:"/images/uber.svg"
        },
        {
            id:7,
            imgSrc:"/images/meta.svg"
        },
        {
            id:8,
            imgSrc:"/images/google.svg"
        },
        {
            id:9,
            imgSrc:"/images/lyft.svg"
        },
    ]
  return (
    <div className={classes.gallery}>
      {
          data.map((item,index)=>{
              return(
                  <div className={classes.pics} key={index} >
                      <Image style={{width:100,height:100}} src={item.imgSrc} objectFit="contain" alt="main" />
                  </div>
              )
          })
      }
    </div>
  )
}

export default Gallery
