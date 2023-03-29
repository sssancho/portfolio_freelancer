import React, { useState, useEffect, useRef } from "react";
import { useLocalStorage } from "../../utils/useLocalStorage";

import detectDarkMode from "../../utils/detectDarkMode";

import "./style.css";
import sun from "../../img/icons/sun.svg";
import moon from "../../img/icons/moon.svg";


const ButtonDarkMode = () => {
  const [darkmode, setDarkmode] = useLocalStorage('darkMode', detectDarkMode());

  const btnRef = useRef(null);

  useEffect(() => {
    if (darkmode === "dark") {
      document.body.classList.add("dark");
      btnRef.current.classList.add('dark-mode-btn--active')
    } else if (darkmode === "ligth") {
      document.body.classList.remove("dark");
      btnRef.current.classList.remove('dark-mode-btn--active')

    }
  }, [darkmode]);
  const toggleDarkMode = () => {
    setDarkmode((currentValue) => {
      return currentValue === "ligth" ? "dark" : "ligth";
    });
  };

  return (
    <button ref={btnRef} className='dark-mode-btn' onClick={toggleDarkMode}>
      <img src={sun} alt='Light mode' className='dark-mode-btn__icon' />
      <img src={moon} className='dark-mode-btn__icon' />
    </button>
  );
};

export default ButtonDarkMode;
