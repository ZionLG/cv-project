import React from "react";

export default class EducationalExperiance extends React.Component {
  render() {
    const education = this.props.educationInfo.map((obj) => {
      return (
        <div key={obj.id} data-id={obj.id} className="input-taker">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={this.props.handleOnChange}
          />
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={this.props.handleOnChange}
          />
          <input
            type="text"
            name="university"
            placeholder="University"
            onChange={this.props.handleOnChange}
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            onChange={this.props.handleOnChange}
          />
          <input
            type="text"
            name="endDate"
            placeholder="End Date"
            onChange={this.props.handleOnChange}
          />
          <button data-id={obj.id} onClick={this.props.deleteEducation}>
            Delete
          </button>
        </div>
      );
    });

    return (
      <section>
        <h2>Education</h2>
        {education}
        <button onClick={this.props.addEducation}>Add</button>
      </section>
    );
  }
}
