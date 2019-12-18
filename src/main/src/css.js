import styled from '@emotion/styled'

let Div = styled.div({
    border: '1px white solid',
    height: '55vh',
    width: '80vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
})

let Ul = styled.ul({
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    padding: 0,

})
let Li = styled.li({
    padding: '0px',
    height: '8vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    listStyle: 'none',
    ':hover,:focus':{
        background: '#282c34'
    },
})

let InsideUl = styled.ul({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  listStyle: "none",
  margin: 0,
  padding: 0
});


export { Div, Ul, Li, InsideUl }