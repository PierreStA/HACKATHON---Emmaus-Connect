import AbbePierreCitation from "../components/AbbePierreCitation";

export default function Home() {
  return (
    <div>
      <header>
        <AbbePierreCitation />
        <button type="button" className="btn-darkgreen">
          Connection
        </button>
      </header>
    </div>
  );
}
