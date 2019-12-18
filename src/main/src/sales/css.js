import styled from '@emotion/styled'

let SalesDiv = styled.div({
    height: '99%',
    width: '100%',
    background: '#282c345b',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    margin: 'auto'
})


// HEADER
let ItemForm = styled.form({
    height: '20px',
    borderBottom: '1px white solid',
    borderRadius: '20px',
    background: 'none ',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 0.3fr',
    alignContent: 'center',
    alignItems: 'center',
    margin: '0px',
    padding: '20px'
})

let SearchWrapper = styled.div({
    background: 'white',
    width: '95%',
    height: '40px',
    margin: '0',
})

let InputQuantity = styled.input({
    background: 'white',
    width: '80%',
    margin: '0',
    height: '25px',
    fontSize: '20px'
})


// BODY
let BodyDiv = styled.div({
    minHeight: '60vh',
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    color: 'white',
    marginTop: '0px',
    overflowY: 'scroll'
})

let GridUl = styled.ul(props => ({
    background: props.hover && 'black',
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr 0.3fr',
    listStyle: 'none',
    margin: '0px',
    ':hover, :focus': props.hover && {
        background: '#282c345b',
    },
    borderBottom: props.top && '1px white solid',
    padding: props.top && '10px',
    textAlign: 'center',
    padding: props.hover && '15px',
    margin: props.hover && '5px',
}))

let FlexUl = styled.ul({
    height: '80vh',
    margin: 0,
    padding: 0,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
})



// Footer 
let Footer = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContet: 'center',
    height: '110px'
})

let Button = styled.button((props) => ({
    cursor: 'pointer',
    background: 'rgba(0, 255, 0, 0.1)',
    color: 'white',
    padding: props.submit && '15px',
    margin: props.submit && '15px',
    borderRadius: props.submit && '50px',
    position: props.submit && 'relative',
}))

let PaymentDiv = styled.div(props => ({
    border: '1px white solid',
    display: 'flex',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '13vw',
    cursor: 'pointer',
    ':hover, :focus': {
        background: '#282c345b',
    },
    background: props.select === true ? 'white' : 'none',
    color: props.select === true ? 'black' : 'white'
}))

let InputDiscount = styled.input(props => ({
    border: '1px white solid',
    display: 'flex',
    height: '100%',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100px',
    height: '28px',
    color: 'white',
    fontSize: '26px',
    background: 'none',
    ':hover, :focus': {
        background: '#282c345b',
    },
}))

let Pa = styled.p((props) => ({
    margin: 'auto',
    padding: '10px'
}))

// Dailog Cash
let Close = styled.div({
    position: 'absolute',
    background: 'rgba(255, 255, 255, 0.1)',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
})


let Dialog = styled.div({
    top: '40vh',
    left: '45vw',
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    padding: '10px',
    border: '1px black solid',
    background: 'white',
    color: 'black'
})

export { Close, Dialog, InputDiscount, PaymentDiv, Pa, Button, SearchWrapper, SalesDiv, InputQuantity, FlexUl, GridUl, ItemForm, BodyDiv, Footer }