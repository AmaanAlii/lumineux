import React from "react";
import "./EnquiryCard.css";

function EnquiryCard() {
  return (
    <div className="enquiry-card">
      <div className="enquiry-card-text-section">
        <h3>Schedule a Tour</h3>
        <span>
          Your email address will not be published. Required fields are marked *
        </span>
      </div>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="phone" placeholder="Your Mobile Number" />
        <textarea type="text" placeholder="Message" />
      </form>
      <button type="submit">Make Enquiry</button>
    </div>
  );
}

export default EnquiryCard;
