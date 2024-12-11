import { useState } from "react";
import { languages } from "@/lib/const";
import { NextPage } from "next";

interface Props {
  buttonMenuStyles?: string;
}

const LanguageSelector: NextPage<Props> = ({ buttonMenuStyles }) => {
  const [selectedLanguage, setSelectedLanguage] = useState("English (US)");
  const [expandedMenu, setExpandedMenu] = useState<boolean>(false);
  const [languageFocused, setLanguageFocused] = useState<string | null>(null);

  const handleFocus = (param: string) => {
    setExpandedMenu(!expandedMenu);
    setLanguageFocused(param);
  };

  const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    // Verifica si el foco se movió fuera del componente
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setExpandedMenu(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      setExpandedMenu(false);
    }
  };

  return (
    <div
      className="relative group "
      style={{ fontFamily: "Heebo, sans-serif" }}
      onBlur={handleBlur} // Detecta pérdida de foco
      tabIndex={-1}
      onMouseEnter={() => setExpandedMenu(true)}
      onMouseLeave={() => setExpandedMenu(false)}
      onKeyDown={handleKeyDown}
    >
      {/* Botón principal */}
      <button
        id="button-language"
        className={`text-gray-700 min-w-[125px] hover:text-gray-900 px-3 py-2 text-[14px] font-bold antialiased ${buttonMenuStyles}`}
        aria-label="Select Language"
        aria-haspopup="true"
        aria-expanded={expandedMenu}
        onFocus={() => {
          console.log("Estoy en onFocus");

          return handleFocus(selectedLanguage);
        }}
      >
        {selectedLanguage}
        <span className="ml-2">&#x25BC;</span> {/* Flecha hacia abajo */}
      </button>

      {/* Submenú de idiomas */}

      <menu
        className={`absolute top-full left-0 w-fit
       bg-white shadow-lg transition-all duration-300
       ease-in-out overflow-hidden transform origin-top z-50
        max-h-0 group-hover:max-h-96 
        focus-within:max-h-96
        ${expandedMenu ? "max-h-96" : "focus-within:max-h-0 max-h-0"}
        `}
        // This can see like useless but this garantice good compatibility with old  browser
        role="menu"
      >
        <ul className="grid grid-cols-1 w-fit">
          {languages.map((language) => (
            <li
              key={`item-${language}`}
              className={`block cursor-pointer text-[14px]  px-4 py-4 text-gray-700
                hover:bg-gray-100 hover:underline hover:decoration-2
                 focus:bg-gray-200 hover:underline-offset-[12px] 
                 ${selectedLanguage === language ? "font-bold" : ""}
                 ${
                   languageFocused === language
                     ? "underline underline-offset-[12px] decoration-2"
                     : ""
                 }
                 `}
              role="menuitem"
              tabIndex={0} // Para que sea navegable con teclado
              onClick={() => {
                setSelectedLanguage(language);
                setExpandedMenu(false);
              }}
              onFocus={() => {
                setLanguageFocused(language);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelectedLanguage(language);
                }
              }}
            >
              {language}
            </li>
          ))}
        </ul>
      </menu>
    </div>
  );
};

export default LanguageSelector;
