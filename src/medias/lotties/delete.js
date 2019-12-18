import Lottie from 'react-lottie'
import * as animationData from './json/delete.json'
import React from 'react'
import styled from '@emotion/styled'

export default function Delete() {
    let Wrapper = styled.div({
        height: '30px',
        width: '30px',
        margin: 'auto',
        cursor: 'pointer',
        transform: 'scale(1.5)'
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
              isStopped={false}
              isPaused={false}/>
        </Wrapper>
    )
}
