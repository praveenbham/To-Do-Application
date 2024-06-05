import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/TaskSlice';
import { v4 as uuidv4 } from 'uuid';
import { Form, Button, Row, Col } from 'react-bootstrap';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask({ id: uuidv4(), name: task, completed: false }));
      setTask('');
    }
  };

  return (
    <Row className="mb-4">
      <Col>
        <Form className="d-flex" onSubmit={handleAddTask}>
          <Form.Control
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="me-2"
          />
          <Button variant="primary" type="submit">
            Add Task
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default TaskInput;
