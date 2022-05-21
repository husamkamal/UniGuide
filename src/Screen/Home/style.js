import styled from "styled-components";
import { Link } from "react-router-dom";
import { Flex } from "../../Global.style";

export const Box = styled(Flex)`
  width:${props=>props.width};
  min-width:${props=>props.width};
  align-items: flex-start;
  justify-content: space-between;
  height:${props=>props.height} ;
  flex-direction: ${props=>props.direction};
  flex-wrap:${props=>props.warp};
  @media only screen and (max-width:600px) {  
    width:${props=>props.medWidth?props.medWidth:"80%"};
  }
  
`;

export const Para = styled.p`
  font-size: 1.5rem;
  color:${props=>props.color?props.color:"#ffffff"} ;
  text-align: left;
  line-height: 35px;
  word-break: break-all;
  width: 100%;
  
`;
export const ButtonLink = styled(Link)`
  background-color:black ;
  text-decoration: none;
  text-align:center;
  width: 300px;
  min-height: 45px;
  border-radius: 16px;
  color: #4096df;
  padding-top: 10px ;
  font-size: 1.4rem;
  font-weight: bold;
  border: none;
  @media only screen and (max-width:600px) {  
    display:flex;
    justify-content:center;
    align-items: center;
    align-self:center;
}


`;
