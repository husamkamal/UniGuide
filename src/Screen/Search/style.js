import styled from "styled-components";
export const BackgroundImage=styled.div`
    background-image:url(${props=>props.bgImg});
    background-position:center;
    background-size:100% 100%;
    background-repeat:no-repeat;
    height:100%;
    width:100%;
    border-radius: 20px;
    cursor:pointer;
`