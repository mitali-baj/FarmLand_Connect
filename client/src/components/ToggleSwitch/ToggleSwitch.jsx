import React, {useState} from "react";
import "./ToggleSwitch.css";
import { Box, Textarea, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";
import AddLocation from "../AddLocation/AddLocation";

 
const ToggleSwitch = ({ label }) => {

  const form = useForm({
    initialValues: {
      //no_of_owners: no_of_owners,
    },

    validate: {
      no_of_owners: (value) =>
          value < 1 ? "Must be greater than 1" : null,
    },
  });
  const [state1, setState1] = useState(false);
  const [toggle, setToggle] = useState(false);

  const handleToggleClick = () => {
    setState1(!state1);
    setToggle(!state1);
  };
  
  return (
    <div className="container">
      {label}{" "}
      <div className="toggle-switch" >      
        <input type="checkbox" className="checkbox"
               name={label} id={label} onClick={() => handleToggleClick()} />
        <label className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
      {toggle && (
        <NumberInput
          label="Number of Owners"
          placeholder="2"
          w={"100%"}
          {...form.getInputProps("no_of_owners", {type: "input" })}
        />
      )}
    </div>
  );
};
 
export default ToggleSwitch;


