import Images from "../../Asset";
import { Para,  Box, ButtonLink } from "./style";
import { Title,MainContainer ,BoxSection,Img } from "../../Global.style";
const Home = () => {
  return (
    <MainContainer>
      <Img src={Images.HomeImg} alt={"img"} />

      <BoxSection column height={"100%"} bgColor={true}>
        <Box width="60%" height="30%" direction={"column"}>
          <Title>YOUR JOURNEY TO UNI STARTS HERE</Title>
          <Para>
            We help you find universities worldwide with some general
            information about the country you are looking for
          </Para>
          <ButtonLink to={"/search"}>Lets GO</ButtonLink>
        </Box>
      </BoxSection>
    </MainContainer>
  );
};

export default Home;
