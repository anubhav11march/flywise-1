import React from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip
  } from '@chakra-ui/react'

function SliderThumbWithTooltip(prop) {
 
    const [sliderValue, setSliderValue] = React.useState(prop.min)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
      <>
      { (prop.feesorappFees=="fees") ?(
      <Slider
        id='slider'
        defaultValue={prop.min}
        min={prop.min}
        max={prop.max}
        colorScheme='blue'
        onChange={(v) => {setSliderValue(v) 
        prop.setfilter({...prop.filter,fees:v})}}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={prop.start} mt='3' ml='-2.5' fontSize='0.8rem'>
          {prop.start}
        </SliderMark>
        <SliderMark value={prop.mid} mt='3' ml='-4' fontSize='0.8rem'>
        {prop.mid}
        </SliderMark>
        <SliderMark value={prop.end} mt='3' ml='-7' fontSize='0.7rem'>
        {prop.end}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='blue.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb 
          bg='blue.500'
          />
        </Tooltip>
      </Slider>) 
      
      :(<Slider
        id='slider'
        defaultValue={prop.min}
        min={prop.min}
        max={prop.max}
        colorScheme='blue'
        onChange={(v) => {setSliderValue(v) 
        prop.setfilter({...prop.filter,appFees:v})}}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={prop.start} mt='3' ml='-2.5' fontSize='0.8rem'>
          {prop.start}
        </SliderMark>
        <SliderMark value={prop.mid} mt='3' ml='-4' fontSize='0.8rem'>
        {prop.mid}
        </SliderMark>
        <SliderMark value={prop.end} mt='3' ml='-7' fontSize='0.7rem'>
        {prop.end}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='blue.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb 
          bg='blue.500'

          />
        </Tooltip>
      </Slider>)
      
      }
      
      </>
    )
  }
  

export default SliderThumbWithTooltip