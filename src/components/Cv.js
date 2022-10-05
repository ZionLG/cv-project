import React, { useState } from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import uniqid from "uniqid";

const Cv = () => {
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    title: "",
    email: "",
    phoneNumber: "",
    address: "",
    description: "",
  });

  const [educationInfo, setEducationInfo] = useState([]);
  const [workInfo, setWorkInfo] = useState([]);

  const handlePersonalOnChange = (e) => {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };

  const handleAddEducation = () => {
    setEducationInfo([
      ...educationInfo,
      {
        id: uniqid(),
        university: "",
        degree: "",
        subject: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleDeleteEducation = (e) => {
    let filteredList = educationInfo.filter(
      (item) => item.id !== e.target.getAttribute("data-id")
    );

    setEducationInfo(filteredList);
  };

  const handleEducationOnChange = (e) => {
    let objIndex = educationInfo.findIndex(
      (obj) => obj.id === e.target.parentElement.getAttribute("data-id")
    );
    let list = educationInfo;
    const target = e.target;
    const value = target.value;
    const name = target.name;

    list[objIndex] = {
      ...list[objIndex],
      [name]: value,
    };

    setEducationInfo([...list]);
  };

  const handleAddWork = () => {
    setWorkInfo([
      ...workInfo,
      {
        id: uniqid(),
        company: "",
        position: "",
        startDate: "",
        endDate: "",
      },
    ]);
  };

  const handleDeleteWork = (e) => {
    let filteredList = workInfo.filter(
      (item) => item.id !== e.target.getAttribute("data-id")
    );

    setWorkInfo(filteredList);
  };

  const handleWorkOnChange = (e) => {
    let objIndex = workInfo.findIndex(
      (obj) => obj.id === e.target.parentElement.getAttribute("data-id")
    );
    let list = workInfo;

    const target = e.target;
    const value = target.value;
    const name = target.name;

    list[objIndex] = {
      ...list[objIndex],
      [name]: value,
    };

    setWorkInfo([...list]);
  };

  return (
    <div className="cv">
      <Editor
        handlePersonalOnChange={handlePersonalOnChange}
        educationInfo={educationInfo}
        addEducation={handleAddEducation}
        deleteEducation={handleDeleteEducation}
        handleEducationOnChange={handleEducationOnChange}
        workInfo={workInfo}
        addWork={handleAddWork}
        deleteWork={handleDeleteWork}
        handleWorkOnChange={handleWorkOnChange}
      />
      <Preview
        personalInfo={personalInfo}
        educationInfo={educationInfo}
        workInfo={workInfo}
      />
    </div>
  );
};

export default Cv;
