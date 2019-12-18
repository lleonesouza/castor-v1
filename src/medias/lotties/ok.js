import Lottie from 'react-lottie'
import * as animationData from './json/play.json'
import styled from '@emotion/styled'
import React from 'react'

export default function playLottie() {
  let Wrapper = styled.div({
    height: '30px',
    width: '30px',
    margin: 'auto',
    transform: 'rotateX(180deg)'
})

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };


    return (
        
        <Wrapper>
          <Lottie options={defaultOptions}
              height={'100%'}
              width={'100%'}
              isStopped={false}
              isPaused={false}/>

        </Wrapper>
             


       
    )
}
