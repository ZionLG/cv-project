import React from "react";

const EducationalExperiance = (props) => {
  const education = props.educationInfo.map((obj) => {
    return (
      <div key={obj.id} data-id={obj.id} className="input-taker">
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="degree"
          placeholder="Degree"
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="university"
          placeholder="University"
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="startDate"
          placeholder="Start Date"
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="endDate"
          placeholder="End Date"
          onChange={props.handleOnChange}
        />
        <button data-id={obj.id} onClick={props.deleteEducation}>
          Delete
        </button>
      </div>
    );
  });

  return (
    <section>
      <h2>Education</h2>
      {education}
      <button onClick={props.addEducation}>Add</button>
    </section>
  );
};

export default EducationalExperiance;
