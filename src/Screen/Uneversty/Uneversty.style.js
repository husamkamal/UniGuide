import styled from "styled-components";
import { Flex } from "../../Global.style";

export const Li=styled(Flex)`
    justify-content:space-around;
    flex-direction:column;
    height:100%;

    min-width:100%;
    align-items:flex-end;
    background-color: #ecf0fc;
    border-radius: 16px;
    /* padding: 30px 10px; */
    /* margin: 0 10px 15px 15px; */
    height: 120px;
    border: none;
`
export const ALink=styled.a`
    text-decoration: none;
    color:black;
    width:100%;
`