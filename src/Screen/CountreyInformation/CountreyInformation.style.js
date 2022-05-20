import styled from "styled-components";
import { Flex } from "../../Global.style";

export const Imag=styled.img`
    width:50%;
    border-radius:20px;
    height:80%;
    @media only screen and (max-width:600px) {  
        width:90%;
        height:60%;
        margin-top: 4rem;
  }
  
`
export const Li = styled(Flex)`
    main-width:20%;
    justify-content:space-between;

   
`