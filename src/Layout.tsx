import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { motion } from "framer-motion";

const Layout = () => {
  const [openModalState, setOpenModalState] = useState(false);
  const onClick = () => {
    setOpenModalState(true);
  };
  const onClickOverlay = () => {
    setOpenModalState(false);
  };

  const modalVariants = {
    start: {
      y: -300,
      opacity: 0,
    },
    end: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };
  return (
    <div className="w-full min-h-screen">
      {openModalState ? (
        <div
          onClick={onClickOverlay}
          className="fixed w-full bg-black bg-opacity-50 h-full z-10"
        >
          <motion.div
            variants={modalVariants}
            initial="start"
            animate="end"
            className="z-10 fixed left-0 right-0 top-0 bottom-0 m-auto w-3/4 h-3/4 rounded-xl bg-white"
          ></motion.div>
        </div>
      ) : null}
      <Navbar openModal={onClick} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
