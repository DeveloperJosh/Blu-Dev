import '../App.css';

export const Oh404 = () => {
    return (
        <div className="App">
            <header className="App-header">
            <p>404</p>
            <p>
               Hey you should go home
            </p>
            <a
          className="App-link"
          href="/"
          rel="noopener noreferrer"
           >
            <button className='btn'>Home</button>
            </a>
            </header>
        </div>
    );
}
    
export default Oh404;