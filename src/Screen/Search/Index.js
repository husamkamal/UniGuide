import { Fragment } from "react";
import NavBar from "../../Components/Navbar/NavBar";
import SearchInput from "../../Components/SearchInput/SearchInput";
import { BoxSection, Img, MainContainer, Title } from "../../Global.style";
import Images from "../../Asset";
import { Box } from "../Home/style";
import { BackgroundImage } from "./style";
import { Link } from "react-router-dom";
const Search = () => {
    return (
        <Fragment>
            <MainContainer>
                <BoxSection column height={"70%"}>
                    <SearchInput  />
                    <Img src={Images.SearchImg}/>
                </BoxSection>
                <BoxSection  column height={"70%"}>
                    <Title style={{width:"100%"}} color="black">Most popular</Title>
                    <Box height="70%" width="100%" direction={"row"} warp={"wrap"}>
                        <Link to={`/countreyinformation/name/Egypt`} style={{height:"48%",width:"48%",borderRadius: "20px",textDecoration:"none"}}>
                        <BackgroundImage bgImg={Images.Egypt}><Title>Egypt</Title></BackgroundImage></Link>
                        <Link to={`/countreyinformation/name/Turkey`} style={{height:"48%",width:"48%",borderRadius: "20px",textDecoration:"none"}}>
                        <BackgroundImage bgImg={Images.Tyrky}><Title>Turkey</Title></BackgroundImage></Link>
                        <Link to={`/countreyinformation/name/Italy`} style={{height:"48%",width:"48%",borderRadius: "20px",textDecoration:"none"}}>
                        <BackgroundImage bgImg={Images.Italy}><Title>Italy</Title></BackgroundImage></Link>
                        <Link to={`/countreyinformation/name/Spain`} style={{height:"48%",width:"48%",borderRadius: "20px",textDecoration:"none"}}>
                        <BackgroundImage bgImg={Images.Span}><Title>Spain</Title></BackgroundImage></Link>
                    </Box>
                </BoxSection>
            </MainContainer>
        </Fragment>
    );
}

export default Search;
