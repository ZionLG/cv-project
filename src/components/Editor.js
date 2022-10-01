import React from "react";
import PersonalDetailEditor from "./PersonalDetailEditor";
import EducationalExperiance from "./EducationalExperience";
import WorkExperiance from "./WorkExperience";

export default class Editor extends React.Component {
  render() {
    return (
      <div className="editor">
        <PersonalDetailEditor
          personalInfo={this.props.personalInfo}
          handleOnChange={this.props.handlePersonalOnChange}
        />
        <EducationalExperiance
          addEducation={this.props.addEducation}
          deleteEducation={this.props.deleteEducation}
          educationInfo={this.props.educationInfo}
          handleOnChange={this.props.handleEducationOnChange}
        />
        <WorkExperiance
          workInfo={this.props.workInfo}
          addWork={this.props.addWork}
          deleteWork={this.props.deleteWork}
          handleOnChange={this.props.handleWorkOnChange}
        />
      </div>
    );
  }
}
