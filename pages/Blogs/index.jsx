import React,{useEffect,useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Classes from '../../styles/blog.module.css';
import Style from '../../styles/university.module.css'
import { Spinner } from '@chakra-ui/react';
import Navbar from '../../component/common/navbar'
import SingleBlog from './SingleBlog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import Footer from '../../component/common/footer'
import axios from 'axios';
function Index() {
  const [blogData, setblogData] = useState([])
  const [currPage, setcurrPage] = useState(1)
  const [searchInput, setsearchInput] = useState('');
  const [filterData, setfilterData] = useState([])
  const [postPerPage] = useState(6)

//pagination

  const indexOfLastPost = currPage * postPerPage ;
  const indexOfFirstPost = indexOfLastPost - postPerPage ;
  const currenPosts = blogData.slice(indexOfFirstPost,indexOfLastPost)
  
  const paginate = pageNumber => {
  setcurrPage(pageNumber)
  };
  
  const pageNumbers = [];
  console.log(pageNumbers);
  for (let i = 1; i <= Math.ceil(blogData.length / postPerPage); i++) {
    pageNumbers.push(i);
  }

// search bar

  const searchItems = (searchValue) => {
    setsearchInput(searchValue)
    if(searchInput !== ''){
      let filteredData =  blogData?.filter((item) => {  
      return new RegExp(".*" +searchValue + ".*" , "i").test(item?.title)  
    })    
      setfilterData(filteredData)
    }else{
      setfilterData(blogData)
    }
  }
  


  useEffect(() => {
    getData()
  }, [])
  


//api call for data

  const getData = async()=>{
      try {
        const call1 = await axios.get('https://flywise-admin2.herokuapp.com/api/allBlogs')
        setblogData(call1.data.allBlogs)
      } catch (error) {
        console.log(error);
      }
  } 
  return (
    <>
        <Navbar/>
        <section className={Classes.BlogSection}>
        <div className={Classes.BlogSearchBar}>
            <input
                type='text'
                placeholder='Ex : Name ,Title, Writer'
                id='searchInput'
                value={searchInput}
                onChange={(e)=>searchItems(e.target.value)}
              />
            <button className={Classes.BlogSearchIcon} ><FontAwesomeIcon style={{color:"grey",fontSize:"1.2rem"}} icon={faMagnifyingGlass} /></button>            
            </div>
            <div  className="container-fluid col-lg-11 col-xxl-10  col-md-12 col-sm-12 col-11 my-5  ">
            
            <div className='row '>                    {
              (searchInput.length > 1) ?  
                     ( filterData?.map((blog,index)=>{
                        return  <SingleBlog
                                 key={index}
                                 id={blog._id}
                                 tag={blog.tag}
                                 writerimg = {blog.writerImg}     
                                 image = {blog.thumbnail}     
                                 writerName = {blog.writerName}     
                                 writerTagline = {blog.writerTagline}     
                                 minutes = {blog.minutes}     
                                 title = {blog.title}
                                 links={blog.links}
                                 date={blog.date}     
                                 body={blog.body}     
                        />
                       }))
                    : (currenPosts?.map((blog,index)=>{
                        return  <SingleBlog
                                 key={index}
                                 id={blog._id}
                                 tag={blog.tag}
                                 writerimg = {blog.writerImg}     
                                 image = {blog.thumbnail}     
                                 writerName = {blog.writerName}     
                                 writerTagline = {blog.writerTagline}     
                                 minutes = {blog.minutes}     
                                 title = {blog.title}
                                 links={blog.links}
                                 date={blog.date}     
                                 body={blog.body}     
                        />
                       }))
                    }
                </div>

            </div>
    
{/* pagination */}

            <div className='my-5 col-md-12 col-sm-6 container-fluid'>
                <nav aria-label="Page navigation example  ">
            <ul className="pagination   justify-content-center">
            <li className={`${(currPage<=1) ? ("disabled") : ("") } page-item `}>
                <a className="page-link" href="#" onClick={()=>{ setcurrPage(currPage-1) }} >Previous</a>
              </li>
              {
                pageNumbers.map((num,index)=>{
                  return <li key={index} className="page-item"><a className={`${currPage === num ? (Classes.activePage):("") } page-link`} onClick={(e)=>{paginate(num)}} href="#">{num}</a></li>
                })
              }
                 <li className={`${(currPage>=pageNumbers.length) ? ("disabled") : ("") } page-item `}>
                <a className="page-link" onClick={()=>{ setcurrPage(currPage+1) }} href="#">Next  </a>
              </li>
            </ul>
          </nav>
       </div>
    
        </section>
        
        <Footer/>
    </>
  )
}

export default Index