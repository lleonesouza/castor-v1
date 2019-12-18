import styled from '@emotion/styled'

//Login Form
let LoginDiv = styled.div({
    display: 'flex',
    background: '#282c345b',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '400px',
    width: '500px',
})

let LoginForm = styled.div({
    height: '100%',
    width: '70%',
    margin: 'auto',
})

let LoginInput = styled.input({
    height: '22px',
    width: '100%',
    margin: '8px',
    padding: '8px',
    fontWeight: '600',
    fontSize: '22px'
})

let LoginButton = styled.button({
    display: 'flex',
    cursor: 'pointer',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
    background: 'none',
    margin: 'auto',
    width: '50%',
    border: 'none',
    ':hover,:focus':{
        background: '#282c345b',
    }
})



export { LoginButton, LoginDiv, LoginForm, LoginInput }