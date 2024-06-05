import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <h1 className="text-center my-4">To-Do List</h1>
          <TaskInput />
          <TaskList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
