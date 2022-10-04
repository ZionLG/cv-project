import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import uniqid from "uniqid";

const Preview = (props) => {
  const { fullName, title, email, phoneNumber, address, description } =
    props.personalInfo;

  const educationInfo = props.educationInfo.map((obj) => {
    return (
      <div key={uniqid()} className="preview-section-item">
        <div className="preview-section-time">
          {obj.startDate} - {obj.endDate}
        </div>
        <div className="preview-section-info">
          <span className="preview-subject">{obj.subject}</span>
          <span>{obj.degree}</span>
          <span>{obj.university}</span>
        </div>
      </div>
    );
  });

  const workInfo = props.workInfo.map((obj) => {
    return (
      <div key={uniqid()} className="preview-section-item">
        <div className="preview-section-time">
          {obj.startDate} - {obj.endDate}
        </div>
        <div className="preview-section-info">
          <span className="preview-position">{obj.position}</span>
          <span>{obj.company}</span>
        </div>
      </div>
    );
  });

  return (
    <div className="preview">
      <section>
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
      </section>
      <section className="preview-section">
        {educationInfo.length > 0 && (
          <h2 className="preview-name">Education</h2>
        )}
        {educationInfo}
      </section>
      <section className="preview-section">
        {workInfo.length > 0 && <h2 className="preview-name">Experiance</h2>}
        {workInfo}
      </section>
    </div>
  );
};

export default Preview;
