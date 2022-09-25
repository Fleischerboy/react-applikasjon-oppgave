import "./App.scss";
import Cards from "./components/Cards"

const cardsDummyData = [
  {
    id: 1,
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    id: 1,
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    id: 1,
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    id: 1,
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    id: 1,
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },

  {
    id: 1,
    title: "Todotitle",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  },
];

function App() {
  return (
    <>
      <section className="cards-container">
      <Cards title="My Todos" cards={cardsDummyData}/>
      </section>
      
    </>
  );
}

export default App;
