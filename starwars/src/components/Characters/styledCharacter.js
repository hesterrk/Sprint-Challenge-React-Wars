import styled, {keyframes} from 'styled-components'

const animationName = keyframes`
  0% { color: #00dbde; }
  100% { color: #8CA6DB; }
`
const slidein = keyframes `
      from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }


`


export const StyledCharacter = styled.div`
    padding: 30px;
    border: 5px #4568DC solid;
    margin: 30px;
    background: #b06ab3;
    animation: ${slidein} 4s;

    &:hover {
    background: mediumorchid;
}
    `;


export const H1 = styled.h1 `
font-size: 20px;
animation: ${animationName} 3s ease infinite alternate;
text-decoration: underline;
`


export const P = styled.p `
color: #DBD5A4;

&:hover {
    transform: scale(1);
}

`