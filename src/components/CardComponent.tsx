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
      className={`max-w-xs bg-white border border-gray-200 rounded-lg shadow ${
        isMatched ? "opacity-50" : ""
      }`}
      onClick={onClick}
    >
      <div className="aspect-w-4 aspect-h-3">
        {isFlipped || isMatched ? (
          <img
            className="w-full h-full object-cover rounded-lg"
            src={imgSrc}
            alt={`Card ${cardId}`}
          />
        ) : (
          <div className="w-full h-full bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-700 text-xl">?</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardComponent;
