import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/cardInfo.css";

const CardInfo = ({ url }) => {
  const [resident, setResident] = useState();
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setResident(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(resident);

  return (
    <article className="card">
      <div className="card__image">
        <img src={resident?.image} />
        <div className="card__status">
          <div className={`card__estatus-color ${resident?.status}`}></div>
          <p>{resident?.status}</p>
        </div>
      </div>
      <h3 className="card__title">{resident?.name}</h3>
      <hr />
      <ul>
        <li className="card__item">
          <span>Status: </span>
          {resident?.species}
        </li>
        <li className="card__item">
          <span>Origin: </span>
          {resident?.origin.name}
        </li>
        <li className="card__item">
          <span>Episodes: </span>
          {resident?.episode.length}
        </li>
      </ul>
    </article>
  );
};

export default CardInfo;
