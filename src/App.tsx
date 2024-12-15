import "./App.css";
import CardComponent from "./components/CardComponent";

function App() {
  type Card = {
    cardId: number;
    imgSrc: string;
    isFlipped: boolean;
    isMatched: boolean;
    onClick: () => void;
  };

  const cardContentArray: Card[] = [
    {
      cardId: 1,
      imgSrc: "/house.jpg",
      isFlipped: true,
      isMatched: false,
      onClick: () => {
        console.log("Card Pressed 1");
      },
    },
    {
      cardId: 2,
      imgSrc: "/space.jpg",
      isFlipped: true,
      isMatched: false,
      onClick: () => {
        console.log("Card Pressed 2");
      },
    },
    {
      cardId: 3,
      imgSrc: "/space_pod.jpg",
      isFlipped: true,
      isMatched: false,
      onClick: () => {
        console.log("Card Pressed 3");
      },
    },
  ];

  const shuffleArray = (array: Card[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledArray = shuffleArray([
    ...cardContentArray.map((card, index) => ({
      ...card,
      uniqueKey: `${card.cardId}-${index}-1`,
    })),
    ...cardContentArray.map((card, index) => ({
      ...card,
      uniqueKey: `${card.cardId}-${index}-2`,
    })),
  ]);

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
            {shuffledArray.map((card, index) => {
              return (
                <CardComponent
                  key={index}
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
