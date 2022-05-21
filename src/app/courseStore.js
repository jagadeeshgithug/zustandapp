import create from "zustand";

import { devtools, persist } from "zustand/middleware";

const createStore = (set) => ({
  courses: [],
  addCourse: (course) => {
    set((state) => ({
      courses: [...state.courses, course],
    }));
  },
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((c) => c.id !== courseId),
    }));
  },
  toggleCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.map((c) =>
        c.id === courseId ? { ...c, completed: !c.completed } : c
      ),
    }));
  },
});

const useCourseStore = create(
  devtools(persist(createStore, { name: "coruses" }))
);

export default useCourseStore;
