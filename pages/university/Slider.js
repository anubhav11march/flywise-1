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
    const [sliderValue, setSliderValue] = React.useState(5)
    const [showTooltip, setShowTooltip] = React.useState(false)
    return (
      <Slider
        id='slider'
        defaultValue={5}
        min={prop.min}
        max={prop.max}
        colorScheme='teal'
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={prop.start} mt='3' ml='-2.5' fontSize='0.8rem'>
          {prop.start}
        </SliderMark>
        <SliderMark value={prop.mid} mt='3' ml='-2.5' fontSize='0.8rem'>
        {prop.mid}
        </SliderMark>
        <SliderMark value={prop.end} mt='3' ml='-2.5' fontSize='0.7rem'>
        {prop.end}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg='teal.500'
          color='white'
          placement='top'
          isOpen={showTooltip}
          label={`${sliderValue}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    )
  }
  

export default SliderThumbWithTooltip