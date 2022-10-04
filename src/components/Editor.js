import React from "react";
import PersonalDetailEditor from "./PersonalDetailEditor";
import EducationalExperiance from "./EducationalExperience";
import WorkExperiance from "./WorkExperience";

const Editor = (props) => {
  return (
    <div className="editor">
      <PersonalDetailEditor
        personalInfo={props.personalInfo}
        handleOnChange={props.handlePersonalOnChange}
      />
      <EducationalExperiance
        addEducation={props.addEducation}
        deleteEducation={props.deleteEducation}
        educationInfo={props.educationInfo}
        handleOnChange={props.handleEducationOnChange}
      />
      <WorkExperiance
        workInfo={props.workInfo}
        addWork={props.addWork}
        deleteWork={props.deleteWork}
        handleOnChange={props.handleWorkOnChange}
      />
    </div>
  );
};

export default Editor;
