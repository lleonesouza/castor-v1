import React,{useState} from 'react'
import {LoginForm, LoginInput, LoginDiv, LoginButton} from './css'
import Lottie from 'react-lottie'
import * as Fingerprint from './fingerprint.json'

export default function Login() {
    var [isPaused, setIsPaused] = useState(true)
    var [user, setUser] = useState(true)
    var [pass, setPass] = useState(true)

    var handlerLogin = () => {
        setIsPaused(false)
        
    }

    const FingerprintOption = {
        loop: false,
        autoplay: false, 
        animationData: Fingerprint.default,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        },
        eventListeners: [
          {
            eventName: 'complete',
            callback: () => console.log('the animation completed:'),
          }
        ]
      };


    return (
      <LoginDiv>
        <h1>login</h1>

        <LoginForm>
          <label>Usuário:</label>
          <LoginInput />

          <label>Senha:</label>
          <LoginInput type="password" />

        <LoginButton
        onClick={() => handlerLogin()}> 
            <Lottie
            options={FingerprintOption}
            height={"100px"}
            width={"200px"}
            isStopped={isPaused}
            isPaused={isPaused}
            eventListeners={[
              {
                eventName: "complete",
                callback: () => console.log("the animation completed:")
              }
            ]}
          />
        </LoginButton>
          


        </LoginForm>
      </LoginDiv>
    );
}
