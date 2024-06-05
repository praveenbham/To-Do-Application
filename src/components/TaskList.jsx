import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTaskCompletion, editTask } from '../features/tasks/TaskSlice';
import { ListGroup, Button, Form, Modal } from 'react-bootstrap';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [currentTask, setCurrentTask] = useState({ id: '', name: '' });

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTaskCompletion = (id) => {
    dispatch(toggleTaskCompletion(id));
  };

  const handleEditTask = (task) => {
    setCurrentTask(task);
    setShowModal(true);
  };

  const handleSaveEdit = () => {
    dispatch(editTask(currentTask));
    setShowModal(false);
  };

  return (
    <>
      <ListGroup>
        {tasks.map((task) => (
          <ListGroup.Item key={task.id} className="d-flex justify-content-between align-items-center">
            <Form.Check
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTaskCompletion(task.id)}
              label={task.completed ? <del>{task.name}</del> : task.name}
              className="flex-grow-1"
            />
            <div>
              <Button
                variant="warning"
                onClick={() => handleEditTask(task)}
                className="me-2"
              >
                Edit
              </Button>
              <Button variant="danger" onClick={() => handleDeleteTask(task.id)}>
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            value={currentTask.name}
            onChange={(e) => setCurrentTask({ ...currentTask, name: e.target.value })}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TaskList;
