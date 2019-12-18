import Lottie from 'react-lottie'
import * as animationData from './json/submit.json'
import React from 'react'
import styled from '@emotion/styled'

export default function Submit() {
    let Wrapper = styled.div({
        height: '50px',
        width: '50px',
        positino: 'absolute',
        margin: 'auto',
    })

    const defaultOptions = {
        loop: true,
        autoplay: true, 
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
              isStopped={false}
              isPaused={false}/>
        </Wrapper>
    )
}
