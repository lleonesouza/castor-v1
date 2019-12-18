import Lottie from 'react-lottie'
import * as animationData from './json/dayAndNight.json'
import React from 'react'
import styled from '@emotion/styled'

export default function dayAndNight() {
    let Wrapper = styled.div({
        height: '10vh',
        width: '10vw',
        margin: 'auto',
    })

    const defaultOptions = {
        loop: false,
        autoplay: false, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return (
        <Wrapper>
             <Lottie options={defaultOptions}
              height={'100%'}
              width={'100%'}
              isStopped={true}
              isPaused={true}/>
        </Wrapper>
    )
}
