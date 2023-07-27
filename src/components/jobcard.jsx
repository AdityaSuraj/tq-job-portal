import React, { useState } from 'react'

const Jobcard = (props) => {
  return (

    <div className="container_main-1">




      <div className="container_main-1_card">
        <div>
          <img
            src={props.job.banner ?? "https://picsum.photos/300/200"}
            alt="Card Image"
            className="container_main-1_card-img"
          />

          <h1 className="container_main-1_card_title">{props.job.companyName ?? "Demo Company"}</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p className="container_main-1_card_description">
              Job - {props.job.name}
              <br></br>
              Location:- {props.job.location}
              <br></br>
              Salary:- {props.job.salaryRangeStart} - {props.job.salaryRangeEnd}
              <br></br>
              NO.Of Openings:-8
            </p>
            <button href="cardPage" className="container_main-1_card_btn">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* 
      <div className="container_main-1_card">
        <div>
          <img
            src="https://picsum.photos/300/200"
            alt="Card Image"
            className="container_main-1_card-img"
          />

          <h1 className="container_main-1_card_title">Company name</h1>
          <div>
            <p className="ontainer_main-1_card_description">
              Job - Title:- Database administrator
              <br></br>
              Location:- Mumbai
              <br></br>
              Salary:- 40000
              <br></br>
              NO.Of Openings:-8
            </p>
            <a href="cardPage" className="container_main-1_card_btn">
              Learn More
            </a>
          </div>
        </div>
      </div>
 */}












    </div>

  );
}

export default Jobcard

