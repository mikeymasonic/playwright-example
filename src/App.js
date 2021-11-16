import birbs from './tchoknwoot.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={birbs} className="App-logo" alt="logo" />
        <p>
         Hello, I am react app, welcome
        </p>
        <a
          className="App-link"
          href="https://duckduckgo.com"
        >
          link to search engine
        </a>
        <a
          className="App-link"
          href="https://archive.org"
        >
          link to archive.org
        </a>
      </header>
    </div>
  );
}

export default App;
