import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="buton"
      className={`py-4  rounded-xl px-4 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
