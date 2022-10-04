import React from "react";

const PersonalDetailEditor = (props) => {
  return (
    <section>
      <h2>Personal Details</h2>
      <div className="input-taker">
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={props.handleOnChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={props.handleOnChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="Phone number"
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={props.handleOnChange}
        />
        <textarea
          name="description"
          rows={5}
          placeholder="Description"
          onChange={props.handleOnChange}
        />
      </div>
    </section>
  );
};

export default PersonalDetailEditor;
