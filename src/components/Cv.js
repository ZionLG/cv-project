import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import uniqid from "uniqid";

export default class Cv extends React.Component {
  constructor() {
    super();

    this.state = {
      personalInfo: {
        fullName: "",
        title: "",
        email: "",
        phoneNumber: "",
        address: "",
        description: "",
      },
      educationInfo: [],
      workInfo: [],
    };
  }

  handlePersonalOnChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      personalInfo: {
        ...this.state.personalInfo,
        [name]: value,
      },
    });
  };

  handleAddEducation = () => {
    this.setState({
      educationInfo: [
        ...this.state.educationInfo,
        {
          id: uniqid(),
          university: "",
          degree: "",
          subject: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  handleDeleteEducation = (e) => {
    let filteredTasks = this.state.educationInfo.filter(
      (item) => item.id !== e.target.getAttribute("data-id")
    );

    this.setState({
      educationInfo: filteredTasks,
    });
  };

  handleEducationOnChange = (e) => {
    let objIndex = this.state.educationInfo.findIndex(
      (obj) => obj.id === e.target.parentElement.getAttribute("data-id")
    );
    let list = this.state.educationInfo;
    const target = e.target;
    const value = target.value;
    const name = target.name;

    list[objIndex] = {
      ...list[objIndex],
      [name]: value,
    };
    this.setState({
      educationInfo: list,
    });
  };

  handleAddWork = () => {
    this.setState({
      workInfo: [
        ...this.state.workInfo,
        {
          id: uniqid(),
          company: "",
          position: "",
          startDate: "",
          endDate: "",
        },
      ],
    });
  };

  handleDeleteWork = (e) => {
    let filteredTasks = this.state.workInfo.filter(
      (item) => item.id !== e.target.getAttribute("data-id")
    );

    this.setState({
      workInfo: filteredTasks,
    });
  };

  handleWorkOnChange = (e) => {
    let objIndex = this.state.workInfo.findIndex(
      (obj) => obj.id === e.target.parentElement.getAttribute("data-id")
    );
    let list = this.state.educationInfo;

    const target = e.target;
    const value = target.value;
    const name = target.name;

    list[objIndex] = {
      ...list[objIndex],
      [name]: value,
    };
    this.setState({
      workInfo: list,
    });
  };

  render() {
    return (
      <div className="cv">
        <Editor
          handlePersonalOnChange={this.handlePersonalOnChange}
          educationInfo={this.state.educationInfo}
          addEducation={this.handleAddEducation}
          deleteEducation={this.handleDeleteEducation}
          handleEducationOnChange={this.handleEducationOnChange}
          workInfo={this.state.workInfo}
          addWork={this.handleAddWork}
          deleteWork={this.handleDeleteWork}
          handleWorkOnChange={this.handleWorkOnChange}
        />
        <Preview personalInfo={this.state.personalInfo} />
      </div>
    );
  }
}
