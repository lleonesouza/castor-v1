import Lottie from 'react-lottie'
import * as animationData from './json/debit.json'
import React from 'react'
import styled from '@emotion/styled'

export default function debit() {
    let Wrapper = styled.div({
        height: '55px',
        width: '10vw',
        margin: 'auto',
    })

    const defaultOptions = {
        loop: true,
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
              isStopped={false}
              isPaused={false}/>
        </Wrapper>
    )
}
