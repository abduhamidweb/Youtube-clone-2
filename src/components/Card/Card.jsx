import React, { useContext } from 'react';
import "./Card.scss"
import cardImg from "../../assets/images/Card.img.png"
import avatar from "../../assets/images/av.png";
import context from '../../context/context';
const Card = ({ data }) => {
  const { setVideoId, openModal } = useContext(context)

  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="card m-3 p-4">
          <div className="card__img">
            <img src={data.snippet.thumbnails.medium.url} alt={data.snippet.title} onClick={() => {
              setVideoId(data.id)
              openModal()
            }} />
            <p className='card__img__time'>5:30</p>
          </div>
          <div className="card__body d-flex">
            <div className="card__body__avatar">
              <img src={data.snippet.thumbnails.medium.url} alt="" />
            </div>
            <div className="card__body__text">
              <h2>
                {data.snippet.title.substring(0, 50)}...
              </h2>
              <p>{data.snippet.channelTitle.substring(0, 20)}</p>
              {/* <p className="card__body__text__views">{videoData.statistics.viewCount} views - 1 month ago</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;