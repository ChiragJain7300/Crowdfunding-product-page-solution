const FundTypes = ({ id, title, amount, desc, ticketsLeft }) => {
  return (
    <div
      key={id}
      className={`border border-Gray-500 p-5 rounded-md mb-5 ${
        ticketsLeft === 0 && "opacity-50"
      }`}
    >
      <h1 className="text-Black font-bold mb-1">{title}</h1>
      <p className="text-Green-400 font-bold mb-5">Pledge ${amount} or more</p>
      <p className="text-Gray-500 font-semibold mb-5">{desc}</p>
      <p className="flex items-center gap-2 font-bold">
        <span className="text-Black text-3xl">{ticketsLeft}</span> left
      </p>

      <button
        disabled={ticketsLeft === 0}
        className={`w-48 py-3 rounded-full text-white font-bold mt-5 cursor-pointer  duration-150 ${
          ticketsLeft > 0 ? "bg-Green-400 hover:bg-Green-700" : "bg-Gray-500"
        } `}
      >
        {ticketsLeft > 0 ? "Select Reward" : "Sold Out"}
      </button>
    </div>
  );
};

export default FundTypes;
