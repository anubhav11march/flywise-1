import React, { useEffect, useState } from 'react'
import Navbar from '../../../component/common/navbar'
import Footer from '../../../component/common/footer'
import Classes from '../../../styles/blog.module.css'
import Image from 'next/image';
import axios from 'axios'
import univeristyimg from '../../../public/images/university.png'
import { useRouter } from 'next/router'
import { Avatar } from '@chakra-ui/react'

function Singleblog() {
  const [blogData, setblogData] = useState({})
  const router = useRouter()
  let id = router?.query?.id

  useEffect(() => {
    if (id) {
      getdata();
      // eslint-disable-next-line
    }
  }, [id])

  const getdata = async () => {
    try {
      const call1 = await axios.get(`https://api.flywise.in/api/blogById/${router?.query?.id}`)
      console.log(call1.data.blog);
      setblogData(call1.data.blog);
    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
      <Navbar />
      <section className={Classes.blogDetailContainer}>
        <div className={Classes.blogDetailContent}>
          <div className={Classes.blogDetailTitleAndImg}>
            <h3>{blogData?.title}</h3>
            <h5>{blogData?.minutes} Minutes Read , {blogData?.date} </h5>
            {(blogData.thumbnail == 'null' || blogData.thumbnail == null || blogData.thumbnail == '')
              ? <Avatar width="100%" height="50vh" src='' />
              : <img src={blogData?.thumbnail} alt="" />

            }

            <div className={Classes.BlogDetailAuthor}>
              <img src={blogData?.writerImg} alt="" />
              <h3>{blogData?.writerName} | {blogData?.writerTagline}</h3>
            </div>
          </div>

          <div dangerouslySetInnerHTML={{ __html: blogData?.body }}>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Singleblog