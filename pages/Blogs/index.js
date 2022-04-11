import React,{useEffect,useState} from 'react'
import Classes from '../../styles/blog.module.css';
import { Spinner } from '@chakra-ui/react';
import Navbar from '../../component/common/navbar'
import SingleBlog from './SingleBlog';
import Footer from '../../component/common/footer'
import axios from 'axios';
function index() {
  const [blogData, setblogData] = useState([])

  useEffect(() => {
    getData()
  }, [])
  

  const getData = async()=>{
      try {
        const call1 = await axios.get('https://flywise-admin.herokuapp.com/api/allBlogs')
        console.log(call1)
        setblogData(call1.data.allBlogs)
      } catch (error) {
        console.log(error);
      }
  } 
  return (
    <>
        <Navbar/>
        <section className={Classes.BlogSection}>
            <div className={Classes.BlogContainer}>
                    {
                      blogData ?
                     ( blogData?.map((blog,index)=>{
                        return  <SingleBlog
                                 key={index}
                                 id={blog._id}
                                 tag={blog.tag}
                                 writerimg = {blog.writerImg}     
                                 image = {blog.images}     
                                 writerName = {blog.writerName}     
                                 writerTagline = {blog.writerTagline}     
                                 minutes = {blog.minutes}     
                                 title = {blog.title}
                                 links={blog.links}
                                 date={blog.date}     
                                 body={blog.body}     
                        />
                       }))
                    : (<Spinner
                      thickness='4px'
                      speed='0.65s'
                      emptyColor='gray.200'
                      color='blue.500'
                      size='xl'
                    />)
                    }
            </div>
        </section>
        <Footer/>
    </>
  )
}

export default index