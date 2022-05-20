import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BoxSection, MainContainer, Title } from "../../Global.style";
import { ALink, Li } from "./Uneversty.style";
import { Box } from "../Home/style";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const Uneversty = () => {
  const params = useParams();
  const [countryName, setCountryName] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchD = async () => {
      const fetchData = await fetch(
        `https://api.codetabs.com/v1/proxy/?quest=http://universities.hipolabs.com/search?&country=${params.id}`
      );
      const response = await fetchData.json();
      //   console.log(response);
      setCountryName(response);
      setLoading(false);
    };
    fetchD();
  }, []);
  console.log(countryName);
  return loading ? (
    ""
  ) : (
    <MainContainer column minH={"100vh"} style={{alignItems:"flex-start",padding:"2rem"}}>
      <Title style={{ fontSize: "2rem" }} color={"black"}>
        {params.id} Universities
      </Title>
      <BoxSection  width={"100%"} height={"100%"} style={{ flexWrap:"Wrap",justifyContent:"space-between",alignContent:"space-between" }}>
        {countryName.map((item) => {
          return (
            <Box medWidth={"95%"} key={item.name} width="30%"  style={{margin:"2rem 0"}} direction={"column"} >
              <Li style={{padding:"1rem"}}>
                  <AccountBalanceIcon/>
                 <ALink href={item.web_pages[0]} >
                <Title
                  style={{ fontSize: "1rem",textAlign:"center",width:"100%"}}
                  color={" black"}
                >
                  {item.name}
                </Title>
                </ALink>
              </Li>
            </Box>
          );
        })}
      </BoxSection>
    </MainContainer>
  );
};

export default Uneversty;
