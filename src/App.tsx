import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  const cardContentArray = [
    {
      cardId: 1,
      imgSrc: "/house.jpg",
      isFlipped: true,
      isMatched: false,
      onClick: () => {
        console.log("Card Pressed ");
      },
    },
    {
      cardId: 2,
      imgSrc: "/space.jpg",
      isFlipped: true,
      isMatched: false,
      onClick: () => {
        console.log("Card Pressed ");
      },
    },
    {
      cardId: 3,
      imgSrc: "/space_pod.jpg",
      isFlipped: true,
      isMatched: false,
      onClick: () => {
        console.log("Card Pressed ");
      },
    },
  ];

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
            {cardContentArray.map((card) => {
              return (
                <CardComponent
                  key={card.cardId}
                  cardId={card.cardId}
                  imgSrc={card.imgSrc}
                  isFlipped={card.isFlipped}
                  isMatched={card.isMatched}
                  onClick={card.onClick}
                />
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
