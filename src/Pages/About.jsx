import '../App.css';

function About() { 
    return (
        <><div className="App">
            <header className="App-header">
            <h1>About</h1>
            <p>
               So you know my name is <b>Blue</b> and I am a <b>React/Bot Developer</b> from <b>Canada</b>.
            </p>
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