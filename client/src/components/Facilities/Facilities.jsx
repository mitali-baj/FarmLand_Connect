import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Group, NumberInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useContext } from "react";
import UserDetailContext from "../../context/UserDetailContext";
import useProperties from "../../hooks/useProperties.jsx";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { createResidency } from "../../utils/api";
const Facilities = ({
  prevStep,
  propertyDetails,
  setPropertyDetails,
  setOpened,
  setActiveStep,
}) => {
  const form = useForm({
  });

  

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({
        ...prev,

      }));
      propertyDetails.id = Math.random();
      //console.log(propertyDetails);
      fetch('https://tr2v9am23h.execute-api.ap-south-1.amazonaws.com/dev/listings', {
         method: 'POST',
         body: JSON.stringify(propertyDetails),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
         .then((res) => res.json())
         .then((post) => {
            //setPosts((posts) => [post, ...posts]);
            //setTitle('');
            //setBody('');
            console.log("Property posted successfully");
         })
         .catch((err) => {
            console.log(err.message);
         });
      mutate();
    }
  };

  // ==================== upload logic
  const { user } = useAuth0();
  const {
    userDetails: { token },
  } = useContext(UserDetailContext);
  const { refetch: refetchProperties } = useProperties();
  

  /****
   * 
   // set the id as uuid
   // call API https://tr2v9am23h.execute-api.ap-south-1.amazonaws.com/dev/listings
   // use POST method.
*/
   



   
  const {mutate, isLoading} = useMutation({
    
    mutationFn: ()=> createResidency({
      
        ...propertyDetails,
    }, token),
    onError: ({ response }) => toast.error(response.data.message, {position: "bottom-right"}),
    onSettled: ()=> {
      toast.success("Added Successfully", {position: "bottom-right"});
      setPropertyDetails({
        title: "",
        description: "",
        price: 0,
        country: "",
        address: "",
        image: null,
        userEmail: user?.email,
      })
      setOpened(false)
      setActiveStep(0)
      refetchProperties()
    }

  })

  return (
    <Box maw="30%" mx="auto" my="sm">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        
        <Group position="center" mt="xl">
        <div>Finish listing your FarmLand!</div>
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit" color="green" disabled={isLoading}>
            {isLoading ? "Submitting" : "Add FarmLand"}
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default Facilities;
