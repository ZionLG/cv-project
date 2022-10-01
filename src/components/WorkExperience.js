import React from "react";

export default class WorkExperiance extends React.Component {
  render() {
    const work = this.props.workInfo.map((obj) => {
      return (
        <div key={obj.id} data-id={obj.id} className="input-taker">
          <input
            type="text"
            name="position"
            placeholder="Position"
            onChange={this.props.handleOnChange}
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
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
          <button data-id={obj.id} onClick={this.props.deleteWork}>
            Delete
          </button>
        </div>
      );
    });

    return (
      <section>
        <h2>Experiance</h2>
        {work}
        <button onClick={this.props.addWork}>Add</button>
      </section>
    );
  }
}
