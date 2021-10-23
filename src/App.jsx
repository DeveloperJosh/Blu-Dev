import './App.css';
import logo from './logo.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p className="about">Hello i'm Blue, I'm a React/Bot Developer.</p>
        <a
          className="App-link"
          href="https://mail-hook.site/"
          target="_blank"
          rel="noopener noreferrer"
        >
         <button class className="btn">Mail Hook</button>
        </a>  
      <a className="App-link"
       href="https://github.com/DeveloperJosh" 
       target="_blank"
       rel="noopener noreferrer">
        <button class className="btn">My Github</button>
      </a>
      <h className="yes">About me</h>
      <table className="small">Hello as you know I'm Blue and yes i love to make websites and discord bots but sadly i have been coding for years but i am a bad developer but i get the job done.</table>
      </header>
      <footer className="footer">Made by Josh</footer>
    </div>
  );
}

export default App;
