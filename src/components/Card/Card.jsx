import React from 'react';
import "./Card.scss"
import cardImg from "../../assets/images/Card.img.png"
import avatar from "../../assets/images/av.png";

const Card = () => {
    return (
      <>
        <div className="card">
          <div className="card__img">
            <img src={cardImg} alt="" />
            <p className='card__img__time'>5:30</p>
          </div>
          <div className="card__body d-flex">
            <div className="card__body__avatar">
              <img src={avatar} alt="" />
            </div>
            <div className="card__body__text">
              <h2>
                Design and Prototype an App with Play - Full 3-hour Course
              </h2>
              <p>Designcode</p>
              <p className="card__body__text__views">14k views - 1 month ago</p>
            </div>
          </div>
        </div>
      </>
    );
};

export default Card;