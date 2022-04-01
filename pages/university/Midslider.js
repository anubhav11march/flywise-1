import React,{useState} from 'react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
    Tooltip
  } from '@chakra-ui/react'


function SliderMarkExample() {
    const [sliderValue, setSliderValue] = useState(0)
    return (
      <Slider aria-label='slider-ex-6' defaultValue={1} min={0} max={2} step={1} onChange={(val) => setSliderValue(val)}>
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
            bgColor="blue"
        />
      </Slider>
    )
  }

  export default SliderMarkExample