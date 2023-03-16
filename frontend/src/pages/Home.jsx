import Navbar from "@components/Navbar";
import AbbePierreCitation from "../components/AbbePierreCitation";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-blue-500 to-blue-300 h-full">
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <img src="" alt="" />
        <AbbePierreCitation />
        <div className="flex flex-row">
          <div className="h-[240px] flex items-center justify-evenly">
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
        <button type="button" className="btn-darkgreen">
          Connection
        </button>
      </div>
    </div>
  );
}
