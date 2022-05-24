import React,{useEffect,useState,useMemo} from "react";
import Navbar from "../../component/common/navbar";
import Footer from "../../component/common/footerr";
import Classes from "../../styles/university.module.css";
import { Select,RadioGroup,Stack,Radio,Checkbox,Box } from "@chakra-ui/react";
import SliderThumbWithTooltip from "./Slider";
import Universitycard from "./Universitycard";
import SliderMarkExample from "./Midslider";
import { Country, State, City }  from 'country-state-city';
import {Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon,
} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons/faMagnifyingGlass'
import { faFilter } from '@fortawesome/free-solid-svg-icons/faFilter'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons/faCircleXmark'
import axios from "axios";
import { Input } from '@chakra-ui/react'
import Loader from "./Loader";


function Universities() {
  const [GREValue, setGREValue] = React.useState(null)
  const [UndergradTypeValue, setUndergradTypeValue] = React.useState(null)
  const [EnglishTypeValue, setEnglishTypeValue] = React.useState(null)
  const [ApplicationDeadline, setApplicationDeadline] = React.useState(null)
  const [usStates, setusStates] = React.useState([]);
  const [ukStates, setukStates] = React.useState([]);
  const [CAStates, setCAStates] = React.useState([]);
  const [AuStates, setAuStates] = React.useState([]);
  const [sidefilter, setsidefilter] = useState(Classes.hideSidebar)
  const [ModalBG, setModalBG] = useState("")
  const [universityData, setuniversityData] = useState([])
  const [searchInput, setsearchInput] = useState('');
  const [filterData, setfilterData] = useState([])
  const [getfilterData, setgetfilterData] = useState([])
  const [currPage, setcurrPage] = useState(1)
  const [postPerPage] = useState(4)
  const [window, setwindow] = useState(5)
  const [paginateSize, setpaginateSize] = useState(5)

//pagination

const indexOfLastPost = currPage * postPerPage ;
const indexOfFirstPost = indexOfLastPost - postPerPage ;
const currentPosts = getfilterData.slice(indexOfFirstPost,indexOfLastPost)

const paginate = pageNumber => {
setcurrPage(pageNumber)
};

const pageNumbers = [];
for (let i = 1; i <= Math.ceil(getfilterData.length / postPerPage); i++) {
  pageNumbers.push(i);
}
const pagesize= pageNumbers.length;
var startPage = 1;
var endPage = window;
let paginationslot = [];

if(currPage>=endPage){
  startPage=window;
  endPage=endPage+paginateSize
  setwindow(window+paginateSize)
  for(var i=startPage ; i<=endPage ; i++){
      paginationslot.push(i);
  }
}else{
   for(var i=startPage ; i<=endPage ; i++){
       paginationslot.push(i);
    }
}


//filter usestate

const [sidefilterData, setsidefilterData] = useState({
  countries:null,
  states:null,
  disciplines:null,
  fees:null,
  appFees:null,
  length:null,
  gre:null, 
  englishExam:null,
  duolingoOverall:null,
  pteOverall:null,
  toeflTotal:null,
  toeflListening:null,
  toeflReading:null,
  toeflWriting:null,
  toeflSpeaking:null,
  ieltsTotal:null,
  ieltsListening:null,
  ieltsSpeaking:null,
  ieltsReading:null,
  ieltsWriting:null,
  wes:null,
  loanAssist:null,
  jobAssist:null,
  deadline:null,
})
  useEffect(() => {
    let USAstates = State.getStatesOfCountry('US')
    let UKstates = State.getStatesOfCountry('GB');
    let CAstates = State.getStatesOfCountry('CA');
    let Austates = State.getStatesOfCountry('AU');
    setusStates(USAstates)
    setukStates(UKstates)
    setAuStates(Austates)
    setCAStates(CAstates);
    callUniversityData();
  }, [])


//sidebar responsiveness

  const HandleSidebar=()=>{
    if(sidefilter==Classes.hideSidebar){
      setModalBG(Classes.contentBlur);
      setsidefilter(Classes.showSidebar)

    }else{
      setModalBG("");
      setsidefilter(Classes.hideSidebar)
      
    }
  }

  const handlescroll=()=>{

    if(sidefilter==Classes.showSidebar){
      setModalBG("");
      setsidefilter(Classes.hideSidebar)
    }

  } 


// api call for all course data

  const callUniversityData =async()=>{
    try {
      const call1 = await axios.get("https://flywise-admin2.herokuapp.com/api/allCourses?activeStatus=true");
      setuniversityData(call1.data.allcourses)
    } catch (error) {
      console.log(error);
    } 
  }
console.log(universityData)
console.log(getfilterData)
  
//Searching of university 


const searchItems = (searchValue) => {
  setsearchInput(searchValue)
  if(searchInput !== ''){
    let filteredData =  universityData?.filter((item) => {  
    return new RegExp(".*" +searchValue + ".*" , "i").test(item.university?.name)  
  })    
    setfilterData(filteredData)
  }else{
    setfilterData(universityData)
  }
}


// handle function for array


const handlediscipline = (e)=> {
  
  if(sidefilterData.disciplines !== null &&  sidefilterData.disciplines.includes(e.target.value)   ){
    let temp = sidefilterData.disciplines.indexOf(e.target.value)
    let temp2= sidefilterData.disciplines
    temp2.splice(temp,1);
    setsidefilterData({...sidefilterData, disciplines:temp2.length==0 ? (null)  : (temp2)  })
  }else{
  setsidefilterData({...sidefilterData, disciplines:sidefilterData.disciplines===null ? ([e.target.value])  : ([...sidefilterData.disciplines,e.target.value])  })
}
}
const handlecountry = (e)=> {
  
  if(sidefilterData.countries !== null &&  sidefilterData.countries.includes(e.target.value)   ){
    let temp = sidefilterData.countries.indexOf(e.target.value)
    let temp2= sidefilterData.countries
    temp2.splice(temp,1);
    setsidefilterData({...sidefilterData, countries:temp2.length==0 ? (null)  : (temp2)  })
  }else{
  setsidefilterData({...sidefilterData, countries:sidefilterData.countries===null ? ([e.target.value])  : ([...sidefilterData.countries,e.target.value])  })
}
}
const handlestate = (e)=> {
  
  if(sidefilterData.states !== null &&  sidefilterData.states.includes(e.target.value)   ){
    let temp = sidefilterData.states.indexOf(e.target.value)
    let temp2= sidefilterData.states
    temp2.splice(temp,1);
    setsidefilterData({...sidefilterData, states:temp2.length==0 ? (null)  : (temp2)  })
  }else{
  setsidefilterData({...sidefilterData, states:sidefilterData.states===null ? ([e.target.value])  : ([...sidefilterData.states,e.target.value])  })
}
}




// filtering by sidefilter

const getAllfilterdata = async()=>{
        try {
          const call2 = await axios.get("https://flywise-admin2.herokuapp.com/api/allcourses", { params:  sidefilterData  }); 
        setgetfilterData(call2.data.allcourses)
        } catch (error) {
          console.log(error);
        }
}

useEffect(() => {
  getAllfilterdata()
}, [sidefilterData])



useEffect(() => {
  if(sidefilterData?.englishExam != undefined ){
    setsidefilterData({...sidefilterData,ieltsReading:"",ieltsListening:"",ieltsWriting:"",
      ieltsSpeaking:"",toeflReading:"",toeflListening:"",toeflSpeaking:"",toeflWriting:"",pteOverall:"",duolingoOverall:"",ieltsTotal:"",toeflTotal:""})

  }
}, [sidefilterData.englishExam])


  return (
    <div id="overflow-hid">
      <Navbar />
      <section className={Classes.universitymain}>
        <div id={sidefilter} className={Classes.universitysidefilter}>
        
        <Accordion  allowMultiple>
          <AccordionItem >
            <h2>
              <AccordionButton _expanded={{ bg: '#4080D3', color: 'white' }} >
                <Box flex='1' textAlign='left'>
                <div className={Classes.universityFeeHead}>
                 <h3>
                 Country
                 </h3> 
                </div>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
            {/* single accordian */}
                       {/* usa */}
                       <Accordion  allowMultiple>
                          <AccordionItem >
                          <h2>
                            <AccordionButton   >
                            <Box flex='1' textAlign='left'>
                            <Checkbox  onChange={(e)=>handlecountry(e)} value="US"  spacing='1.2rem' marginBottom="5px" >United States</Checkbox>
                            </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel display='flex' className="d-flex flex-column" height="30vh" overflowY="auto" flexDirection='column' bgColor='rgba(0,0,0,0.05)' pb={4}>                          
                          {
                            usStates.map((state,ind)=>{
                              return (
                                <Checkbox spacing='1.2rem' onChange={(e)=> handlestate(e)} value={state.name} key={ind} marginBottom="5px" >{state.name}</Checkbox>
                              )
                            })
                          }

                          </AccordionPanel>
                        </AccordionItem>
                       
                       {/* uk */}
                          <AccordionItem>
                          <h2>
                            <AccordionButton size='sm'>
                            <Box flex='1'  textAlign='left'>
                            <Checkbox  onChange={(e)=>handlecountry(e)}  value="GB"  spacing='1.2rem' marginBottom="5px" >United kingdom</Checkbox>
                            </Box>                            
                            <AccordionIcon />
                            </AccordionButton>
                              
                          </h2>
                          <AccordionPanel className="d-flex flex-column" display='flex' height="30vh" overflowY="auto" flexDirection='column' bgColor='rgba(0,0,0,0.05)' pb={4}>
                          {
                            ukStates.map((state,ind)=>{
                              return (
                                <Checkbox onChange={(e)=> handlestate(e)} value={state.name}  key={ind} spacing='1.2rem' marginBottom="5px" >{state.name}</Checkbox>
                              )
                            })
                          }       

                          </AccordionPanel>
                        </AccordionItem>

                            {/* Canada */}

                          <AccordionItem>
                          <h2>
                            <AccordionButton>
                            <Box flex='1' textAlign='left'>
                            <Checkbox  onChange={(e)=>handlecountry(e)}  value="CA"  spacing='1.2rem' marginBottom="5px" >Canada</Checkbox>
                            </Box>                                                       
                            <AccordionIcon />
                            </AccordionButton>
                              
                          </h2>
                          <AccordionPanel className="d-flex flex-column" display='flex' height="30vh" overflowY="auto" flexDirection='column' bgColor='rgba(0,0,0,0.05)' pb={4}>
                          {
                            CAStates.map((state,ind)=>{
                              return (
                                <Checkbox onChange={(e)=> handlestate(e)} value={state.name}  key={ind} spacing='1.2rem' marginBottom="5px" >{state.name}</Checkbox>
                              )
                            })
                          }       

                          </AccordionPanel>
                        </AccordionItem>

                            {/* Austrilia */}

                          <AccordionItem>
                          <h2>
                            <AccordionButton  >
                              <Box flex='1' textAlign='left'>
                              <Checkbox  onChange={(e)=>handlecountry(e)}  value="AU"  spacing='1.2rem' marginBottom="5px" >Austrilia</Checkbox>
                              </Box>                                                       
                            
                            <AccordionIcon />
                            </AccordionButton>
                              
                          </h2>
                          <AccordionPanel className="d-flex flex-column" display='flex' height="30vh" overflowY="auto" flexDirection='column' bgColor='rgba(0,0,0,0.05)' pb={4}>
                          {
                            AuStates.map((state,ind)=>{
                              return (
                                <Checkbox onChange={(e)=> handlestate(e)} value={state.name}  key={ind} spacing='1.2rem' marginBottom="5px" >{state.name}</Checkbox>
                              )
                            })
                          }       

                          </AccordionPanel>
                        </AccordionItem>
                        </Accordion>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: '#4080D3', color: 'white' }}>
                <Box flex='1' textAlign='left'>
                <div className={Classes.universityFeeHead}>
                 <h3>
                 Discipline
                 </h3> 
                </div>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            {/* setsidefilterData({...sidefilterData,disciplines: e.target.value */}
            <AccordionPanel className="d-flex flex-column" pb={4}>
                <Checkbox  onChange={(e)=>handlediscipline(e)}  value="Computer Science"  spacing='1.2rem' marginBottom="5px" >Computer Science</Checkbox>
                <Checkbox  onChange={(e)=>handlediscipline(e)}  value="Information System"  spacing='1.2rem' marginBottom="5px" >Information System</Checkbox>
                <Checkbox  onChange={(e)=>handlediscipline(e)} value="Data Science"  spacing='1.2rem' marginBottom="5px" >Data Science</Checkbox>
                <Checkbox  onChange={(e)=>handlediscipline(e)}  value="Business Analytics"  spacing='1.2rem' marginBottom="5px" >Business Analytics</Checkbox>
    
            </AccordionPanel>
          </AccordionItem>
        </Accordion>



      {/* university fee slider */}
      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
        <span className="d-flex w-100 justify-content-between"> <h3>Tution Fee (USD)</h3> <h3>{sidefilterData?.fees}</h3> </span> 
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderThumbWithTooltip
              min={0}
              max={100000}
              start={"None"}
              mid={50000}
              end={100000}
              setfilter={ setsidefilterData}
              filter={ sidefilterData}
              feesorappFees = {"fees"}
            />
        </div>
      </div>


      {/* Application Fee */}

      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
      <span className="d-flex w-100 justify-content-between"> <h3>Application Fee (USD)</h3> <h3>{sidefilterData?.appFees}</h3> </span>
         {/* <h3>USD</h3> */}
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderThumbWithTooltip
              min={0}
              max={200}
              start={"None"}
              mid={100}
              end={200}
              setfilter={ setsidefilterData}
              filter={ sidefilterData}
              feesorappFees = {"appFees"}
            />
        </div>
      </div>

      {/* Gre */}

      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>Undergrad Education Type</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
        <RadioGroup onClick={(e)=>setsidefilterData({...sidefilterData,length:e.target.value})} >
            <Stack direction='column'>
              <Radio cursor="pointer" id="fees" value='4'>4 Year Degree</Radio>
              <Radio cursor="pointer" id="fees" value='3'>3 Year Degree</Radio>
            </Stack>
          </RadioGroup>        
        </div>

      <div className={Classes.universityFeeHead}>
         <h3>GRE Test Scores</h3>
         </div>
         
        <div className={Classes.universityGREBracket}>
        <RadioGroup onClick={(e)=>setsidefilterData({...sidefilterData,gre:e.target.value})} >
            <Stack  direction='column'>
              <Radio cursor="pointer"  id="gre" value='true'>I have GRE Scores</Radio>
              <Radio cursor="pointer"  id= "gre" value='false'>I need GRE Waiver</Radio>
            </Stack>
          </RadioGroup>

        </div>
      </div>


    {/* English exam type */}
    <div className={Classes.universityFeeSlider}>
    <div className={Classes.universityFeeHead}>
         <h3>English Exam Type</h3>
         </div>
         
        <div className={Classes.universityGREBracket}>
            <Select placeholder='Select option' onChange={(e)=>{
              setsidefilterData({...sidefilterData,englishExam:e.target.value})
              
              }}
              >
              <option value='IELTS'>IELTS</option>
              <option value='TOEFL'>TOEFL</option>
              <option value='PTE'>PTE</option>
              <option value='Duolingo'>Duolingo</option>
            </Select>
            
            {
              sidefilterData.englishExam === "TOEFL" ? (
                <div className={Classes.englishExamBox}>
                <Input value={sidefilterData.toeflTotal} variant='outline' id="toefl" onChange={(e)=>setsidefilterData({...sidefilterData,toeflTotal:e.target.value})} placeholder='Total' />
                <Input value={sidefilterData.toeflReading} variant='outline' id="toefl" onChange={(e)=>setsidefilterData({...sidefilterData,toeflReading:e.target.value})} placeholder='Reading' />
                <Input value={sidefilterData.toeflListening} variant='outline' id="toefl" onChange={(e)=>setsidefilterData({...sidefilterData,toeflListening:e.target.value})} placeholder='Listening' />
                <Input value={sidefilterData.toeflWriting} variant='outline' id="toefl" onChange={(e)=>setsidefilterData({...sidefilterData,toeflWriting:e.target.value})} placeholder='Writing' />
                <Input value={sidefilterData.toeflSpeaking} variant='outline' id="toefl" onChange={(e)=>setsidefilterData({...sidefilterData,toeflSpeaking:e.target.value})} placeholder='Speaking' />
                </div>
              ) : (sidefilterData.englishExam === "IELTS" ? (
                <div className={Classes.englishExamBox}>
                <Input value={sidefilterData.ieltsTotal} variant='outline' id="ielts" onChange={(e)=>setsidefilterData({...sidefilterData,ieltsTotal:e.target.value})} placeholder='Total' />
                <Input value={sidefilterData.ieltsReading} variant='outline' id="ielts" onChange={(e)=>setsidefilterData({...sidefilterData,ieltsReading:e.target.value})} placeholder='Reading' />
                <Input value={sidefilterData.ieltsListening} variant='outline' id="ielts" onChange={(e)=>setsidefilterData({...sidefilterData,ieltsListening:e.target.value})} placeholder='Listening' />
                <Input value={sidefilterData.ieltsWriting} variant='outline' id="ielts" onChange={(e)=>setsidefilterData({...sidefilterData,ieltsWriting:e.target.value})} placeholder='Writing' />
                <Input value={sidefilterData.ieltsSpeaking} variant='outline' id="ielts" onChange={(e)=>setsidefilterData({...sidefilterData,ieltsSpeaking:e.target.value})} placeholder='Speaking' />
                </div>
              ) : (sidefilterData.englishExam === "PTE" ? (
                <div className={Classes.duoptebox}>
                <Input value={sidefilterData.pteOverall} variant='outline' name="pte" onChange={(e)=>setsidefilterData({...sidefilterData,pteOverall:e.target.value})} placeholder='PTE Overall' />
                </div>
              ) : (
                sidefilterData.englishExam === "Duolingo" ? (
                <div className={Classes.duoptebox}>
                <Input value={sidefilterData.duolingoOverall} variant='outline' name="duolingo" onChange={(e)=>setsidefilterData({...sidefilterData,duolingoOverall:e.target.value})} placeholder='Duolingo Overall' />
                </div>
                ):(""))))
            }
        </div>
      </div>

 {/* WES Transcript Evaluation */}
      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>WES Transcript Evaluation</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderMarkExample
              filter={sidefilterData}
              setfilter={setsidefilterData}
              wesorloan={"wes"}
            />
        </div>
      </div>
 
 {/* Unsecured Loan Assistance */}
      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>Unsecured Loan Assistance</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderMarkExample
              filter={sidefilterData}
              setfilter={setsidefilterData}
              wesorloan={"loanAssist"}
            />
            
        </div>
      </div>

 
 {/* Job Loan Abroad */}
      <div className={Classes.universityFeeSlider}>
      <div className={Classes.universityFeeHead}>
         <h3>Job Assistance Abroad</h3>
         </div>
         
        <div className={Classes.universityFeeBracket}>
            <SliderMarkExample
              filter={sidefilterData}
              setfilter={setsidefilterData}
              wesorloan={"jobAssist"}
            />
        </div>
      </div>

{/* Application deadline */}
<div className={Classes.universityFeeSlider}>
    <div className={Classes.universityFeeHead}>
         <h3>Application Deadline</h3>
         </div>
         
        <div className={Classes.universityGREBracket}>
        <RadioGroup onClick={(e)=>setsidefilterData({...sidefilterData,deadline:e.target.value})} >
            <Stack  direction='column'>
              <Radio cursor="pointer" value='fall'>Fall</Radio>
              <Radio cursor="pointer" value='spring'>Spring</Radio>
              <Radio cursor="pointer" value='summer'>Summer</Radio>
            </Stack>
          </RadioGroup>
        </div>
      </div>


        </div>


        {/* /content start */}
        <div className={Classes.universitycontent} style={{position:"relative"}} onTouchStart={handlescroll} id={ModalBG}>
          <div className={Classes.universitySearchBar}>
            <div className={Classes.universitySearch}>
            <input
                type='text'
                placeholder='Ex. Harvard University'
                id='searchInput'
                value={searchInput}
                onChange={(e)=>searchItems(e.target.value)}
              />
            <button className={Classes.universitySearchIcon} ><FontAwesomeIcon style={{color:"grey",fontSize:"1.2rem"}} icon={faMagnifyingGlass} /></button>
            <button className={Classes.universityFilterIcon} onClick={HandleSidebar} ><FontAwesomeIcon style={{color:"grey",fontSize:"1.2rem"}} icon={faFilter} /></button>
            
            </div>
            {
              currentPosts.length >0 ? (""):(<Loader/>
                  
              )
            } 
            <h3>{(currentPosts.length>0) ?(`You Found  ${(searchInput.length > 1)?(filterData.length):(getfilterData.length)} Courses `):("Searching...")}</h3>
           
          </div>
          <div className={Classes.universityCardContainer}>
          {  (searchInput.length > 1) ? (
            filterData?.map((university,index)=>{
              return <Universitycard 
                    key={index}
                    id={university._id}
                    applicationFees={university.applicationFees}
                    gre={university?.gre?.greRequired}
                    ielts={university?.ielts?.total}
                    toefl={university?.toefl?.total}
                    duolingo={university?.duolingo?.total}
                    programFees={university?.programFees}
                    type={university?.university?.uniType}
                    name={university?.university?.name}
                    coursename={university?.name}
                    photo={university?.university?.photo}
                    country={university?.university?.country}
                    state={university?.university?.state}
                    link={university?.courseUrl}
                    fall={university?.fallDeadline}
                    spring={university?.springDeadline}
                    summer={university?.summerDeadline}
              />     
          })
          ):(currentPosts?.map((university,index)=>{
              return <Universitycard 
                    key={index}
                    id={university._id}
                    applicationFees={university.applicationFees}
                    gre={university?.gre?.greRequired}
                    ielts={university?.ielts?.total}
                    toefl={university?.toefl?.total}
                    coursename={university?.name}
                    duolingo={university?.duolingo?.total}
                    programFees={university?.programFees}
                    type={university?.university?.uniType}
                    name={university?.university?.name}
                    photo={university?.university?.photo}
                    country={university?.university?.country}
                    state={university?.university?.state}
                    fall={university?.fallDeadline}
                    spring={university?.springDeadline}
                    summer={university?.summerDeadline}
                    link={university?.courseUrl}
                    deadline= {sidefilterData?.deadline}
              />     
          }))
            
          }

          
          </div>
        <div  className='my-5 col-md-12 col-sm-6 container-fluid'>
                <nav aria-label="Page navigation example  ">
            <ul className="pagination   justify-content-center">
               <li className={`${(currPage<=1) ? ("disabled") : ("") } page-item `}>
                <a className="page-link" href="#" onClick={()=>{ setcurrPage(currPage-1) }} >Previous</a>
              </li>
              {
                paginationslot.map((num,index)=>{
                  return <li key={index} className="page-item"><a className={`${currPage === num ? (Classes.activePage):("") } page-link`} onClick={(e)=>{paginate(num)}} href="#">{num}</a></li>
                })
              }
              <li className={`${(currPage>=pageNumbers.length) ? ("disabled") : ("") } page-item `}>
                <a className="page-link" onClick={()=>{ setcurrPage(currPage+1) }} href="#">Next  </a>
              </li>
            </ul>
          </nav>
       </div>
        </div>
    
      </section>
      <Footer />
    </div>
  );
}

export default Universities;
