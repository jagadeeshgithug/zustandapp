import React, { useState } from "react";
import useCourseStore from "../app/courseStore";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const addCourse = useCourseStore((state) => state.addCourse);

  const onAddClick = () => {
    console.log({
      id: Math.random() * 15555555,
      title,
      completed: false,
    });
    if (title.trim() === "") return;
    addCourse({
      id: Math.random() * 155555555,
      title,
      completed: false,
    });
    setTitle("");
  };
  return (
    <div>
      <input
        className="inputbox"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Add courses"
      />
      <button className="addbtn" onClick={onAddClick}>
        Add
      </button>
    </div>
  );
};

export default AddCourse;
