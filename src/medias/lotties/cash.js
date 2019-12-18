import Lottie from 'react-lottie'
import * as animationData from './json/cash.json'
import React from 'react'
import styled from '@emotion/styled'

export default function cash() {
    let Wrapper = styled.div({
        height: '55px',
        width: '10vw',
        margin: 'auto',
    })

    const defaultOptions = {
        loop: false,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }

    return (
        <Wrapper>
             <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isStopped={true}
              isPaused={true}/>
        </Wrapper>
    )
}
