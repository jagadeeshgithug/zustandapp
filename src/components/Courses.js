import React from "react";
import useCourseStore from "../app/courseStore";

const Courses = () => {
  const { courses, removeCourse, toggleCourse } = useCourseStore((state) => ({
    courses: state.courses,
    removeCourse: state.removeCourse,
    toggleCourse: state.toggleCourse,
  }));
  return (
    <>
      <ul className="courseList">
        {courses.map((course, index) => (
          <li className="eachCourse" key={index}>
            <input
              className="checkbox"
              type="checkbox"
              checked={course.completed}
              defaultValue={course.completed}
              onChange={() => {
                toggleCourse(course.id);
              }}
            />
            <p className={course.completed ? "courseComplted" : ""}>
              {course.title}
            </p>
            <button
              className="removebtn"
              onClick={() => {
                removeCourse(course.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Courses;
