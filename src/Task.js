import React, { useState } from "react";
import styled from "styled-components";

const Task = ({ task, onDelete, onToggleComplete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState(task.text);

  const handleEdit = () => {
    onEdit(task.id, editInput);
    setIsEditing(false);
  };

  return (
    <TaskContainer>
      {isEditing ? (
        <EditInputContainer>
          <EditInput
            type="text"
            value={editInput}
            onChange={(e) => setEditInput(e.target.value)}
          />
          <SaveButton onClick={handleEdit}>Save</SaveButton>
        </EditInputContainer>
      ) : (
        <>
          <TaskText
            completed={task.completed}
            onClick={() => onToggleComplete(task.id)}
          >
            {task.text}
          </TaskText>
          <ButtonContainer>
            <EditButton onClick={() => setIsEditing(true)}>Edit</EditButton>
            <DeleteButton onClick={() => onDelete(task.id)}>Delete</DeleteButton>
          </ButtonContainer>
        </>
      )}
    </TaskContainer>
  );
};

export default Task;

// Styled Components
const TaskContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 1rem;
  border-radius: 4px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const TaskText = styled.p`
  flex: 1;
  margin: 0;
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  color: ${(props) => (props.completed ? "#aaa" : "#333")};
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const EditButton = styled.button`
  padding: 0.5rem;
  background-color: #ffc107;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0a800;
  }
`;

const DeleteButton = styled.button`
  padding: 0.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #c82333;
  }
`;

const EditInputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  flex: 1;
`;

const EditInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SaveButton = styled.button`
  padding: 0.5rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;
