import './App.css';
import logo from './logo.png'

function App() {
  return (
    <><div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="about">Hello I'm Blue, I'm a React/Bot Developer.</p>
        <a className="App-link"
          href="https://github.com/DeveloperJosh"
          target="_blank"
          rel="noopener noreferrer">
          <button class className="btn">My Github</button>
        </a>
        <a className="App-link"
          href="/about"
          rel="noopener noreferrer">
          <button class className="btn">About me</button>
        </a>
        <a className='App-link'
        href='/twitch'
        rel="noopener noreferrer">
          <button class className="btn">Aka_Yee's Twitch</button>
        </a>
      </header>
    </div><div>
        <footer className="footer">Made by Josh</footer>
      </div></>

  );
}

export default App;
