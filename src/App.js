import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello I'm Blue.
        </p>
        <a
          className="App-link"
          href="https://github.com/DeveloperJosh"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Github
        </a>
        <a
          className="App-link"
          href="https://mail-hook.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Bot
        </a>
      </header>
    </div>
  );
}

export default App;
