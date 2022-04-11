import React from 'react'
import img from '../../public/images/mentors/Akhil.png'
import universityImg from '../../public/images/university.png'

import Classes from '../../styles/blog.module.css';
import InstaIcon from '../../public/images/icons/instacolor.png'
import LinkedinIcon from '../../public/images/icons/linkedincolor.png'
import FacebookIcon from '../../public/images/icons/facebookcolor.png'
import TwitterIcon from '../../public/images/icons/twitter-gc7d879758_1280.png'
function SingleBlog(prop) {
  return (
    <>
    <a href={`/Blogs/blogdetail/${prop.id}`}>
        <div className={Classes.SingleBlog}>
                    <div className={Classes.BlogContentContainer}>
                                        <h5>{prop?.tag}</h5>
                                        <div className={Classes.BlogTitleAndBody}>
                                                <div className={Classes.BlogTitle}>
                                                    <h3>{prop?.title}</h3>
                                                    <h4 dangerouslySetInnerHTML={{ __html: prop?.body}}></h4>
                                                </div>
                                                <div className={Classes.BlogImg}>
                                                    <img src={prop?.image ? prop?.image : "No Pic"} alt="No Img" />
                                                </div>
                                        </div>
                                    
                                        <div className={Classes.BlogAuthorAndSocial}>
                                                    <div className={Classes.author}>
                                                        <img src={prop?.writerimg} alt="No Img" />
                                                        <h5>{prop?.writerName} | {prop?.writerTagline}</h5>
                                                    </div>

                                                    <div className={Classes.Social}>
                                                    <a href={prop?.links?.fb}> <img src={FacebookIcon.src} alt="No Img" /> </a>
                                                    <a href={prop?.links?.twitter}> <img src={TwitterIcon.src} alt="No Img" /> </a>
                                                    <a href={prop?.links?.insta}> <img src={ InstaIcon.src} alt="No Img" /> </a>
                                                    <a href={prop?.links?.linkedin}> <img src={LinkedinIcon.src} alt="No Img" /> </a>
                                                    </div>
                                        </div>


                    </div>
        </div>
    </a>
    </>
  )
}

export default SingleBlog