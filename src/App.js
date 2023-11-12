import React, { Component } from "react";
import "./App.css";
import Input from "./Components/input";
import Button from "./Components/Button";
import Switcher from "./Components/switcher";
import Todoitem from "./Components/todoitem";
import Clear from "./Components/clear";

class App extends Component {
  constructor(props) {
    super(props);

    const date = new Date();

    this.state = {
      newTodoTitle: "",
      newDescription: "",
      allTodos: [],
      viewMode: "todo",
      editTask: { id: null, text: "" },
      TaskText: "",
      isEditing: false,
      date: date,
    };
  }

  addNewTask = () => {
    const { newTodoTitle, newDescription, allTodos, date } = this.state;

    if (newTodoTitle.trim() !== "") {
      const newTask = {
        title: newTodoTitle,
        description: newDescription,
        id: date.getMilliseconds(),
      };

      this.setState((prevState) => ({
        allTodos: [...prevState.allTodos, newTask],
        newTodoTitle: "",
        newDescription: "",
      }));
    }
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      allTodos: prevState.allTodos.filter((item) => item.id !== id),
    }));
  };

  clearAllTasks = () => {
    this.setState({ allTodos: [] });
  };

  switchToTodo = () => {
    this.setState({ viewMode: "todo" });
  };

  switchToCompleted = () => {
    this.setState({ viewMode: "completed" });
  };

  taskCompleted = (taskId) => {
    this.setState((prevState) => ({
      allTodos: prevState.allTodos.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      ),
    }));
  };

  toggleEdit = (taskId, taskText) => {
    this.setState((prevState) => ({
      allTodos: prevState.allTodos.map((task) =>
        task.id === taskId
          ? { ...task, isEditing: !task.isEditing }
          : task
      ),
      editTask: prevState.editTask.id === taskId ? { id: null, text: "" } : { id: taskId, text: taskText },
      TaskText: taskText,
    }));
  };

  saveChange = (taskId) => {
    this.setState((prevState) => ({
      allTodos: prevState.allTodos.map((task) =>
        task.id === taskId
          ? { ...task, title: prevState.TaskText, isEditing: false }
          : task
      ),
      TaskText: "",
      editTask: { id: null, text: "" },
    }));
  };

  render() {
    const {
      newTodoTitle,
      newDescription,
      allTodos,
      viewMode,
      editTask,
      TaskText,
    } = this.state;

    const todoTasks = allTodos.filter((task) => !task.completed);
    const completedTasks = allTodos.filter((task) => task.completed);

    return (
      <div className="App">
        <h1>My Todos</h1>

        <div className="todo-wrapper">
          <div className="todo-input">
            <Input
              valueTitle={newTodoTitle}
              valueDescription={newDescription}
              onTitleChange={(value) =>
                this.setState({ newTodoTitle: value })
              }
              onDescriptionChange={(value) =>
                this.setState({ newDescription: value })
              }
            />

            <Button onclick={this.addNewTask} />
          </div>

          <div className="clear-wrapper">
            <Clear clear={this.clearAllTasks} />

            <Switcher
              switchToTodo={this.switchToTodo}
              switchToCompleted={this.switchToCompleted}
              viewMode={viewMode}
            />
          </div>

          <div className="todo-list">
            {viewMode === "todo" ? (
              todoTasks.map((item, index) => (
                <Todoitem
                  todoTitle={item.title}
                  todoDescription={item.description}
                  deleteTask={this.deleteTask}
                  id={item.id}
                  taskCompleted={this.taskCompleted}
                  completed={item.completed}
                  toggleEdit={() => this.toggleEdit(item.id, item.title)}
                  TaskText={
                    item.id === editTask.id ? editTask.text : ""
                  }
                  setTaskText={(value) => this.setState({ TaskText: value })}
                  saveChange={() => this.saveChange(item.id)}
                  editTask={item.id === editTask.id}
                  isEditing={editTask.id === item.id}
                />
              ))
            ) : (
              completedTasks.map((item, index) => (
                <Todoitem
                  todoTitle={item.title}
                  todoDescription={item.description}
                  deleteTask={this.deleteTask}
                  id={item.id}
                  taskCompleted={this.taskCompleted}
                  completed={item.completed}
                  toggleEdit={() => this.toggleEdit(item.id, item.title)}
                  TaskText={
                    item.id === editTask.id ? editTask.text : ""
                  }
                  setTaskText={(value) => this.setState({ TaskText: value })}
                  saveChange={() => this.saveChange(item.id)}
                  editTask={item.id === editTask.id}
                  isEditing={editTask.id === item.id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
