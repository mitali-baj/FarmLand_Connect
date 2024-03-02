import React, { useEffect, useRef, useState } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import "./UploadImage.css";
import { Button, Group } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "@mantine/form";
import "../BasicDetails/FileUpload.css";
import axios from "axios";
import "react-dropzone-uploader/dist/styles.css";
import Dropzone from "react-dropzone-uploader";

const UploadImage = ({
  propertyDetails,
  setPropertyDetails,
  nextStep,
  prevStep,
}) => {
  const form = useForm({});
  const [landImageSelectedFile, setLandImageSelectedFile] = useState(null);
  const [imageURL, setImageURL] = useState(propertyDetails.image);
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  const handleNext = () => {
    setPropertyDetails((prev) => ({ ...prev, image: imageURL }));
    nextStep();
  };
  // ----------------------------------------------------------------------
  // const date = new Date();
  //    const fname = "img_"+date.getTime();
  //    const url = 'https://lksf2xxlv5.execute-api.ap-south-1.amazonaws.com/default/s3_uploadimages';
  //    const imgurl = url+"?fname="+fname;
  // const API_ENDPOINT = imgurl
  // const handleChangeStatus = ({ meta, remove }, status) => {
  //   console.log(status, meta);
  // };

  // const handleSubmit = async (files) => {
  //   const f = files[0];

  //   // GET request: presigned URL
  //   const response = await axios({
  //     method: "GET",
  //     url: API_ENDPOINT,
  //   });

  //   // PUT request: upload file to S3
  //   const result = await fetch(response.data.uploadURL, {
  //     method: "PUT",
  //     body: f["file"],
  //   });
  //   setImageURL("https://farmlandconnectimages.s3.ap-south-1.amazonaws.com/img_1709294440058"+fname);

  // };

  // ------------------------------------------------------------------------

  const onFileChange = (event) => {
    if (event.target.id == "land-image") {
      setLandImageSelectedFile(event.target.files[0]);
    }
  };

  const onFileUpload = async (id1) => {
    // Create an object of formData
    const formData = new FormData();
    if (id1 == "land-image-upload") {
      // Update the formData object
      formData.append(
        "landImage",
        landImageSelectedFile,
        "name",
        landImageSelectedFile.name
      );
      // Details of the uploaded file
      //console.log(landImageSelectedFile);
    }
    console.log("formdata:", formData);
    // constrctut a unique filename
    const date = new Date();
    const fname = "img" + date.getTime() + "_" + landImageSelectedFile.name;
    const url =
      "https://lksf2xxlv5.execute-api.ap-south-1.amazonaws.com/default/s3_uploadimages";
    const imgurl = url + "?fname=" + fname;
    //const [image_signed_url, setImage_signed_url] = useState(" ");
    //const fetch_url =
    const image_signed_url = await axios({
      method: "GET",
      url: imgurl,
    });

    console.log(image_signed_url);
    await fetch(image_signed_url.data.uploadURL, {
      method: "PUT",
      body: landImageSelectedFile,
      headers: {
        "Content-type": "image/jpeg",
      },
    });
    setImageURL(
      "https://farmlandconnectimages.s3.ap-south-1.amazonaws.com/" + fname
    );
  };

  return (
    <div className="flexColCenter uploadWrapper">
      <table width="100%" className="upload-table">
        <tr>
          <td>Upload image </td>

          <td>
            <label className="upload-label">
              Select File
              <input
                type="file"
                id="land-image"
                onChange={onFileChange}
                style={{ display: "none" }}
              />
            </label>
          </td>
          <td>
            {landImageSelectedFile && (
              <span style={{ marginLeft: "10px" }}>
                {landImageSelectedFile.name.slice(0, 10) +
                  (landImageSelectedFile.name.length > 10 ? "..." : "")}
              </span>
            )}
          </td>
          <td align="right">
            {/* <input type="file" onChange={onFileChange}/> */}
            <Button onClick={() => onFileUpload("land-image-upload")}>
              Upload
            </Button>
          </td>
        </tr>
      </table>

      {/* <Dropzone
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      maxFiles={1}
      multiple={false}
      canCancel={false}
      inputContent="Drop A File"
      styles={{
        dropzone: { width: 400, height: 200 },
        dropzoneActive: { borderColor: "green" },
      }}
    /> */}

      <Group position="center" mt={"xl"}>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!imageURL}>
          Next
        </Button>
      </Group>
    </div>
  );
};
{
  /* <UploadImage />; */
}

export default UploadImage;
