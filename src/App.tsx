import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-start overflow-y-auto">
        <h1 className="text-orange-600 text-3xl font-bold mt-6 mb-6">
          Memory Game!
        </h1>
        <div className="w-full max-w-4xl p-4">
          <div
            id="Card-Container"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center"
          >
            <CardComponent
              cardId={1}
              imgSrc="/house.jpg"
              isFlipped={true}
              isMatched={false}
              onClick={() => {
                console.log("Card Pressed with ID -> ", 1);
              }}
            />

            <CardComponent
              cardId={2}
              imgSrc="/space.jpg"
              isFlipped={true}
              isMatched={false}
              onClick={() => {
                console.log("Card Pressed with ID -> ", 2);
              }}
            />

            <CardComponent
              cardId={3}
              imgSrc="/space_pod.jpg"
              isFlipped={true}
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
        </div>
      </main>
    </>
  );
}

export default App;
