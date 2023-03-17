import { Link } from "react-router-dom";
import AbbePierreCitation from "../components/AbbePierreCitation";
import Logo from "../assets/logo_complet.png";

export default function Home() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('./src/assets/agussss_(50).jpg')" }}
    >
      {" "}
      <img
        src={Logo}
        alt="logo"
        className="  object-left-top bg-blue-600 bg-opacity-10 rounded-2xl "
      />
      <AbbePierreCitation />
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col ">
          <div className="h-[240px] w-[500px] flex items-center justify-center gap-4 ">
            <form className=" w-full flex flex-col items-center justify-center gap-4">
              <input
                type="text"
                name="email"
                placeholder="E-mail"
                className=" w-64 bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <input
                type="password"
                name="password"
                placeholder="Mot de passe"
                className=" w-64 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link
          to="/calculette"
          className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-purple transition ease-in-out duration-150"
        >
          Connexion
        </Link>
      </div>
    </div>
  );
}
