import AbbePierreCitation from "../components/AbbePierreCitation";

export default function Home() {
  return (
    <div>
      <header>
        <AbbePierreCitation />
        <button type="button" className="btn-darkgreen">
          Connection
        </button>
        <button type="button" className="btn-yellow">
          Connection
        </button>
      </header>
    </div>
  );
}
