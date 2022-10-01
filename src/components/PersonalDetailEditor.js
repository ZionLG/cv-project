import React from "react";

export default class PersonalDetailEditor extends React.Component {
  render() {
    return (
      <section>
        <h2>Personal Details</h2>
        <div className="input-taker">
          <input
            type="text"
            name="fullName"
            placeholder="Full name"
            onChange={this.props.handleOnChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={this.props.handleOnChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={this.props.handleOnChange}
          />
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone number"
            onChange={this.props.handleOnChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={this.props.handleOnChange}
          />
          <textarea
            name="description"
            rows={5}
            placeholder="Description"
            onChange={this.props.handleOnChange}
          />
        </div>
      </section>
    );
  }
}
