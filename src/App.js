import "./App.scss";
import Cards from "./components/Cards";
import TodoForm from "./components/TodoForm";
import Navigation from "./components/Navigation/Navigation";
import { useState } from "react";
const cardsDummyData = [
  {
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

function App() {
  const [todoForm, setTodoForm] = useState({ title: "", content: "" });
  const [cards, setCards] = useState(cardsDummyData);

  const updateTodoForm = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    console.log(inputName, inputValue);
    setTodoForm((prevState) => ({ ...prevState, [inputName]: inputValue }));
  };

  const addTodoCard = (event) => {
    event.preventDefault();
    const newCard = {
      title: todoForm.title,
      description: todoForm.content,
    };
    setCards((prevState) => [...prevState, newCard]);
  };

  const completeTodo = (index) => {
    const currentCardStatus = [...cards];
    currentCardStatus.splice(index, 1);
    setCards(currentCardStatus);
  };

  return (
    <>
      <Navigation />
      <main id="wrapper">
        <TodoForm
          todoForm={todoForm}
          updateTodoForm={updateTodoForm}
          addTodo={addTodoCard}
        />
        <h1>
          <b>My Todos</b>
        </h1>
        <Cards title="My Todos" cards={cards} handleClick={completeTodo} />
      </main>
    </>
  );
}

export default App;
