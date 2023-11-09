import React from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";
import { FaRegEdit } from "react-icons/fa";
import { BiSave } from "react-icons/bi";

const Todoitem = ({
    todoTitle,
    todoDescription,
    deleteTask,
    id,
    taskCompleted,
    completed,
    toggleEdit,
    TaskText,
    saveChange,
    isEditing,
    setTaskText
}) => {
  let iconComponent;

  if (completed) {
    iconComponent = (
      <RxCross1
        title="Delete"
        className="delete-icon"
        onClick={() => taskCompleted(id)}
      />
    );
  } else {
    iconComponent = (
      <BsCheckLg
        title="Completed"
        className="check-icon"
        onClick={() => taskCompleted(id)}
      />
    );
  }

  return (
    <div className="todo-list-item">
      <div>
        {isEditing ? (
          <div>
<input
  className="edit-input"
  type="text"
  defaultValue={TaskText}
  onChange={(e) => setTaskText(e.target.value)}
/>

          </div>
        ) : (
          <div>
            <h3>{todoTitle}</h3>
            <p>{todoDescription}</p>
          </div>
        )}
      </div>

      <div>
        {isEditing ? (
          <BiSave
            title="Save-icon"
            className="save-icon"
            onClick={() => saveChange(id)}
          />
        ) : (
          <div>
            <AiOutlineDelete
              title="Delete?"
              className="icon"
              onClick={() => deleteTask(id)}
            />
            {iconComponent}
            <FaRegEdit
              title="Edit"
              className="icon-Edit"
              onClick={() => toggleEdit(id, todoTitle)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Todoitem;