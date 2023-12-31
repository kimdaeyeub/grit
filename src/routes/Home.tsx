import Card from "../components/Card";

const Home = () => {
  return (
    <div
      className="w-full xl:px-36 lg:px-20 px-4
     py-12 grid grid-cols-1 lg:grid-cols-2 gap-4 box-border"
    >
      <div className="w-full grid grid-cols-2 gap-4 pr-4 lg:mt-0 mt-4 order-last lg:order-first lg:max-h-[900px]">
        <Card link="/고등영어" title="고등영어" />
        <Card link="/" title="중등영어" />
        <Card link="/" title="고등국어" />
        <Card link="/" title="중등국어" />
        <Card link="/" title="고등수학" />
        <Card link="/" title="중등수학" />
        <Card long link="/" title="정시대비 전과목반" />
      </div>
      <div className="w-full relative lg:max-h-[900px]">
        <img
          src="https://i.pinimg.com/originals/49/35/24/4935243cd94bb22403845f266a8c3034.png"
          className="w-full h-full bg-yellow-600"
        />
        <button className="absolute right-4 top-1/2 bg-slate-400 bg-opacity-40 text-white px-2 py-3 rounded-lg">
          <svg
            width={30}
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
        </button>
      </div>
    </div>
  );
};

export default Home;
