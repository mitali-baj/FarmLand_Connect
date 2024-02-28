import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import {PuffLoader} from 'react-spinners'
import { getAllProperties } from "../../utils/api";

const Residencies = () => {
  // const [item, setItem] = useState();
  // useEffect(() => {
  //   fetch('https://ak8n1qfyf9.execute-api.ap-south-1.amazonaws.com/dev/listings')
  //       .then((res) => res.json())
  //       .then((data1) => {

  //         setItem(data1);
          
  //       })
  //       .catch((err) => {
  //         console.log(err.message);
  //       });

  // }, []);
  //console.log('this is data1', item);
  const [item, setItem] = useState([]);

  async function fetchData() {
    const data = await getAllProperties();
    //console.log('dataaaaa',data);
    setItem(data);
  }

  fetchData();
  const { isLoading, isError } = useState();

  //const {data, isError, isLoading} = useProperties()

  if(isError){
    return(
      <div className='wrapper'>
        <span>Error while fetching data</span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader
        height="80"
        width="80"
        radius={1}
        color="#4066ff"
        aria-label="puff-loading"
        />
      </div>
    )
  }
//console.log('item.slice',item);

  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular FarmLands</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {/* slider */}
          {item.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
