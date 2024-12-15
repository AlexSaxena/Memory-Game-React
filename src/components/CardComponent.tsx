type CardProps = {
  cardId: number;
  imgSrc: string;
  isFlipped: boolean;
  isMatched: boolean;
  onClick: () => void;
};

function CardComponent({
  cardId,
  imgSrc,
  isFlipped,
  isMatched,
  onClick,
}: CardProps) {
  return (
    <div
      className={`w-60 h-48 bg-white border border-gray-200 rounded-lg shadow ${
        isMatched ? "opacity-50" : ""
      }`}
      onClick={onClick}
    >
      <div className="w-full h-full">
        {isFlipped || isMatched ? (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={imgSrc}
            alt={`Card ${cardId}`}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-700 text-7xl">?</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardComponent;
