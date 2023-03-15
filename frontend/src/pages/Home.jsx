import AbbePierreCitation from "../components/AbbePierreCitation";
import Antutu from "../components/Antutu";

export default function Home() {
  return (
    <header>
      <AbbePierreCitation />
      <Antutu />
      <div className="flex flex-col h-250 w-250 bg-slate-400">
        <img src="" alt="" />
        <div>
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Mot de passe" />
        </div>
      </div>
    </header>
  );
}
