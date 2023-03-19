import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

const LanguageDropdown = () => {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    async function fetchLanguages() {
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        const data = await response.data;
        const allLanguages = data.reduce((acc, country) => {
          country.languages.forEach((language) => {
            if (!acc.find((l) => l.iso639_1 === language.iso639_1)) {
              acc.push(language);
            }
          });
          return acc;
        }, []);
 
        setSelectedLanguage(allLanguages[65]);
        setLanguages(allLanguages);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLanguages();
  }, []);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function selectLanguage(language) {
    setSelectedLanguage(language);
    setIsOpen(false);
  }

  function handleClickOutside(event) {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  return (
    <div className="relative   text-sm  w-28 cursor-pointer">
      {selectedLanguage && (
        <div
          className="flex items-center  rounded-md border-gray-300"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <div className="overflow-ellipsis whitespace-nowrap">
            {selectedLanguage.name}
          </div>
          <span className="text-xl mr-1 text-gray-500">
            <AiFillCaretDown size="13px" />
          </span>
        </div>
      )}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white  text-sm  shadow-lg max-h-44 overflow-y-auto overflow-x-hidden">
          {languages.map((language) => (
            <div
              key={language.iso639_2}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer "
              onClick={() => selectLanguage(language)}
            >
              <span>{language.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
