import birbs from './tchoknwoot.jpg';
import './App.css';

function App() {
  const handleClickGreen = () => {
    const body = document.body; // accessing body element
    body.style.background = 'green'; // changing color to green
  };

  const handleClickPurple = () => {
    const body = document.body; // accessing body element
    body.style.background = 'purple'; // changing color to purple
  };

  const handleClickOrange = () => {
    const body = document.body; // accessing body element
    body.style.background = 'orange'; // changing color to orange
  };

  const handleClickRed = () => {
    const body = document.body; // accessing body element
    body.style.background = 'red'; // changing color to red
  };

  const handleClickTeal = () => {
    const body = document.body; // accessing body element
    body.style.background = '#81ecec'; // changing color to teal
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={birbs} className="App-logo" alt="logo" />

        <p className="App-title">
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

        <button 
          onClick={handleClickGreen} 
          className="greenButton">
          green
        </button>

        <button 
          onClick={handleClickPurple} 
          className="purpleButton">
          purple
        </button>

        <button 
          onClick={handleClickOrange} 
          className="orangeButton"
        >
          orange
        </button>

        <button 
          onClick={handleClickRed} 
          className="redButton"
        >
          red
        </button>

        <button 
          onClick={handleClickTeal} 
          className="tealButton"
        >
          teal
        </button>
      </header>
    </div>
    )
  }

export default App;
