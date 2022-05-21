import {   Box, ButtonLink } from "../Home/style";
import { Title,MainContainer ,BoxSection,Img } from "../../Global.style";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Imag, Li } from "./CountreyInformation.style";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PublicIcon from '@mui/icons-material/Public';
import MoneyIcon from '@mui/icons-material/Money';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
const CountreyInformation = () => {
    const params = useParams();
    const [countryName, setCountryName] = useState();
    const [loading, setLoading] = useState(true);
    const [imageSrc,setImageSrc] =useState()
    useEffect(() => {
    const fetchD = async () => {
      const fetchData = await fetch(`https://restcountries.com/v3.1/name/${params.id}`);
      const response = await fetchData.json();
    console.log(response )
        setCountryName(response);
    };
    fetchD();
}, []);
useEffect(() => {
    const fetchD = async () => {
        const fetchData = await fetch(`https://api.codetabs.com/v1/proxy/?quest=https://imsea.herokuapp.com/api/1?q=${params.id}`);
        const response = await fetchData.json();
            setImageSrc(response);
            setLoading(false);
    };
    fetchD();
  }, []);
  console.log( imageSrc )
  return (
  loading?"":
        <MainContainer justi={"space-around"}>
      <Imag src={imageSrc.results[2]} alt={imageSrc.image_name} />

      <BoxSection column width={"40%"}  height={"90%"}  >
        <Box width="100%" height="80%"  direction={"column"} style={{alignItems:"flex-start"}}>
          <Title style={{fontSize:"3rem"}} color={"black"}>{params.id}</Title>
            <Li><AccessTimeFilledIcon /> <Title style={{fontSize:"1.5rem",paddingLeft:"1.3rem"}} color={" #0d161d"}>{countryName[0].timezones}</Title></Li>
            <Li><MoneyIcon /> <Title style={{fontSize:"1.5rem",paddingLeft:"1.3rem"}} color={"#0d161d"}>{countryName[0].fifa}</Title></Li>
            <Li><LocalPhoneIcon /> <Title style={{fontSize:"1.5rem",paddingLeft:"1.3rem"}} color={"#0d161d"}>{countryName[0].idd.root}</Title></Li>
            <Li><PublicIcon /> <Title style={{fontSize:"1.5rem",paddingLeft:"1.3rem"}} color={"#0d161d"}>{countryName[0].region}</Title></Li>
          <ButtonLink to={`/university/country/${params.id}`}>Show University List</ButtonLink>
        </Box>
      </BoxSection>
    </MainContainer>
  );
    
}

export default CountreyInformation;
