import React from "react";

export default function Card(props) {
  return (
    <div className="card_main">
      <div className="card_main-cards">
        <img
          src={props.img}
          alt="company-logo"
          srcset=""
          className="card_main-cards-first "
        />
        <div className="card_main-cards-main">
          <p className="card_main-cards-main-text">{props.name}</p>
          <p className="card_main-cards-main-text">Intern</p>
        </div>
      </div>
      <div className="card_main-cards2">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, cumque.</p>
      </div>
    </div>
  );
}
