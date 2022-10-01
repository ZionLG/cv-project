import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
export default class Preview extends React.Component {
  render() {
    const { fullName, title, email, phoneNumber, address, description } =
      this.props.personalInfo;
    return (
      <div className="preview">
        <div className="preview-info">
          <div>
            <h1 className="preview-name">{fullName}</h1>
            <span>{title}</span>
          </div>
          <div className="preview-contact">
            <span className="contact-line">
              <FaPhoneSquareAlt size={15} />
              {phoneNumber}
            </span>
            <span className="contact-line">
              <MdEmail size={15} />
              {email}
            </span>
            <span className="contact-line">
              <ImLocation size={15} />
              {address}
            </span>
          </div>
        </div>
        <hr />
        <section>{description}</section>
      </div>
    );
  }
}
