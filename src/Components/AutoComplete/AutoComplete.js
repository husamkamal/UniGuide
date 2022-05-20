import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";
import { Button } from "./AutoComplete.style";

export default function ControllableStates(props) {
  const options = props.country;
  const [value, setValue] = React.useState();
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div>
      {props.setSearchValue(value)}
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Country Search" />}
      />
     { value? <Button to={`/countreyinformation/name/${value}`}>Go To Country Information</Button> :""}
    </div>
  );
}
