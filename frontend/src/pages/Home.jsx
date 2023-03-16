import { Link } from "react-router-dom";
import AbbePierreCitation from "../components/AbbePierreCitation";
import Logo from "../assets/logo_image.png";
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-blue-500 to-blue-300 h-full">
      <div className="flex flex-col items-center justify-center">
        <img
          src={Logo}
          alt="logo"
          className="h-[100px] w-[200px]"
        />
        <AbbePierreCitation />
        <div className="flex flex-row">
          <div className="h-[240px] flex items-center gap-8">
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Link
          to="/calculette"
          className="inline-flex items-center px-4 py-2 bg-darkgreen border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red transition ease-in-out duration-150"
        >
          Connexion
        </Link>
      </div>
    </div>
  );
}
