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
    setTimeout(() => {
      const newElement = document.createElement('div');
      newElement.style.color = 'purple';
      newElement.classList.add('New-thing');
      newElement.textContent = 'This is a thing I just created';
      document.getElementById('thing').append(newElement);
      const body = document.body; // accessing body element
      body.style.background = 'red'; // changing color to red
    }, 5000);
  };

  const handleClickTeal = () => {
    const body = document.body; // accessing body element
    body.style.background = '#81ecec'; // changing color to teal
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={birbs} className="App-logo" alt="logo" />
        <div id='thing'>
         
        <p className="App-title">
         Hello, I am react app, welcome
        </p>

        <a
          className="App-link"
          href="https://duckduckgo.com"
        >
          link to search engine
        </a>
        <br />
        <a
          className="App-link"
          href="https://archive.org"
        >
          link to archive.org
        </a>
        <br />

        <button 
          onClick={handleClickGreen} 
          className="green-button">
          green
        </button>

        <button 
          onClick={handleClickPurple} 
          className="purple-button">
          purple
        </button>

        <button 
          onClick={handleClickOrange} 
          className="orange-button"
        >
          orange
        </button>

        <button 
          onClick={handleClickRed} 
          className="red-button"
        >
          red
        </button>

        <button 
          onClick={handleClickTeal} 
          className="teal-button"
        >
          teal
        </button>
      </div>
      </header>
    </div>
    )
  }

export default App;
