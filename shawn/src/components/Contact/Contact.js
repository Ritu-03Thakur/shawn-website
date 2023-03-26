import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import React from "react";
import "./Contact.scss";
const Contact = () => {
  return (
    <div className="contact">
      <div className="left">
       
        <div className="content">
          <span>Mail Us :</span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.repellat
            autem consequatur, minima quas sequi tempora iste.
          </p>
        </div>

        <div className="content">
          <span>Registered Office Address : </span>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing iis repellat
            autem consequatur, minima quas sequi tempora iste.
          </p>
        </div>
      </div>
      < div className="bottom">
       
          <span>Keep in Touch</span>
          <div className="icon">
            <InstagramIcon />
            <YouTubeIcon />
            <FacebookIcon />
            <TwitterIcon />
          </div>
        
      </div>
    </div>
  );
};

export default Contact;
