import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const onClickLogo = () => {
    navigate("/");
  };
  return (
    <div className="w-full px-16 py-6 bg-slate-100 flex justify-between items-center">
      <div onClick={onClickLogo} className="text-5xl font-bold cursor-pointer">
        Grit
      </div>
      <div className="flex space-x-12 items-center">
        <div className="space-x-4">
          <button className="border-gray-500 border px-4 py-2 text-sm">
            학원소개
          </button>
          <button className="border-gray-600 border px-4 py-2 text-sm">
            학원소식
          </button>
          <button className="border-gray-600 border px-4 py-2 text-sm">
            강사진소개
          </button>
          <button className="border-gray-600 border px-4 py-2 text-sm">
            강사채용
          </button>
          <button className="border-gray-600 border px-4 py-2 text-sm">
            교육관 위치
          </button>
          <button className="border-gray-600 border px-4 py-2 text-sm">
            입시정보
          </button>
          <button className="border-gray-600 border px-4 py-2 text-sm">
            로그인
          </button>
        </div>
        <div>
          <svg
            width="40"
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
