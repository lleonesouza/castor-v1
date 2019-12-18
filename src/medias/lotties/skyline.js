import Lottie from 'react-lottie'
import * as animationData from './json/cloud.json'
import React from 'react'
import styled from '@emotion/styled'

export default function skyline() {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

      let MenuDiv = styled.div({
        height: '100vh',
        width: '100vw',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: -1,
    })


    return (
        <MenuDiv>
             <Lottie options={defaultOptions}
              height={'100%'}
              width={'100%'}
              isStopped={false}
              isPaused={false}/>
        </MenuDiv>
    )
}
