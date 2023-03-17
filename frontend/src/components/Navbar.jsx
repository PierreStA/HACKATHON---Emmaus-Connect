import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo_image.png";
import Citation from "./AbbePierreCitation";

export default function Menu() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <div className="flex flex-wrap py-2">
      <div className="w-full px-4">
        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3  rounded">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
              <div
                className="inline-block mr-4 py-2 whitespace-nowrap uppercase "
                href="#pablo"
              >
                <NavLink to="/">
                  <img
                    src={logo}
                    alt="hero"
                    className="w-1/3 h-auto object-scale-down"
                  />
                </NavLink>
              </div>

              <button
                className="text-black cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <i className="fas fa-bars" />
                Menu
              </button>
            </div>
            <div
              className={`lg:flex flex-grow items-center${
                menuOpen ? " flex" : " hidden"
              }`}
              id="example-navbar-info"
            >
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto ">
                <li className="nav-item">
                  <ul className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-black hover:opacity-75">
                    <NavLink to="/recherche">Recherche</NavLink>
                  </ul>
                </li>
                <li className="nav-item">
                  <ul
                    className="px-3 py-2 flex items-center uppercase font-bold leading-snug text-black hover:opacity-75 text-base"
                    href="#pablo"
                  >
                    <NavLink to="/calculette">Calculatrice</NavLink>
                  </ul>
                </li>
                <ul className="nav-item">
                  <NavLink
                    to="/dashboard"
                    className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-black hover:opacity-75"
                    href="#pablo"
                  >
                    Base de donnée
                  </NavLink>
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
