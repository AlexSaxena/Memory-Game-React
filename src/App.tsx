import "./App.css";
import CardComponent from "./components/cardComponent";

function App() {
  return (
    <>
      <h1 className="text-orange-600">Memory Game!</h1>
      <div className="p-5">
        <CardComponent />
      </div>
    </>
  );
}

export default App;
