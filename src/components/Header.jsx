import React from "react";
import logo from "../assets/images/coffee_image.jpg";
import { motion } from "framer-motion";
import Button from "./UI/Button";
import TypeEffect from "./UI/TypeEffect";

const textToType = "- Every Sip Unlocks Memories...";

const Header = () => {
  return (
    <header id="main-header">
      <div id="title">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img src={logo} alt="coffeeBeans" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Brewed Brilliance
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ fontSize: "18px", textAlign: "center", marginTop: "10px" }}
        >
          <TypeEffect text={textToType} />
        </motion.h2>
      </div>
      <nav>
        <Button>Cart (0)</Button>
      </nav>
    </header>
  );
};

export default Header;
