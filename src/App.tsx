import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <>
      <h1 className="text-orange-600">Memory Game!</h1>
      <div id="Card-Container" className="p-5">
        <CardComponent
          cardId={1}
          imgSrc="https://picsum.photos/200"
          isFlipped={true}
          isMatched={false}
          onClick={() => {
            console.log("Card Pressed with ID -> ", 1);
          }}
        />

        <CardComponent
          cardId={2}
          imgSrc="Image"
          isFlipped={false}
          isMatched={false}
          onClick={() => {
            console.log("Card Pressed with ID -> ", 2);
          }}
        />

        <CardComponent
          cardId={3}
          imgSrc="Image"
          isFlipped={false}
          isMatched={false}
          onClick={() => {
            console.log("Card Pressed with ID -> ", 3);
          }}
        />

        <CardComponent
          cardId={4}
          imgSrc="Image"
          isFlipped={false}
          isMatched={false}
          onClick={() => {
            console.log("Card Pressed with ID -> ", 4);
          }}
        />

        <CardComponent
          cardId={5}
          imgSrc="Image"
          isFlipped={false}
          isMatched={false}
          onClick={() => {
            console.log("Card Pressed with ID -> ", 5);
          }}
        />

        <CardComponent
          cardId={6}
          imgSrc="Image"
          isFlipped={false}
          isMatched={false}
          onClick={() => {
            console.log("Card Pressed with ID -> ", 6);
          }}
        />
      </div>
    </>
  );
}

export default App;
