import logo from "./logo.svg";
import "./App.css";
import ListHeader from "./ListHeader/ListHeader";
import Header from "./Components/Header/Header";
import Status from "./Components/Status/Status";
import OrderedList from "./Components/Lists/OrderedList";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const devSkillsList = [
    {
      task: "HTML",
      id: 1,
      score: "6",
      priority: "High",
    },
    {
      task: "CSS",
      id: 2,
      score: "2",
      priority: "High",
    },
    {
      task: "JavaScript",
      id: 3,
      score: "3",
      priority: "High",
    },
    {
      task: "Debugging",
      id: 5,
      score: "4",
      priority: "High",
    },
  ];
  const toDoList = [
    {
      task: "Creating skelton app",
      id: 1,
      status: "Done",
    },
    {
      task: "Learn the Architecture",
      id: 2,
      status: "Done",
    },
    {
      task: "Create first components",
      id: 3,
      status: "Semi Done",
    },
    {
      task: "Props",
      id: 4,
      status: "",
    },
    {
      task: "Class components vs functional components",
      id: 5,
      status: "",
    },
    {
      task: "State",
      id: 6,
      status: "",
    },
    {
      task: "CSS",
      id: 7,
      status: "",
    },
    {
      task: "HTML",
      id: 8,
      status: "",
    },
    {
      task: "INTERPOLATION",
      id: 9,
      status: "",
    },
    {
      task: "Debugging and error messages",
      id: 10,
      status: "",
    },
  ];

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col> 
          <Navbar />
          </Col>
        </Row>
      </Container>

      <Header />

      <Status devSkillsList={devSkillsList} toDoList={toDoList} />
      <OrderedList devSkillsList={devSkillsList} toDoList={toDoList} />

      <div>
        <h1>footer</h1>
      </div>
    </div>
  );
}

export default App;
