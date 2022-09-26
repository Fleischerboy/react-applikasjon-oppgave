import { isDisabled } from "@testing-library/user-event/dist/utils";
import Button from "./Button";

const TodoForm = ({ todoForm, updateTodoForm, addTodo }) => {
  const isDisabled = () => todoForm.title.length === 0

  return (
    <>
      <section className="todo-form-section">
        <form className="todo-form">
          <label htmlFor="title">
            <b>Title</b>
          </label>
          <input
            id="title"
            name="title"
            className="input-todo-text-title"
            type="textarea"
            value={todoForm.title}
            onChange={updateTodoForm}
          ></input>

          <label htmlFor="content">
            <b>Content</b>
          </label>
          <input
            id="content"
            name="content"
            className="input-todo-textarea-content"
            type="textarea"
            value={todoForm.content}
            onChange={updateTodoForm}
          ></input>
          <div className="card-button-wrapper">
            <Button onClick={addTodo} disabled={isDisabled()} text="Add" />
          </div>
        </form>
      </section>
    </>
  );
};

export default TodoForm;
