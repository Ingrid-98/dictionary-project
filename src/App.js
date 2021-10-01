import "./App.css";
import Dictionary from "./Dictionary";
function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="friend" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/ingrid-opdebeeck-1b1b11148/"
              target="_blank"
              rel="noreferrer"
            >
              Ingrid Opdebeeck{" "}
            </a>
            , open-sourced on{" "}
            <a
              href="https://github.com/Ingrid-98/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Github{" "}
            </a>{" "}
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
