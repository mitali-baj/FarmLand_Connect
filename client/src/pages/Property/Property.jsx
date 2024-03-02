import React, { useContext, useState, useEffect } from "react";

import Modal from "react-modal";

import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty, removeBooking } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import "./Property.css";
import Tabs from "./Tabs";
import { FaRuler, FaRupeeSign } from "react-icons/fa";
// import { AiT } from "react-icons/ai";
import { MdLocationPin, MdMeetingRoom } from "react-icons/md";
import PropertyMap from "../../components/PropertyMap/PropertyMap";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModal from "../../components/BookingModal/BookingModal";
import UserDetailContext from "../../context/UserDetailContext.js";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import Heart from "../../components/Heart/Heart";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");



const Property = () => {
  

  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  console.log('id',id);

  // const { data, isLoading, isError } = useQuery(["resd", id], () =>
  //   getProperty(id)
  // );
  // const  [item, setItem]  = useState();
  // useEffect(() => {
  // setItem(getProperty(id));
  
  // }, []);
  const [item, setItem] = useState(null);

useEffect(() => {
  async function fetchData() {
    const data = await getProperty(id);
    setItem(data);
    // const url = 'https://ak8n1qfyf9.execute-api.ap-south-1.amazonaws.com/dev/listing/'+id.toString();

    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data1) => {

    //       setItem(data1);
    //       console.log("++++++data1+++",data1[0]);
    //       //
    //     })
    //     .catch((err) => {
    //       console.log(err.message);
    //     });

  }

  fetchData();

  

}, [id]);
  console.log('coordinates_abcd:',item?.landRecord);
  const { isLoading, isError } = useState();
  const [modalOpened, setModalOpened] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [documentModalIsOpen, setDocumentModalIsOpen] = useState(false);


  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));

      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

  const openDocumentModal = (document) => {
    setSelectedDocument(document);
    setDocumentModalIsOpen(true);
  };

  const closeDocumentModal = () => {
    setDocumentModalIsOpen(false);
  };
  // const [item, setItem] = useState();
  // useEffect(() => {
  //   fetch('https://ak8n1qfyf9.execute-api.ap-south-1.amazonaws.com/dev/listings')
  //       .then((res) => res.json())
  //       .then((data1) => {

  //         setItem(data1.find((item) => item.id === 0.11320770670590363));
          
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });
  // }, []);
  // const [propertyBoundary, setPropertyBoundary] = useState(null);
  // useEffect(() => {
  //   if (data?.facilities) {
  //     setPropertyBoundary(data?.facilities);
  //     console.log('propertyBoundary:', propertyBoundary);
  //   }
  // }, [data]);

console.log('item',item);
  const tabsContent = [
    {
      label: "Overview",
      content: (
        <div>
          <div className="overview-table">
          <div style={{ overflowX: "auto", width: "100%" }}>
            <table style={{ borderCollapse: "collapse", borderSpacing: "0", width: "140%" }}>

              <thead>
                <tr>
                  <th style={{ width: "15%" }}>Listing Title</th>
                  <th style={{ width: "15%" }}>Owner name</th>
                  <th style={{ width: "10%" }}>Khata Number</th>
                  <th style={{ width: "10%" }}>Survey Number/ Plot Number</th>
                  <th style={{ width: "10%" }}>Country</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item?.title}</td>
                  <td>{item?.owner_name}</td>
                  <td>{item?.khata_no}</td>
                  <td>{item?.survey_no}</td>
                  <td>{item?.country}</td>
                </tr>
              </tbody>
              
              <thead>
                <tr>
                <th style={{ width: "20%" }}>State</th>
                  <th style={{ width: "10%" }}>District</th>
                  <th style={{ width: "10%" }}>Tehsil</th>
                  <th style={{ width: "10%" }}>Village</th>
                  <th style={{ width: "10%" }}>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item?.state}</td>
                  <td>{item?.district}</td>
                  <td>{item?.tehsil}</td>
                  <td>{item?.village}</td>
                  <td>{item?.address}</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                <th style={{ width: "10%" }}>Nearby Locations</th>
                  <th style={{ width: "10%" }}>Area (in acres)</th>
                  <th style={{ width: "10%" }}>Price</th>
                  <th style={{ width: "10%" }}>Crops</th>
                  <th style={{ width: "10%" }}>Irrigation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{item?.nearby_locations}</td>
                  <td>{item?.area}</td>
                  <td>{item?.price}</td>
                  <td>{item?.crops}</td>
                  <td>{item?.irrigation}</td>
                </tr>
              </tbody>
            </table>
            </div>
            <style jsx>{`
              .overview-table {
                width: 100%;
                border-collapse: collapse;
              }
              .overview-table th,
              .overview-table td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
              }
              .overview-table th {
                background-color: #f2f2f2;
              }
            `}</style>
          </div>
        </div>
      ),
    },
    {
      label: "Documents",
      content: (
        <div>
          <div className="documents-table">
            <table style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr>
                  <th style={{ width: "15%", padding: "12px" }}>Sr. No.</th>
                  <th style={{ width: "50%", padding: "12px" }}>Document</th>
                  <th style={{ width: "35%", padding: "12px" }}>View</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: "8px" }}>1</td>
                  <td style={{ padding: "8px" }}>Land Record (7/12,8A)</td>
                  <td style={{ padding: "8px" }}>
                    <button className="view-button" onClick={() => openDocumentModal({ src: item?.landRecord, type: "application/binary" })}>Download Document</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>2</td>
                  <td style={{ padding: "8px" }}>Land Map</td>
                  <td style={{ padding: "8px" }}>
                    <button className="view-button" onClick={() => openDocumentModal({ src: item?.landMap, type: "application/binary" })}>Download Document</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>3</td>
                  <td style={{ padding: "8px" }}>Title Document (Sale deed, Gift deed, Legal heir, Will)</td>
                  <td style={{ padding: "8px" }}>
                    <button className="view-button" onClick={() => openDocumentModal({ src: item?.titleDoc, type: "application/binary" })}>Download Document</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>4</td>
                  <td style={{ padding: "8px" }}>Title Clear Declarartion</td>
                  <td style={{ padding: "8px" }}>
                    <button className="view-button" onClick={() => openDocumentModal({ src: item?.titleClear, type: "application/binary" })}>Download Document</button>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px" }}>5</td>
                  <td style={{ padding: "8px" }}>Other Documents (Soil/Water Quality Report)</td>
                  <td style={{ padding: "8px" }}>
                    <button className="view-button" onClick={() => openDocumentModal({ src: item?.otherFile, type: "application/binary" })}>Download Document</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <style jsx>{`
              .documents-table {
                width: 100%;
                border-collapse: collapse;
              }
              .documents-table th,
              .documents-table td {
                border: 1px solid #ddd;
              }
              .documents-table th {
                background-color: #f2f2f2;
                font-weight: bold;
              }
              .view-button {
                background-color: #60b8f3;
                color: white;
                padding: 5px 10px;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                font-size: 14px;
              }
              .modal-close-button {
                background-color: #60b8f3;
                color: white;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                font-size: 16px;
                position: absolute;
                top: 10px;
                right: 10px;
              }
            `}</style>
          </div>
        </div>
      ),
    },
    {
      label: "View on Map",
      content: (
        <div style={{ position: "relative", width: "300%", height: "100vh", overflow: "hidden", marginTop: "20px" }}>
          <div className="PropertyMap">
          <PropertyMap
            coordinates={item?.arrLatLngs}
          />
          </div>
          <style jsx>{`
              .PropertyMap {
                width: 100%;
                border-collapse: collapse;
              }
              
              .modal-close-button {
                background-color: #60b8f3;
                color: white;
                padding: 10px 20px;
                border: none;
                cursor: pointer;
                border-radius: 5px;
                font-size: 16px;
                position: absolute;
                top: 10px;
                right: 10px;
              }
            `}</style>
        </div>
      ),
    },
    // Add more tabs as needed
  ];

  useEffect(() => {
    setActiveTab(0);
  }, []);


  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span>Error while fetching the property details</span>
        </div>
      </div>
    );
  }
  //console.log("image url",JSON.stringify(item));

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          {/* <Heart id={id} /> */}
        </div>

        {/* image */}
        <img src={item?.image} alt="home image" />

        <div className="flexCenter property-details">
          {/* left */}
          <div className="flexColStart left">
            {/* head */}
            {/* <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                $ {data?.price}
              </span>
            </div> */}

            {/* facilities */}
            <div className="flexStart facilities">
              {/* price */}
              <div className="flexStart facility">
                <FaRupeeSign size={20} color="#1F3E72" />
                <span>{item?.price}  </span>
              </div>

              {/* area */}
              <div className="flexStart facility">
                <FaRuler size={20} color="#1F3E72" />
                <span>{item?.area} Acre/s</span>
              </div>


              {/* location name */}
              <div className="flexStart facility">
                <MdLocationPin size={20} color="#1F3E72" />
                <span>{item?.address} </span>
              </div>
            </div>

            {/* description */}

            <span className="secondaryText" style={{ textAlign: "justify" }}>
              Description: {item?.description}
            </span>

            {/* address */}

            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {item?.address}{", "}
                {item?.village}{", "}
                {item?.tehsil}{", "}
                {item?.district}{", "}
                {item?.state}{", "}
                {item?.country}
              </span>
            </div>

            <div className="button-container">
              {/* lawyer services button */}
              <div className="lawyer-services">
                <button className="button" w={"100%"} onClick={() => window.open('https://www.example.com/lawyer-services', '_blank')}>
                  Lawyer Services
                </button>
              </div>

              {/* soil and water quality button */}
              <div className="soil-water">
                <button className="button" w={"100%"} onClick={() => window.open('https://www.example.com/soil-water', '_blank')}>
                  Soil and Water Quality Testing
                </button>
              </div>

              {/* possession */}
              <div className="possession">
                <button className="button" w={"100%"} onClick={() => window.open('https://www.example.com/possession', '_blank')}>
                  Check physical possession of land
                </button>
              </div>

              {/* agronomist */}
              <div className="agronomist">
                <button className="button" w={"100%"} onClick={() => window.open('https://www.example.com/agronomist', '_blank')}>
                  Connect with an agronomist
                </button>
              </div>
            </div>
            {/* Add Tabs component */}
            <div className="property-tabs">
            <Tabs>
              {tabsContent.map((tab, index) => (
                <div key={index} label={tab.label}>
                  {tab.content}
                </div>
              ))}
            </Tabs>
            </div>

            <Modal
              isOpen={documentModalIsOpen}
              onRequestClose={closeDocumentModal}
              style={customStyles}
              contentLabel="Document Viewer"
            >
              {selectedDocument && (
                <>
                  {selectedDocument.type === "image" ? (
                    <img src={selectedDocument.src} alt="Document" />
                  ) : (
                    <embed
                      src={selectedDocument.src}
                      type="application/pdf"
                      width="100%"
                      height="80vh"
                    />
                  )}
                  <button className="modal-close-button" onClick={closeDocumentModal}>
                    Close
                  </button>
                </>
              )}
            </Modal>




            {/* booking button */}
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  variant="outline"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  <span>Cancel booking</span>
                </Button>
                <span>
                  Your visit already booked for date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModalOpened(true);
                }}
              >
                Book your visit
              </button>
            ) 


            }

            <BookingModal
              opened={modalOpened}
              setOpened={setModalOpened}
              propertyId={id}
              email={user?.email}
            />

            {/* <div className="lawyer-services">
                <button className="button" w={"100%"}>
                  Book your visit
                </button>
              </div> */}
          </div>
            
          {/* right side */}

        </div>
      </div>
    </div>
  );
};

export default Property;