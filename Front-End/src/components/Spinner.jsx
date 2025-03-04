import React from "react";
import { motion } from "framer-motion";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="w-12 h-12 border-4 border-[#246545] border-t-transparent rounded-full animate-spin"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
      />
    </div>
  );
};

export default Spinner;
