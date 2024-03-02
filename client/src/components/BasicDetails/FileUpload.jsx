import React, { useState } from "react";
import {
  TextInput,
  Box,
  Textarea,
  Group,
  Button,
  NumberInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { validateString } from "../../utils/common";
import "./FileUpload.css";
import axios from "axios";


const FileUplaod = ({
  prevStep,
  nextStep,
  propertyDetails,
  setPropertyDetails,
}) => {
  const form = useForm({});
  const [landRecordSelectedFile, setLandRecordSelectedFile] = useState(null);
  const [landMapSelectedFile, setLandMapSelectedFile] = useState(null);
  const [titleDocSelectedFile, setTitleDocSelectedFile] = useState(null);
  const [titleClearSelectedFile, setTitleClearSelectedFile] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const [landRecordURL, setLandRecordURL] = useState(propertyDetails.landRecord);
  const [landMapURL, setLandMapURL] = useState(propertyDetails.landMap);
  const [titleDocURL, setTitleDocURL] = useState(propertyDetails.titleDoc);
  const [titleClearURL, setTitleClearURL] = useState(propertyDetails.titleClear);
  const [otherFileURL, setOtherFileURL] = useState(propertyDetails.otherFile);


  const { title, description, price } = form.values;

  const handleSubmit = () => {
    const { hasErrors } = form.validate();
    if (!hasErrors) {
      setPropertyDetails((prev) => ({ ...prev, landRecord: landRecordURL, landMap: landMapURL, titleDoc: titleDocURL, titleClear: titleClearURL, otherFile:  otherFileURL}));
      nextStep();
    }
  };

  const onFileChange = (event) => {
    if(event.target.id == 'land-record'){
      setLandRecordSelectedFile(event.target.files[0]);
    }
    else if(event.target.id == 'land-map'){
      setLandMapSelectedFile(event.target.files[0]);
    }
    else if(event.target.id == 'title-doc'){
      setTitleDocSelectedFile(event.target.files[0]);
    }
    else if(event.target.id == 'title-clear'){
      setTitleClearSelectedFile(event.target.files[0]);
    }
    else{
      setSelectedFile(event.target.files[0]);
    }
  };

  const onFileUpload = async (id1)=> {
        // Create an object of formData
    const date = new Date();
    const formData = new FormData();
    if(id1 == 'land-record-upload'){
      // Update the formData object
      formData.append(
        "landRecord",
        landRecordSelectedFile,
        landRecordSelectedFile.name
      );
      // Details of the uploaded file
      console.log(landRecordSelectedFile);
      const fname = "doc" + date.getTime() + "_" + landRecordSelectedFile.name;
      const url ="https://lksf2xxlv5.execute-api.ap-south-1.amazonaws.com/default/s3_uploadimages";
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
        body: landRecordSelectedFile,
        headers: {
          "Content-type": "application/binary",
        },
      });
      setLandRecordURL("https://farmlandconnectimages.s3.ap-south-1.amazonaws.com/" + fname);

    }
    else if(id1 == 'land-map-upload'){
      // Update the formData object
      formData.append(
        "landMap",
        landMapSelectedFile,
        landMapSelectedFile.name
      );
      // Details of the uploaded file
      console.log(landMapSelectedFile);
      const fname = "doc" + date.getTime() + "_" + landMapSelectedFile.name;
      const url ="https://lksf2xxlv5.execute-api.ap-south-1.amazonaws.com/default/s3_uploadimages";
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
        body: landMapSelectedFile,
        headers: {
          "Content-type": "application/binary",
        },
      });
      setLandMapURL("https://farmlandconnectimages.s3.ap-south-1.amazonaws.com/" + fname);


    }
    else if(id1 == 'title-doc-upload'){
      // Update the formData object
      formData.append(
        "titleDoc",
        titleDocSelectedFile,
        titleDocSelectedFile.name
      );
      // Details of the uploaded file
      console.log(titleDocSelectedFile);
      const fname = "doc" + date.getTime() + "_" + titleDocSelectedFile.name;
      const url ="https://lksf2xxlv5.execute-api.ap-south-1.amazonaws.com/default/s3_uploadimages";
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
        body: titleDocSelectedFile,
        headers: {
          "Content-type": "application/binary",
        },
      });
      setTitleDocURL("https://farmlandconnectimages.s3.ap-south-1.amazonaws.com/" + fname);
    }
    else if(id1 == 'title-clear-upload'){
      // Update the formData object
      formData.append(
        "titleClear",
        titleClearSelectedFile,
        titleClearSelectedFile.name
      );
      // Details of the uploaded file
      console.log(titleClearSelectedFile);
      const fname = "doc" + date.getTime() + "_" + titleClearSelectedFile.name;
      const url ="https://lksf2xxlv5.execute-api.ap-south-1.amazonaws.com/default/s3_uploadimages";
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
        body: titleClearSelectedFile,
        headers: {
          "Content-type": "application/binary",
        },
      });
      setTitleClearURL("https://farmlandconnectimages.s3.ap-south-1.amazonaws.com/" + fname);

    }
    else {
      // Update the formData object
      formData.append(
        "otherDoc",
        selectedFile,
        selectedFile.name
      );
      // Details of the uploaded file
      console.log(selectedFile);
      const fname = "doc" + date.getTime() + "_" + selectedFile.name;
      const url ="https://lksf2xxlv5.execute-api.ap-south-1.amazonaws.com/default/s3_uploadimages";
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
        body: selectedFile,
        headers: {
          "Content-type": "application/binary",
        },
      });
      setOtherFileURL("https://farmlandconnectimages.s3.ap-south-1.amazonaws.com/" + fname);
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
          <table width="100%" className="upload-table">
            <tr>
              <td>Land Record (7/12,8A) </td>

              <td>
                <label className="upload-label">
                  Select File
                  <input
                    type="file"
                    id = "land-record"
                    onChange={onFileChange}
                    style={{ display: "none" }}
                  />
                </label>
              </td>
              <td>
                {landRecordSelectedFile && (
                  <span style={{ marginLeft: "10px" }}>
                  {landRecordSelectedFile.name.slice(0, 10) + (landRecordSelectedFile.name.length > 10 ? '...' : '')}
                  </span>
                )}
              </td>
              <td align="right">
                {/* <input type="file" onChange={onFileChange}/> */}
                <Button onClick={() => onFileUpload('land-record-upload')} >Upload</Button>
              </td>
            </tr>

            <tr>
              <td>Land Map </td>

              <td>
                <label className="upload-label">
                  Select File
                  <input
                    id = "land-map"
                    type="file"
                    onChange={onFileChange}
                    style={{ display: "none" }}
                  />
                </label>
                </td>
              <td>
                {landMapSelectedFile && (
                  <span style={{ marginLeft: "10px" }}>
                  {landMapSelectedFile.name.slice(0, 10) + (landMapSelectedFile.name.length > 10 ? '...' : '')}
                    {/* {landMapSelectedFile.name} */}
                  </span>
                )}
              </td>
              <td align="right">
                {/* <input type="file" onChange={onFileChange}/> */}
                <Button onClick={() => onFileUpload('land-map-upload')}>Upload</Button>
              </td>
            </tr>


            <tr>
              <td>Title Document (Sale deed, Gift deed, Legal heir, Will) </td>

              <td>
                <label className="upload-label">
                  Select File
                  <input
                    id = "title-doc"
                    type="file"
                    onChange={onFileChange}
                    style={{ display: "none" }}
                  />
                </label>
                </td>
              <td>
                {titleDocSelectedFile && (
                  <span style={{ marginLeft: "10px" }}>
                  {titleDocSelectedFile.name.slice(0, 10) + (titleDocSelectedFile.name.length > 10 ? '...' : '')}
                  </span>
                )}
              </td>
              <td align="right">
                {/* <input type="file" onChange={onFileChange}/> */}
                <Button onClick={() => onFileUpload('title-doc-upload')}>Upload</Button>
              </td>
            </tr>

            <tr>
              <td>Title Clear Declaration </td>

              <td>
                <label className="upload-label">
                  Select File
                  <input
                    id = "title-clear"
                    type="file"
                    onChange={onFileChange}
                    style={{ display: "none" }}
                  />
                </label>
                </td>
              <td>
                {titleClearSelectedFile && (
                  <span style={{ marginLeft: "10px" }}>
                  {titleClearSelectedFile.name.slice(0, 10) + (titleClearSelectedFile.name.length > 10 ? '...' : '')}
                  </span>
                )}
              </td>
              <td align="right">
                {/* <input type="file" onChange={onFileChange}/> */}
                <Button onClick={() => onFileUpload('title-clear-upload')}>Upload</Button>
              </td>
            </tr>

            <tr>
              <td>Other Documents (Soil/Water Quality Report) </td>

              <td>
                <label className="upload-label">
                  Select File
                  <input
                    type="file"
                    id = "other-doc"
                    onChange={onFileChange}
                    style={{ display: "none" }}
                  />
                </label>
                </td>
              <td>
                {selectedFile && (
                  <span style={{ marginLeft: "10px" }}>
                  {selectedFile.name.slice(0, 10) + (selectedFile.name.length > 10 ? '...' : '')}
                  </span>
                )}
              </td>
              <td align="right">
                {/* <input type="file" onChange={onFileChange}/> */}
                <Button onClick={() => onFileUpload('other-doc-upload')}>Upload</Button>
              </td>
            </tr>

          </table>
        </div>

        <Group position="center" mt="xl">
          <Button variant="default" onClick={prevStep}>
            Back
          </Button>
          <Button type="submit">Next</Button>
        </Group>
      </form>
    </div>
  );
};

export default FileUplaod;
