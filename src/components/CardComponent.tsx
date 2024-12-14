const CardComponent = () => {
  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow">
      <div className="aspect-w-4 aspect-h-3">
        <img
          className="w-full h-full object-cover rounded-lg"
          src="https://via.placeholder.com/400x300"
          alt="Memory Card"
          id="#"
        />
      </div>
    </div>
  );
};

export default CardComponent;
