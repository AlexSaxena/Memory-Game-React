import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <>
      <h1 className="text-orange-600">Memory Game!</h1>
      <div id="Card-Container" className="p-5">
        <CardComponent
          cardId={2}
          imgSrc="d"
          isFlipped={false}
          isMatched={false}
          onClick={() => {
            console.log("Card Pressed");
          }}
        />
      </div>
    </>
  );
}

export default App;
