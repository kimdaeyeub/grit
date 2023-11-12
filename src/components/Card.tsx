interface ICard {
  long?: boolean;
  title: string;
}

const Card = ({ long, title }: ICard) => {
  return (
    <div
      className={`bg-[#F8F8F8] hover:bg-[#222f3e] span ${
        long ? "col-span-2" : ""
      } p-10 flex flex-col items-start transition-colors group`}
    >
      <span className="uppercase text-gray-500 font-medium text-lg">class</span>
      <span className="text-2xl font-semibold mt-1 group-hover:text-white">
        {title}
      </span>
      <div className="flex w-full justify-start items-center mt-5 gap-2">
        <span className="font-light text-gray-400 text-xs uppercase">
          view more
        </span>
        <svg
          className="text-gray-400"
          width={13}
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Card;
