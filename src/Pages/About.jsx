import '../App.css';

function About() { 
    return (
        <><div className="App">
            <header className="App-header">
            <h1>About</h1>
            <p>
               So you know my name is <b>Blue</b> and I'm a <b>React/Bot Developer</b> from <b>Canada</b>.
            </p>
            <h2 className="App-subheader">What i have made.</h2>
            <a className="App-link"
          href="/mailhook"
          rel="noopener noreferrer">
          <button class className="btn blue">Mail-Hook</button>
           </a>
           <a className="App-link"
          href="https://github.com/DeveloperJosh/moderextor"
          rel="noopener noreferrer">
          <button class className="btn red1">Moderextor</button>
           </a>
            <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
           >
            <button className='btn'>Home</button>
            </a>
            </header>
            </div><div>
        <footer className="footer">Made by Josh</footer>
      </div></>
    );
}
    
export default About;