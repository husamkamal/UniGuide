import styled from "styled-components";
export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;
export const MainContainer = styled(Flex)`
  min-height:${props=>props.minH?props.minH:"90vh"} ;
  height: 90vh;
  width: 100%;
  max-width:1500px;
  flex-direction:${props=>props.column?"column":"row"};
  justify-content:${props=>props.justi};
  align-self:center;
  @media only screen and (max-width:600px) {  
      flex-direction:column;
      min-height:105vh;
  }
`;
export const BoxSection = styled(Flex)`
  height:${props=>props.height};
  width: ${props=>props.width?props.width:"49%"};
  background-color: ${(props)=>props.bgColor?"#4096df":" #FFFFFF"};
  flex-direction:${props=>props.column?"column":"row"};
  @media only screen and (max-width:600px) {  
      width:99%;
  }
  
`;
export const Title = styled.h1`
  font-size: 2rem;
  color:${props=>props.color?props.color:"#ffffff"}; 
  text-align: left;
  line-height: 35px;
  @media only screen and (max-width:600px) {  
     font-size:20px;
  }
  
`;
export const Img = styled.img`
  width: 50%;
  height: 80%;
  @media only screen and (max-width:600px) {  
     width:90%;
  }
`;