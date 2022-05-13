import React,{useState} from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip,
  } from '@chakra-ui/react'


function SliderMarkExample(prop) {

  const [sliderValue, setSliderValue] = useState(0)
    
    return (
   <>
      {
        (prop.wesorloan === "wes") ? (
             <Slider aria-label='slider-ex-6' defaultValue={1} min={0} max={2} step={1} onChange={(val) => {          
                prop.setfilter({...prop.filter,wes:val})
                  setSliderValue(val)}}>
                  <SliderMark value={0} mt='3' ml='0.2' fontSize='0.8rem'>
                    Required
                  </SliderMark>
                  <SliderMark value={1}  mt='3' ml='-3' fontSize='0.8rem'>
                    All
                  </SliderMark>
                  <SliderMark  value={2}  mt='3' ml='-4.1rem'  fontSize='0.8rem'>
                   Not Reqd
                  </SliderMark>
                  <SliderMark
                    value={sliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                  >
                  </SliderMark>
                  <SliderTrack>
                  </SliderTrack>
                  <SliderThumb 
                      bgColor="blue.500"
                  />
                </Slider>
        ):( (prop.wesorloan == "loanAssist" ? (
          
          <Slider aria-label='slider-ex-6' defaultValue={1} min={0} max={2} step={1} onChange={(val) => {          
                prop.setfilter({...prop.filter,loanAssist:val})
                  setSliderValue(val)}}>
                  <SliderMark value={0} mt='3' ml='1' fontSize='0.8rem'>
                    Eligible
                  </SliderMark>
                  <SliderMark value={1}  mt='3' ml='-2.5' fontSize='0.8rem'>
                    All
                  </SliderMark>
                  <SliderMark  value={2} mt='3' ml='-4.4rem' fontSize='0.8rem'>
                    Not Eligible
                  </SliderMark>
                  <SliderMark
                    value={sliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                  >
                  </SliderMark>
                  <SliderTrack>
                  </SliderTrack>
                  <SliderThumb 
                      bgColor="blue.500"
                  />
                </Slider>
        ):(
          
          <Slider aria-label='slider-ex-6' defaultValue={1} min={0} max={2} step={1} onChange={(val) => {          
                prop.setfilter({...prop.filter,jobAssist:val})
                  setSliderValue(val)}}>
                  <SliderMark value={0} mt='3' ml='1' fontSize='0.8rem'>
                    Eligible
                  </SliderMark>
                  <SliderMark value={1}  mt='3' ml='-2.5' fontSize='0.8rem'>
                    All
                  </SliderMark>
                  <SliderMark  value={2} mt='3' ml='-4.4rem' fontSize='0.8rem'>
                    Not Eligible
                  </SliderMark>
                  <SliderMark
                    value={sliderValue}
                    textAlign='center'
                    bg='blue.500'
                    color='white'
                    mt='-10'
                    ml='-5'
                    w='12'
                  >
                  </SliderMark>
                  <SliderTrack>
                  </SliderTrack>
                  <SliderThumb 
                      bgColor="blue.500"
                  />
                </Slider>
        )))
      }
   
   </>
    )
  }

  export default SliderMarkExample