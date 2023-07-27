import React from "react";

function Testcard() {
  return (
    <div className="card">
      <div className="card_main">
        <div className="card_main_img">
            <img src="https://picsum.photos/300/200" className="card_main_img_1"/>
        </div>
        <div className="card_main_head">
            <h1>comapny name</h1>
        </div>
        <div className="card_main_details">
            <span>company Title</span>
        </div>
        <button type="submit" className="card_main_btn"> submit</button>
      </div>
    </div>
  );
}

export default Testcard;
