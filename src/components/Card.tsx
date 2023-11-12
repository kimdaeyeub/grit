import { Link } from "react-router-dom";

interface ICard {
  long?: boolean;
  title: string;
  link: string;
}

const Card = ({ long, title, link }: ICard) => {
  return (
    <Link to={link} className={`${long ? "col-span-2" : ""} p-0`}>
      <div
        className={`bg-[#F8F8F8] hover:bg-[#222f3e] p-10 flex flex-col items-start transition-colors group box-border w-full h-full`}
      >
        <span className="uppercase text-gray-500 font-medium text-lg">
          class
        </span>
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
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </div>
      </div>
    </Link>
  );
};

export default Card;
