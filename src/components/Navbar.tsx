import { useNavigate } from "react-router-dom";

interface IProp {
  openModal: () => void;
}

const Navbar = ({ openModal }: IProp) => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <>
      <div className="w-full xl:px-36 lg:px-20  px-16  py-5 flex justify-between items-center border-b border-b-gray-300 border-b-1.5">
        <div
          onClick={onClickLogo}
          className="text-5xl font-bold cursor-pointer font-serif"
        >
          Grit
        </div>
        <div className="flex space-x-12 items-center">
          <div className="hidden lg:flex space-x-4">
            <button className="border-gray-500 border px-4 py-2 text-xs text-gray-600">
              학원소개
            </button>
            <button className="border-gray-500 border px-4 py-2 text-xs text-gray-600">
              학원소식
            </button>
            <button className="border-gray-600 border px-4 py-2 text-xs text-gray-600">
              강사진소개
            </button>
            <button className="border-gray-600 border px-4 py-2 text-xs text-gray-600">
              강사채용
            </button>
            <button className="border-gray-600 border px-4 py-2 text-xs text-gray-600">
              교육관 위치
            </button>
            <button className="border-gray-600 border px-4 py-2 text-xs text-gray-600">
              입시정보
            </button>
            <button className="border-gray-600 border px-4 py-2 text-xs text-gray-600">
              로그인
            </button>
          </div>
          <div>
            <svg
              onClick={openModal}
              className="cursor-pointer"
              width="40"
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
