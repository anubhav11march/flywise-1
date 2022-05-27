import React,{useEffect,useState} from 'react'
import img1 from '../../../public/images/canada_bg.png'
import img2 from '../../../public/images/student_cap_icon.png'
import logo from '../../../public/images/course_icon1.png'
import Classes from '../../../styles/university.module.css'
import Navbar from '../../../component/common/navbar'
import NextLink from 'next/link';
import { ChakraProvider } from '@chakra-ui/react'
import {  Box,Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption} from '@chakra-ui/react'
import Footer from '../../../component/common/footer'
import axios from 'axios'
import { useRouter } from 'next/router'

function Universitysingle() {
  const [singleUniversityData, setsingleUniversityData] = useState()
  
    const router = useRouter()  
    let id = router?.query?.id

  useEffect(() => {
    if(id){
      getdata();
      // eslint-disable-next-line
    }
  }, [id])

  const getdata = async()=>{
    try {
      const call1 = await axios.get(`https://flywise-admin.herokuapp.com/api/courseById/${router?.query?.id}`)
      setsingleUniversityData(call1.data.course);
      console.log(call1.data.course);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
        <Navbar/>

        <section className={classes.universityPage}>
        

        {/* Banner */}
        <div className={Classes.universityBanner}>
              <div className={Classes.universityBannerimg} style={{
    background: ` linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(${singleUniversityData?.university?.photo}) `
                ,objectFit:"cover",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"
              }}>

              </div>
              <div className={classes.universityBannerContent}>
                <img src={logo.src} alt="" />
                <h3>{singleUniversityData?.university?.name}</h3>
                
        <h4>{singleUniversityData?.remarks}</h4>
            </div>
        </div>

        {/* Navbar */}

        <div className={classes.universitybar} >
            <ul>
              <li><NextLink href='/universitysingle/#about'>ABOUT</NextLink></li>
              <li><NextLink href='/universitysingle/#admission'>ADMISSIONS</NextLink></li>
              <li><NextLink href='/universitysingle/#ranking'>RANKING</NextLink></li>
              <li><NextLink href="/universitysingle/#courses">COURSES</NextLink></li>
              <li><NextLink href="/universitysingle/#fee">FEES</NextLink></li>
              <li><NextLink href="/universitysingle/#studentlife">STUDENTS LIFE</NextLink></li>

            </ul>
        </div>

        <div id='about' className={Classes.universityAboutSection}>
            <div className={Classes.universityAboutContent} >
                <h3>About {singleUniversityData?.university?.name}</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea nam expedita sit et quae quia deserunt maxime exercitationem hic repudiandae, blanditiis, enim dicta.</p>
            </div>
            <img src={singleUniversityData?.university?.photo} alt="" />
        </div>



        <div id='admission' className={classes.universityAdmission}>
          <h3>Admissions</h3>
          <h2>Acceptance Rate 10%</h2>


          <div className={classes.universityAcceptanceRate}>
              <div className={classes.universityTable}>
              <div className={classes.universityGraduate}>
                <h4>Graduate</h4>
                <Table size='lg' variant='simple'>
                <Thead>
                  <Tr >
                    <Th >Application Fee </Th>
                    <Th>{singleUniversityData?.applicationFees} (USD)</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >Minimum GPA</Th>
                    <Th>{singleUniversityData?.gre?.minTotal ?  singleUniversityData?.gre?.minTotal : "N/A"}</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >IELTS Range</Th>
                    <Th>{singleUniversityData?.ielts?.total ?  singleUniversityData?.ielts?.total : "N/A"}</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >TOEFL Range</Th>
                    <Th>{singleUniversityData?.toefl?.total ?  singleUniversityData?.toefl?.total : "N/A"}</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >PTE Range</Th>
                    <Th>{singleUniversityData?.pte?.minScore ?  singleUniversityData?.pte?.minScore : "N/A"}</Th>
                  </Tr>
                </Thead>
              </Table>
              </div>
              <div className={classes.universityGraduate}>
                  <h4>UnderGraduate</h4>
                  <Table size='lg' variant='simple'>
                <Thead>
                  <Tr >
                    <Th >Application Fee </Th>
                    <Th>{singleUniversityData?.applicationFees} (USD)</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >Minimum GPA</Th>
                    <Th>{singleUniversityData?.gre?.minTotal ?  singleUniversityData?.gre?.minTotal : "N/A"}</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >IELTS Range</Th>
                    <Th>{singleUniversityData?.ielts?.total ?  singleUniversityData?.ielts?.total : "N/A"}</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >TOEFL Range</Th>
                    <Th>{singleUniversityData?.toefl?.total ?  singleUniversityData?.toefl?.total : "N/A"}</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >PTE Range</Th>
                    <Th>{singleUniversityData?.pte?.minScore ?  singleUniversityData?.pte?.minScore : "N/A"}</Th>
                  </Tr>
                </Thead>
              </Table>
              </div>
              </div>
          </div>
        </div>
        



        {/* Ranking */}
        <div className={classes.UniversitySpace}>

        </div>


        <div id='ranking' className={classes.universityRankingSection}>
        <h3>Ranking</h3>
        <div className={Classes.universityRankingContainer}>
            <img src={singleUniversityData?.university?.photo} alt="" />
            <div className={Classes.universityRankingContent} >
                <h3>#1 in Global</h3>
                <ol>
                  <li>Private University</li>
                  <li>50% Acceptance Rate</li>
                  <li>88 study Program</li>
                  <li>Low State University</li>
                </ol>
            </div>
          </div>    
        </div>


      <div className={classes.UniversitySpace}>
      </div>

      {/* Courses */}
        
        <div id='courses' className={classes.universityCoursesSection} >
            <h3>Courses</h3>
            <div className={classes.universityCoursesTable}>
            <Box overflowX="auto">      
            <Table w={{sm:"400", lg: "760px", lg: "1000px" }} className={classes.universityCoursesTablestyle} shadow={"black"} variant='simple'>
                <Thead >
                  <Tr>
                    <Th>Courses</Th>
                    <Th>Degree</Th>
                    <Th>Tenure</Th>
                    <Th>Tution Fee</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Creative Writing and Literature </Td>
                    <Td>Master degree</Td>
                    <Td>6 Years</Td>
                    <Td>50,000 USD</Td>
                  </Tr>
                  <Tr>
                    <Td>Film and Visual Studies</Td>
                    <Td>Master degree</Td>
                    <Td>4 Years</Td>
                    <Td>50,000 USD</Td>
                  </Tr>
                  <Tr>
                    <Td >Dramatic Arts</Td>
                    <Td>Master degree</Td>
                    <Td>4 Years</Td>
                    <Td>50,000 USD</Td>
                  </Tr>
                  <Tr>
                    <Td >Dramatic Arts</Td>
                    <Td>Master degree</Td>
                    <Td>4 Years</Td>
                    <Td>50,000 USD</Td>

                  </Tr>
                </Tbody>
              </Table>
              </Box>
              </div>
        </div>

        <div className={classes.UniversitySpace}>
      </div>

      {/* Fees */}

      <div id='fee' className={classes.universityFeesSection}>
          <h3>Fees</h3>
          <h2>Tution Fees, scholarships,accomodation costs & more All the costs mentioned below are average costs annually </h2>
        <div className={classes.universityTable}>
          <div className={classes.universityGraduate} >
          <h4>Graduate</h4>
                <Table size='lg' variant='simple'>
                <Thead>
                  <Tr >
                    <Th >Tution Fee</Th>
                    <Th>49,563 USD</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr >
                    <Th >Cost Of Attendance</Th>
                    <Th>80,007 USD</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr >
                    <Th >Scholarships</Th>
                    <Th>49,870 USD</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr >
                    <Th >Accomodation</Th>
                    <Th>18,389 USD</Th>
                  </Tr>
                </Thead>
              
              </Table>
              </div>
              <div className={classes.universityGraduate}>
                  <h4>UnderGraduate</h4>
                  <Table size='lg' variant='simple'>
                <Thead>
                  <Tr >
                    <Th >Tution Fee</Th>
                    <Th> 49,653 USD</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >Cost Of Attendance</Th>
                    <Th>80,007 USD</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >Scholarships</Th>
                    <Th>49,870 USD</Th>
                  </Tr>
                </Thead>
                <Thead>
                  <Tr size='lg'>
                    <Th >Accomodation</Th>
                    <Th>-</Th>
                  </Tr>
                </Thead>
              
              </Table>
          </div>  
        </div>
      </div>


        <div className={classes.UniversitySpace}>
      </div>
        {/* student life */}

    <div id='studentlife' className={classes.universityStudentLife}>
          <div  className={classes.universityStudentLifeContent}>
              <div className={classes.universityStudentLifeContentHead}>
                  <img src={img2.src} alt="" />
                  <h3>{`Student's Life`}</h3>
              </div>
              <p>Things to keep in mind as an international student in the USA:</p>
              <ul>
                <li>The topography and climate of America differ greatly</li>
                <li>Take part in their holidays and traditions.</li>
                <li>Consistent hard work and dedication</li>
              </ul>
          </div>
    </div>

    <div className={classes.UniversitySpace}>
    </div>


        </section>
        <Footer/>
        
    </>
  )
}

export default Universitysingle
