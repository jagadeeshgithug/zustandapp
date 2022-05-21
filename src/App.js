import logo from "./logo.svg";
import "./App.css";
import AddCourse from "./components/addCourse";
import Courses from "./components/Courses";
function App() {
  return (
    <>
      <div className="App">
        <AddCourse />
        <Courses />
      </div>
    </>
  );
}

export default App;
