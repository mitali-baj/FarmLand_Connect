import {React, useState} from "react";
import './PropertyCard.css'
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash'
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
import Property from "../../pages/Property/Property";
const PropertyCard = ({card}) => {
//console.log('card.id = ',card.id);
  const navigate = useNavigate();
  const [sendId, setId] = useState();
  return (
    <div className="flexColStart r-card"
    //onClick={()=>navigate(`../properties/`)}
    // onClick={() => {
    //   setId(card.id)
    //   navigate("property")}}
    //onClick={()=>navigate(`../properties/${card.id.toString()}`)}
    
    onClick={()=>navigate(`../properties/${card.id.toString()}`)}

    >
      <Heart id={card?.id}/>
      <img src={card?.image} alt="home" />
      <span className="secondaryText r-price">
        <span style={{ color: "orange" }}>Rs.</span>
        <span>{card.price}</span>
      </span>
      <span className="primaryText">{truncate(card.title, {length: 15})}</span>
      <span className="secondaryText">{truncate(card.description, {length: 80})}</span>
    </div>
  );
};

export default PropertyCard;
