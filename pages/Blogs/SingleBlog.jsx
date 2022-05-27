import React from 'react'
import img from '../../public/images/mentors/Akhil.png'
import universityImg from '../../public/images/university.png'
import Image from 'next/image';

import Classes from '../../styles/blog.module.css';
import InstaIcon from '../../public/images/icons/instacolor.png'
import LinkedinIcon from '../../public/images/icons/linkedincolor.png'
import FacebookIcon from '../../public/images/icons/facebookcolor.png'
import TwitterIcon from '../../public/images/icons/twitter-gc7d879758_1280.png'

function SingleBlog(prop) {
  return (
    <>
    <div className='col-lg-4 col-xxl-4  col-md-4 col-sm-6 col-12  mb-4  '>
    <a href={`/Blogs/blogdetail/${prop.id}`}>
        <div className={`${Classes.SingleBlog}  `}>
                    <div className={Classes.BlogContentContainer}>
                            <div className={Classes.BlogImg}>
                              <img src={prop?.image ? prop?.image : "No Pic"} alt="No Img" />
                            </div>

                              <div className={`${Classes.BlogContent} `}>
                                        <h5>{prop?.tag}</h5>
                                        
                                        <div className={Classes.BlogTitleAndBody}>
                                                <div className={Classes.BlogTitle}>
                                                    <h3>{prop?.title}</h3>
                                                <div className={Classes.BlogAuthorAndSocial}>
                                                    <div className={`${Classes.author} my-2` }>
                                                        <h5>By {prop?.writerName} | {prop?.date} | {prop?.writerTagline}</h5>
                                                    </div>
                                                  </div>
                                                    <h4 dangerouslySetInnerHTML={{ __html: prop?.body}}></h4>
                                                </div>

                                        </div>
                                    


                                </div>
                    </div>
        </div>
    </a>
    </div>
    </>
  )
}

export default SingleBlog