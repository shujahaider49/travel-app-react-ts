"use client";

import React, { useEffect, useState } from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const DarkLight = () => {
  const [theme, setTheme] = useState("light");

  function changeTheme() {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <>
      <button onClick={changeTheme} className="transition-all delay-200">
        {theme === "light" ? (
          <MdOutlineDarkMode size={40} />
        ) : (
          <CiLight size={40} />
        )}
      </button>
    </>
  );
};

export default DarkLight;
