import { useEffect, useRef, useState, useCallback, Fragment } from "react";
import ControllableStates from "../AutoComplete/AutoComplete";

export default function SearchAppBar() {
  const [countryName, setCountryName] = useState();
  const [searchValue, setSearchValue] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchD = async () => {
      const fetchData = await fetch("https://restcountries.com/v3.1/all");
      const response = await fetchData.json();
      const cuntryArr = response.map((item) => {
        return item.name.common;
      });
      setCountryName(cuntryArr);
      setLoading(false);
    };
    fetchD();
  }, []);
  return (
    <Fragment>
      {loading ? (
        ""
      ) : (
        <ControllableStates
          setSearchValue={setSearchValue}
          country={countryName}
        />
      )}
    </Fragment>
  );
}
