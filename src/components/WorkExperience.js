import React from "react";

const WorkExperiance = (props) => {
  const work = props.workInfo.map((obj) => {
    return (
      <div key={obj.id} data-id={obj.id} className="input-taker">
        <input
          type="text"
          name="position"
          placeholder="Position"
          onChange={props.handleOnChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
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
        <button data-id={obj.id} onClick={props.deleteWork}>
          Delete
        </button>
      </div>
    );
  });
  return (
    <section>
      <h2>Experiance</h2>
      {work}
      <button onClick={props.addWork}>Add</button>
    </section>
  );
};

export default WorkExperiance;
