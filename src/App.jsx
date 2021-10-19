import './App.css';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Hello I'm Blue.
        </h2>
        <a>I'm a website and bot developer, I really like meeting new people and working with friends to make new sites and bots</a>
        <h2>My new Projects</h2>
        <a
          className="App-link"
          href="https://mail-hook.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
          MailHook
        </a>
      </header>
    </div>
  );
}

export default App;
