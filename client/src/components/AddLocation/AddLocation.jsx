import React, { useState } from "react";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";
import { Button, Group, Select, TextInput } from "@mantine/core";
import useCountries from "../../hooks/useCountries";
// import useStates from "../../hooks/useStates";
import Map from "../Map/Map";
import GMap from "../GMap/GMap";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Box, Textarea, NumberInput } from "@mantine/core";
import statesList from "./states-and-districts";




const AddLocation = ({ propertyDetails, setPropertyDetails, nextStep, addLocationToModal }) => {



  const { getAll } = useCountries();


//const stateSelect = document.getElementById("state");
//const districtSelect = document.getElementById("district");

// const [state1, setState1] = useState(null);
// const [district1, setDistrict1] = useState(null);
// const [distList, setDistList] = useState([]);
// // handle change event of the state dropdown
// const handleStateChange = (obj) => {
//   setState1(obj);
//   setDistList(obj.languages);
//   setDistrict1(null);
// };

// // handle change event of the district dropdown
// const handleDistrictChange = (obj) => {
//   setDistrict1(obj);
// };



// // Populate districts based on selected state
// function populateDistricts(stateId) {
//   // Clear previous options
//   const selectedState = statesList.states.find(state => state.state == stateId);
//   districtSelect.innerHTML = "<option value=''>--Select District--</option>";

//   if (selectedState) {
//     selectedState.districts.forEach(district => {
//       const option = document.createElement('option');
//       option.text = district;
//       districtSelect.add(option);
//     });
//   }
// }
//https://raw.githubusercontent.com/sab99r/Indian-States-And-Districts/master/states-and-districts.json
// Fetch states from the API
// fetch("../AddLocation/states-and-districts.json")
//   .then(response => response.json())
//   .then(data => {
    
//   });


// function populateStates(){
//   const states = statesList.states ;//data.states;
//     states.forEach(state => {
//     //console.log(state)
//     const option = document.createElement("option");
//     option.text = state.state;
//    // option.id = state.state;
//     option.value = state.state;
//    //if( document.getElementById(state.state) == false ){
//     //console.log(option.value)
//     stateSelect.add(option);
//     //}
    
//   });
// }

// document.addEventListener("DOMContentLoaded", populateStates);


//  // Event listener for when the state selection changes
//   stateSelect.addEventListener('change', (event) => {
//     const selectedState = event.target.value;
//    populateDistricts(selectedState);
//   });


  
  const form = useForm({
    

    initialValues: {
      country: propertyDetails?.country,
      state: propertyDetails?.state,
      district: propertyDetails?.district,
      tehsil: propertyDetails?.tehsil,
      village: propertyDetails?.village,
      address: propertyDetails?.address,
      nearby_locations: propertyDetails?.nearby_locations,
      title: propertyDetails?.title,
      owner_name: propertyDetails?.owner_name,
      khata_no: propertyDetails?.khata_no,
      survey_no: propertyDetails?.survey_no,
      description: propertyDetails?.description,
      price: propertyDetails?.price,
      crops: propertyDetails?.crops,
      irrigation: propertyDetails?.irrigation,
      no_of_owners: propertyDetails?.no_of_owners,
      
    },

    validate: {
      country: (value) => validateString(value),
      state: (value) => validateString(value),
      address: (value) => validateString(value),
      district: (value) => validateString(value),
      tehsil: (value) => validateString(value),
      village: (value) => validateString(value),
      title: (value) => validateString(value),
      nearby_locations: (value) => validateString(value),
      owner_name: (value) => validateString(value),
      khata_no: (value) => validateString(value),
      survey_no: (value) => validateString(value),
      description: (value) => validateString(value),
      area: (value) =>
        value < 1 ? "Must be greater than 1" : null,
      price: (value) =>
        value < 1 ? "Must be greater than 1" : null,
      crops: (value) => validateString(value),
      irrigation: (value) => validateString(value),
      no_of_owners: (value) =>
        value < 1 ? "Must be greater than 1" : null,
    },
  });


  const { state, address, country, title, district, tehsil, village, nearby_locations, owner_name, khata_no, survey_no, description, area, price, crops, irrigation, no_of_owners } = form.values;


  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, state, address, country, title, district, tehsil, village, nearby_locations, owner_name, khata_no, survey_no, description, area, price, crops, irrigation, no_of_owners }))
      nextStep()
    }
  }

  const getInitialState = () => {
    const value = "Orange";
    return value;
  };

  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit()
      }}
    >


      <div
        className="flexCenter"
        style={{
          justifyContent: "space-between",
          gap: "3rem",
          marginTop: "3rem",
          flexDirection: "row",
        }}
      >
        {/* left side */}
        {/* inputs */}

        <div className="flexColStart" style={{ flex: 1, gap: "1rem" }}>

        {/* <Select
          placeholder="Select State"
          value={state1}
          options={statesList}
          onChange={handleStateChange}
          getOptionLabel={x => x.state}
          getOptionValue={x => x.state}
        />
        
        <Select
          placeholder="Select District"
          value={district1}
          options={distList}
          onChange={handleDistrictChange}
          getOptionLabel={x => x.districts}
          getOptionValue={x => x.districts}
        /> */}

        {/* <label for="state">State:</label>
        <select id="state" onChange="populateDistricts(this.value)">
          <option value="">--Select State--</option>
        </select>

        <label for="district">District:</label>
        <select id="district">
          <option value="">--Select District--</option>
        </select> */}


          <TextInput
            w={"100%"}
            withAsterisk
            label="Listing Title"
            {...form.getInputProps("title", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Owner name"
            {...form.getInputProps("owner_name", { type: "input" })}
          />

          <ToggleSwitch  w={"100%"} label="Joint Holding" />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Khata Number"
            {...form.getInputProps("khata_no", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Survey number/Plot number"
            {...form.getInputProps("survey_no", { type: "input" })}
          />

          <Select
            w={"100%"}
            withAsterisk
            label="Country"
            clearable
            searchable
            data={getAll()}
            {...form.getInputProps("country", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="State"
            {...form.getInputProps("state", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="District"
            {...form.getInputProps("district", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Tehsil"
            {...form.getInputProps("tehsil", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Village"
            {...form.getInputProps("village", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Address"
            {...form.getInputProps("address", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Nearby Locations"
            {...form.getInputProps("nearby_locations", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Description"
            {...form.getInputProps("description", { type: "input" })}
          />

          <NumberInput
            withAsterisk
            label="Area (acres)"
            placeholder="acres"
            precision={3} 
            min={0}
            {...form.getInputProps("area", { type: "input" })}
          />

          <NumberInput
            withAsterisk
            label="Price"
            placeholder="Rs."
            min={0}
            {...form.getInputProps("price", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Crops"
            {...form.getInputProps("crops", { type: "input" })}
          />

          <TextInput
            w={"100%"}
            withAsterisk
            label="Irrigation"
            {...form.getInputProps("irrigation", { type: "input" })}
          />

        </div>

        {/* right side */}

        <div style={{ flex: 1 }}>
          {/* <Map address={address} state={state} country={country} /> */}
          {/* <Map address={address} village={village} tehsil={tehsil} district={district} state={state} country={country} /> */}
          {/* <GMap address={address} village={village} tehsil={tehsil} district={district} state={state} country={country}/>         */}
        </div>
      </div>

      <Group position="center" mt={"xl"}>
        <Button type="submit" onClick={() => addLocationToModal(address)}>Next Step</Button>
      </Group>
    </form>
  );



};

export default AddLocation;

